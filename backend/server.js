const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const uniqid = require('uniqid');
const sha256 = require('sha256');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const app = express();

// PhonePe Configuration
const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_ID = "PGTESTPAYUAT86";
const SALT_INDEX = 1;
const SALT_KEY = "96434309-7796-489d-8924-ab56988a6076";
const JWT_SECRET = process.env.JWT_SECRET || "ee68afb9014a2a7b35c87ed148fe6dce0614cd4d64ec71e592af93c537f235a2";

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/pawfinders', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// ==================== SCHEMAS ====================

// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    contact: String,
    email: { type: String, unique: true, required: true },
    dob: Date,
    password: String,
    country: String
});
const User = mongoose.model('User', UserSchema);

// Vet Appointment Schema
const VetAppointmentSchema = new mongoose.Schema({
    doctorName: String,
    doctorNumber: String,
    location: String,
    fromTime: String,
    toTime: String,
    vetService: String,
    description: String
});
const VetAppointment = mongoose.model('VetAppointment', VetAppointmentSchema);

// Pet Schema
const petSchema = new mongoose.Schema({
    breed: String,
    lastSeenLocation: String,
    distinctiveFeatures: String,
    contactInfo: String,
    imagePath: String,
});
const Pet = mongoose.model("Pet", petSchema);

// Donation Schema
const donationSchema = new mongoose.Schema({
    donorName: String,
    donorContact: String,
    donorEmail: String,
    donorAddress: String,
    donationType: String,
    petDetails: {
        petName: String,
        petType: String,
        petAge: String,
        petBreed: String,
        petDescription: String,
        petHealth: String
    },
    donationAmount: Number,
    date: { type: Date, default: Date.now }
});
const Donation = mongoose.model("Donation", donationSchema);

// Adoption Schema
const AdoptionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    pet: { type: String, required: true },
    agreed: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Adoption = mongoose.model('Adoption', AdoptionSchema);

// Visit Schema
const VisitSchema = new mongoose.Schema({
    name: String,
    contact: String,
    email: String,
    visitDate: Date,
    visitTime: String,
    pet: String,
    createdAt: { type: Date, default: Date.now }
});
const Visit = mongoose.model('Visit', VisitSchema);

// ==================== MULTER CONFIGURATION ====================

// Multer for Image Upload
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage });

// ==================== AUTHENTICATION ROUTES ====================

// Register Route
app.post('/register', async (req, res) => {
    const { name, contact, email, dob, password, country } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already registered' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, contact, email, dob, password: hashedPassword, country });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// ==================== PET MANAGEMENT ROUTES ====================

// Save Pet Details
app.post("/savePet", upload.single("lostPetImage"), async (req, res) => {
    try {
        const newPet = new Pet({
            breed: req.body["pet-breed"],
            lastSeenLocation: req.body["last-seen-location"],
            distinctiveFeatures: req.body["distinctive-features"],
            contactInfo: req.body["contact-info"],
            imagePath: req.file ? req.file.path : null,
        });

        await newPet.save();
        res.json({ message: "Pet details saved successfully!", pet: newPet });
    } catch (error) {
        res.status(500).json({ error: "Error saving pet details" });
    }
});

// Retrieve All Pets
app.get("/getPets", async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving pet details" });
    }
});

// ==================== DONATION ROUTES ====================

// Save Donation
app.post("/donate", async (req, res) => {
    try {
        const { donorName, donorContact, donorEmail, donorAddress, donationType, petDetails, donationAmount } = req.body;

        const newDonation = new Donation({
            donorName,
            donorContact,
            donorEmail,
            donorAddress,
            donationType,
            petDetails: donationType === "pet" || donationType === "both" ? petDetails : null,
            donationAmount: donationType === "money" || donationType === "both" ? donationAmount : null
        });

        await newDonation.save();
        res.status(201).json({ message: "Donation recorded successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error saving donation details" });
    }
});

// Retrieve Donations
app.get("/getDonations", async (req, res) => {
    try {
        const donations = await Donation.find();
        res.json(donations);
    } catch (error) {
        res.status(500).json({ error: "Error fetching donations" });
    }
});

// ==================== VET APPOINTMENT ROUTES ====================

// Store Vet Appointment
app.post('/api/vet-appointment', async (req, res) => {
    try {
        const newAppointment = new VetAppointment(req.body);
        await newAppointment.save();
        res.json({ message: 'Vet appointment booked successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving appointment', error });
    }
});

// ==================== ADOPTION ROUTES ====================

// Adoption Application Route
app.post('/apply-adoption', async (req, res) => {
    const { name, contact, email, address, country, pet, agree } = req.body;
    
    if (!agree) {
        return res.status(400).json({ message: "You must agree to provide a safe and loving home." });
    }

    try {
        const newApplication = new Adoption({
            name,
            contact,
            email,
            address,
            country,
            pet,
            agreed: true
        });
        await newApplication.save();
        res.status(201).json({ message: 'Adoption application submitted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error while processing your application' });
    }
});

// ==================== VISIT SCHEDULING ROUTES ====================

// Schedule Visit
app.post('/schedule-visit', async (req, res) => {
    const { name, contact, email, visitDate, visitTime, pet } = req.body;
    try {
        const newVisit = new Visit({ name, contact, email, visitDate, visitTime, pet });
        await newVisit.save();
        res.status(201).json({ message: 'Visit scheduled successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error scheduling visit' });
    }
});

// ==================== PAYMENT ROUTES (PhonePe Integration) ====================

// Initiate Payment
app.get("/pay", async (req, res) => {
    try {
        const payEndpoint = "/pg/v1/pay";
        const merchantTransactionId = uniqid();
        const amountInPaise = req.query.totalValue ? req.query.totalValue * 100 : 0;

        if (amountInPaise <= 0) {
            return res.redirect(`/payment-status.html?status=failed&error=Invalid%20amount`);
        }

        const payload = {
            merchantId: MERCHANT_ID,
            merchantTransactionId,
            amount: amountInPaise,
            redirectUrl: `http://localhost:5000/redirect-url/${merchantTransactionId}`,
            redirectMode: "REDIRECT",
            mobileNumber: "9999999999",
            paymentInstrument: { type: "PAY_PAGE" }
        };

        const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");
        const xVerify = sha256(base64Payload + payEndpoint + SALT_KEY) + "###" + SALT_INDEX;

        const response = await axios.post(`${PHONE_PE_HOST_URL}${payEndpoint}`, { request: base64Payload }, {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "X-VERIFY": xVerify
            }
        });

        if (response.data.success && response.data.data.instrumentResponse.redirectInfo.url) {
            return res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
        } else {
            return res.redirect(`/payment-status.html?status=failed&error=Payment%20initiation%20failed`);
        }

    } catch (error) {
        console.error(error.response?.data || error.message);
        return res.redirect(`/payment-status.html?status=failed&error=Server%20Error`);
    }
});

// Payment Status Route - After Redirection
app.get("/redirect-url/:merchantTransactionId", async (req, res) => {
    try {
        const { merchantTransactionId } = req.params;
        const statusEndpoint = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`;
        const xVerify = sha256(statusEndpoint + SALT_KEY) + "###" + SALT_INDEX;

        const response = await axios.get(`${PHONE_PE_HOST_URL}${statusEndpoint}`, {
            headers: {
                accept: "application/json",
                "X-VERIFY": xVerify
            }
        });

        const paymentStatus = response.data.code || "PAYMENT_ERROR";
        const amount = response.data.data?.amount ? response.data.data.amount / 100 : 0;
        const errorMessage = response.data.message || "Transaction Failed";

        if (paymentStatus === "PAYMENT_SUCCESS") {
            return res.redirect(`/payment-status.html?status=success&amount=${amount}`);
        } else {
            return res.redirect(`/payment-status.html?status=failed&error=${encodeURIComponent(errorMessage)}`);
        }

    } catch (error) {
        console.error(error.response?.data || error.message);
        return res.redirect(`/payment-status.html?status=failed&error=Error%20Fetching%20Status`);
    }
});

// ==================== GENERAL ROUTES ====================

// API Test Route
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the PawFinders API' });
});

// Fallback route for serving frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

// ==================== SERVER START ====================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
