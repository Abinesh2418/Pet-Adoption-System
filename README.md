# 🐾 PawFinders - Pet Adoption System

## � Project Description

**PawFinders** is a full-stack web application designed to connect loving homes with pets in need. The platform serves as a comprehensive solution for pet adoption management, combining modern web technologies with AI-powered features to create a seamless experience for both pet owners and adopters.

The system addresses key challenges in pet adoption and welfare:
- 🏠 Simplifies the pet adoption process with online applications
- 🔍 Helps reunite lost pets with their owners using AI breed detection
- 💝 Facilitates donations to support NGO operations
- 🏥 Provides easy access to veterinary services
- 📅 Enables scheduling of pet meet-and-greet visits
- 💳 Integrates secure payment processing for donations

---

## 🎯 Project Details

### Core Features

#### 🔐 User Management
- User registration and authentication with JWT tokens
- Secure password hashing using bcrypt
- Session management and protected routes
- Profile management

#### 🐶 Pet Adoption System
- Browse available pets with detailed profiles
- High-quality pet images and descriptions
- Adoption application submission
- Visit scheduling before adoption
- Application status tracking

#### 🔍 Lost Pet Tracking
- Report lost pets with image upload
- AI-powered breed identification (TensorFlow model)
- Search functionality for finding lost pets
- Contact information management
- Location-based tracking

#### 💰 Donation Management
- Multiple donation types:
  - Monetary donations
  - Pet supply donations
  - Combined donations
- Integrated PhonePe payment gateway
- Real-time payment status tracking
- Donation receipts and history
- Secure transaction processing

#### 🏥 Veterinary Services
- Online vet appointment booking
- Doctor selection and scheduling
- Service type selection (checkup, vaccination, grooming, surgery)
- Time slot management
- Appointment reminders

#### 🤖 AI-Powered Chatbot
- Intelligent pet care assistance
- 24/7 query resolution
- Pet health and care recommendations
- Integration with LangChain and Groq LLM
- Vector database for knowledge retrieval

### Technical Highlights

- **RESTful API Architecture**: Clean, organized endpoints
- **Database**: MongoDB with Mongoose ODM for data persistence
- **Security**: JWT authentication, password hashing, environment variable protection
- **File Handling**: Multer for image uploads with validation
- **Payment Integration**: PhonePe sandbox for testing, production-ready
- **AI/ML**: TensorFlow-based breed classification model
- **NLP**: LangChain-powered chatbot with contextual understanding

---

## 🛠️ Tech Stack

### Frontend Technologies
| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure and markup | - |
| **CSS3** | Styling and layout | - |
| **JavaScript** | Client-side interactivity | ES6+ |
| **Bootstrap 5** | Responsive UI framework | 5.x |
| **Owl Carousel** | Image sliders and carousels | 2.x |
| **Waypoints** | Scroll-triggered animations | 4.x |

### Backend Technologies
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | JavaScript runtime environment | 14+ |
| **Express.js** | Web application framework | 4.x |
| **MongoDB** | NoSQL database | 4.4+ |
| **Mongoose** | MongoDB ODM | 8.x |
| **Flask** | Python web framework (chatbot) | 3.x |

### Authentication & Security
| Technology | Purpose |
|------------|---------|
| **JWT (jsonwebtoken)** | Token-based authentication |
| **bcrypt.js** | Password hashing and salting |
| **dotenv** | Environment variable management |
| **CORS** | Cross-Origin Resource Sharing |

### Payment Integration
| Technology | Purpose |
|------------|---------|
| **PhonePe Payment Gateway** | Secure payment processing |
| **Axios** | HTTP client for API requests |
| **sha256** | Cryptographic hashing for payment verification |
| **uniqid** | Transaction ID generation |

### AI/ML Technologies
| Technology | Purpose | Version |
|------------|---------|---------|
| **TensorFlow** | Machine learning framework | 2.15+ |
| **Keras** | Neural network API | 2.15+ |
| **Python** | ML model development | 3.8+ |
| **NumPy** | Numerical computing | 1.26+ |
| **Pillow** | Image processing | 10.1+ |

### NLP & Chatbot
| Technology | Purpose |
|------------|---------|
| **LangChain** | LLM application framework |
| **Groq API** | Fast LLM inference |
| **Pinecone** | Vector database for embeddings |
| **HuggingFace** | Transformer models and embeddings |
| **Sentence Transformers** | Text embedding models |

### File Handling & Utilities
| Technology | Purpose |
|------------|---------|
| **Multer** | File upload middleware |
| **body-parser** | Request body parsing |
| **path** | File path utilities |

### Development Tools
| Tool | Purpose |
|------|---------|
| **nodemon** | Auto-restart development server |
| **Git** | Version control |
| **VS Code** | Code editor (recommended) |

---

## 📁 Project Structure

```
Pet-Adoption-System/
│
├── 📁 backend/                          # Backend Server
│   │
│   ├── 📁 model/                        # AI/ML Models
│   │   ├── allDogsLables.npy           # Dog breed labels (120 breeds)
│   │   ├── testmodel.py                # Model testing script
│   │   ├── create_model_template.py    # Model creation template
│   │   ├── README.md                   # Model documentation
│   │   ├── template/                   # Model result templates
│   │   └── uploads/                    # Temporary model images
│   │
│   ├── 📁 petcare/                      # AI Chatbot Service (Flask)
│   │   ├── app.py                      # Flask application
│   │   ├── store_index.py              # Vector store indexing
│   │   ├── template.py                 # Template utilities
│   │   ├── requirements.txt            # Python dependencies
│   │   ├── setup.py                    # Package setup
│   │   ├── .env                        # Chatbot environment variables
│   │   ├── src/                        # Source code
│   │   │   ├── helper.py               # Helper functions
│   │   │   └── prompt.py               # Prompt templates
│   │   ├── templates/                  # Flask templates
│   │   ├── static/                     # Static assets
│   │   └── Data/                       # Training data
│   │
│   ├── 📁 uploads/                      # User uploaded files
│   │   ├── .gitkeep
│   │   └── [pet images]
│   │
│   ├── 📄 server.js                     # Main Express API server
│   ├── 📄 package.json                  # Node.js dependencies
│   ├── 📄 package-lock.json             # Dependency lock file
│   ├── 📄 .env                          # Backend environment variables
│   └── 📄 README.md                     # Backend documentation
│
├── 📁 frontend/                         # Frontend (Static Files)
│   ├── 📄 index.html                    # Landing page
│   ├── 📄 about.html                    # About page
│   ├── 📄 product.html                  # Pet listings
│   ├── 📄 donation.html                 # Donation page
│   ├── 📄 login.html                    # Login page
│   ├── 📄 register.html                 # Registration page
│   ├── 📄 chat.html                     # AI chatbot interface
│   ├── 📄 contact.html                  # Contact page
│   ├── 📄 service.html                  # Services page
│   ├── 📄 payment-status.html           # Payment confirmation
│   │
│   ├── 📁 css/                          # Stylesheets
│   │   ├── bootstrap.min.css
│   │   └── style.css
│   │
│   ├── 📁 js/                           # JavaScript files
│   │   └── main.js
│   │
│   ├── 📁 img/                          # Images and assets
│   │
│   └── 📁 lib/                          # Third-party libraries
│       ├── owlcarousel/                # Carousel plugin
│       ├── waypoints/                  # Scroll animations
│       ├── easing/                     # Animation easing
│       └── flaticon/                   # Icon fonts
│
├── 📄 README.md                         # Project documentation
├── 📄 requirements.txt                  # Python dependencies
└── 📄 .gitignore                        # Git ignore rules
```

### Directory Descriptions

| Directory | Purpose | Technology |
|-----------|---------|------------|
| `backend/` | Main API server and services | Node.js, Python |
| `backend/model/` | ML models for breed detection | TensorFlow, Keras |
| `backend/petcare/` | AI chatbot service | Flask, LangChain |
| `backend/uploads/` | User-uploaded pet images | Multer |
| `frontend/` | Client-side web pages | HTML, CSS, JavaScript |
| `frontend/css/` | Stylesheets | CSS3, Bootstrap |
| `frontend/js/` | Client scripts | JavaScript ES6+ |
| `frontend/lib/` | Third-party libraries | Various |

### Key Files

| File | Purpose |
|------|---------|
| `backend/server.js` | Express API server with all routes |
| `backend/petcare/app.py` | Flask chatbot service |
| `backend/package.json` | Node.js dependencies and scripts |
| `backend/.env` | Backend environment configuration |
| `frontend/index.html` | Application landing page |
| `README.md` | Complete project documentation |
| `requirements.txt` | Python package dependencies |
| `.gitignore` | Git version control exclusions |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

| Software | Version | Download Link |
|----------|---------|---------------|
| **Node.js** | v14 or higher | [nodejs.org](https://nodejs.org/) |
| **MongoDB** | v4.4 or higher | [mongodb.com](https://www.mongodb.com/try/download/community) |
| **Python** | v3.8 or higher | [python.org](https://www.python.org/downloads/) |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

### Clone the Repository

```bash
git clone https://github.com/Abinesh2418/pet-adoption-system.git
cd pet-adoption-system
```

---

### Frontend Setup

The frontend is a collection of static HTML, CSS, and JavaScript files served by the Express backend.

#### 1. Verify Frontend Files

Ensure the `frontend` directory contains:
- HTML pages (index.html, about.html, etc.)
- CSS stylesheets in `css/` folder
- JavaScript files in `js/` folder
- Images in `img/` folder
- Third-party libraries in `lib/` folder

#### 2. Access Frontend

Once the backend server is running (see Backend Setup), access the frontend at:
```
http://localhost:5000
```

#### 3. Available Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` or `/index.html` | Landing page |
| About | `/about.html` | About the NGO |
| Adoption | `/product.html` | Browse pets |
| Donation | `/donation.html` | Make donations |
| Login | `/login.html` | User login |
| Register | `/register.html` | New user registration |
| Contact | `/contact.html` | Contact form |
| Services | `/service.html` | Available services |
| Chat | `/chat.html` | AI chatbot |

#### 4. Frontend Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Bootstrap 5 components
- ✅ Interactive forms with validation
- ✅ Image carousels and galleries
- ✅ Smooth scroll animations
- ✅ AJAX calls to backend API

---

### Backend Setup

The backend consists of two services:
1. **Main API Server** (Node.js/Express) - Port 5000
2. **AI Chatbot Service** (Python/Flask) - Port 5001

#### 1. Install Node.js Dependencies

```bash
cd backend
npm install
```

This will install all required packages:
- express
- mongoose
- bcryptjs
- jsonwebtoken
- multer
- axios
- cors
- dotenv
- and more...

#### 2. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/pawfinders

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# PhonePe Payment Gateway (Test Credentials)
PHONE_PE_HOST_URL=https://api-preprod.phonepe.com/apis/pg-sandbox
MERCHANT_ID=PGTESTPAYUAT86
SALT_INDEX=1
SALT_KEY=96434309-7796-489d-8924-ab56988a6076
```

**⚠️ Important Security Notes:**
- Generate a strong `JWT_SECRET` using the command below
- Never commit `.env` files to version control
- Use different credentials for production

**Generate Secure JWT Secret:**
```bash
# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))

# Linux/Mac/Git Bash
openssl rand -base64 32
```

#### 3. Start MongoDB

**Windows:**
```bash
# Open a new terminal window
mongod
```

**Linux:**
```bash
sudo systemctl start mongod
```

**Mac (Homebrew):**
```bash
brew services start mongodb-community
```

**Verify MongoDB is Running:**
```bash
mongosh
# If connected successfully, you'll see MongoDB shell
# Type 'exit' to close
```

#### 4. Start the Main API Server

```bash
# From the backend directory
npm start
```

**Expected Output:**
```
Server running on port 5000
MongoDB connected
```

**Development Mode (with auto-reload):**
```bash
npm run dev
```

#### 5. Test the API

Open browser or use curl:
```bash
curl http://localhost:5000/api
```

**Expected Response:**
```json
{"message": "Welcome to the PawFinders API"}
```

---

### 🤖 AI Chatbot Setup (Optional)

The AI chatbot is a separate Python service that provides intelligent pet care assistance.

#### 1. Navigate to Chatbot Directory

```bash
cd backend/petcare
```

#### 2. Create Python Virtual Environment (Recommended)

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**Linux/Mac:**
```bash
python3 -m venv venv
source venv/bin/activate
```

#### 3. Install Python Dependencies

```bash
pip install -r requirements.txt
```

This installs:
- flask
- langchain
- sentence-transformers
- pinecone-client
- groq
- and more...

#### 4. Configure Chatbot Environment

Create `.env` file in `backend/petcare`:

```env
# Pinecone Vector Database
PINECONE_API_KEY=your_pinecone_api_key_here

# Groq LLM API
GROQ_API_KEY=your_groq_api_key_here
```

**Get API Keys:**
- **Pinecone**: Sign up at [pinecone.io](https://www.pinecone.io/)
- **Groq**: Sign up at [console.groq.com](https://console.groq.com/)

#### 5. Start the Chatbot Service

```bash
python app.py
```

**Expected Output:**
```
* Running on http://localhost:5001
* Debug mode: on
```

#### 6. Test the Chatbot

Access the chatbot interface:
```
http://localhost:5000/chat.html
```

#### 7. Store Embeddings (First Time Setup)

Before using the chatbot, you need to store the pet care knowledge base embeddings:

```bash
# From backend/petcare directory
python store_index.py
```

This will process the knowledge base and store embeddings in Pinecone vector database.

#### 8. Technologies Used in Chatbot

- **Flask** - Python web framework
- **LangChain** - LLM application framework
- **Groq API** - Fast LLM inference
- **Pinecone** - Vector database for embeddings
- **HuggingFace** - Sentence transformers for embeddings
- **Sentence Transformers** - Text embedding models

---

### 🎉 You're All Set!

Your application is now running:
- **Frontend & Main API**: http://localhost:5000
- **AI Chatbot API**: http://localhost:5001

**Quick Test:**
1. Open http://localhost:5000 in your browser
2. Click "Register" and create an account
3. Login with your credentials
4. Browse available pets
5. Try making a donation
6. Chat with the AI assistant

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "contact": "1234567890",
  "dob": "1990-01-01",
  "country": "India"
}
```

#### Login User
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

---

### Pet Management Endpoints

#### Save Pet Details
```http
POST /savePet
Content-Type: multipart/form-data

{
  "pet-breed": "Golden Retriever",
  "last-seen-location": "Central Park",
  "distinctive-features": "Brown collar",
  "contact-info": "1234567890",
  "lostPetImage": [file]
}
```

#### Get All Pets
```http
GET /getPets
```

**Response:**
```json
[
  {
    "_id": "pet_id",
    "breed": "Golden Retriever",
    "lastSeenLocation": "Central Park",
    "distinctiveFeatures": "Brown collar",
    "contactInfo": "1234567890",
    "imagePath": "uploads/1234567890-image.jpg"
  }
]
```

---

### Adoption Endpoints

#### Submit Adoption Application
```http
POST /apply-adoption
Content-Type: application/json

{
  "name": "John Doe",
  "contact": "1234567890",
  "email": "john@example.com",
  "address": "123 Main St",
  "country": "India",
  "pet": "Golden Retriever",
  "agree": true
}
```

---

### Donation Endpoints

#### Submit Donation
```http
POST /donate
Content-Type: application/json

{
  "donorName": "Jane Smith",
  "donorContact": "9876543210",
  "donorEmail": "jane@example.com",
  "donorAddress": "456 Oak Ave",
  "donationType": "money",
  "donationAmount": 1000
}
```

#### Get All Donations
```http
GET /getDonations
```

---

### Vet Appointment Endpoints

#### Book Vet Appointment
```http
POST /api/vet-appointment
Content-Type: application/json

{
  "doctorName": "Dr. Smith",
  "doctorNumber": "1112223333",
  "location": "Downtown Vet Clinic",
  "fromTime": "10:00 AM",
  "toTime": "11:00 AM",
  "vetService": "Checkup",
  "description": "Regular health checkup"
}
```

---

### Visit Scheduling Endpoints

#### Schedule Visit
```http
POST /schedule-visit
Content-Type: application/json

{
  "name": "John Doe",
  "contact": "1234567890",
  "email": "john@example.com",
  "visitDate": "2026-02-01",
  "visitTime": "2:00 PM",
  "pet": "Golden Retriever"
}
```

---

### Payment Endpoints

#### Initiate Payment
```http
GET /pay?totalValue=1000
```

#### Payment Callback
```http
GET /redirect-url/:merchantTransactionId
```

---

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `JWT_SECRET` | Secret key for JWT token generation | `your_random_secret_key` |
| `PORT` | Server port number | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/pawfinders` |
| `PHONE_PE_HOST_URL` | PhonePe API URL | `https://api-preprod.phonepe.com/apis/pg-sandbox` |
| `MERCHANT_ID` | PhonePe merchant ID | `PGTESTPAYUAT86` |
| `SALT_KEY` | PhonePe salt key | `your_salt_key` |
| `SALT_INDEX` | PhonePe salt index | `1` |

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: MongoDB connection error
```
**Solution**: 
- Make sure MongoDB service is running: `mongod`
- Verify connection string in `.env` file
- Check if port 27017 is available
- Review MongoDB logs for errors

### Port Already in Use
```
Error: Port 5000 is already in use
```
**Solution**: 
Kill the process using port 5000:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```
Or change the port in your `.env` file.

### Module Not Found Error
```
Error: Cannot find module 'express'
```
**Solution**: 
Reinstall dependencies:
```bash
cd backend
rm -rf node_modules
npm install
```

### CORS Errors in Browser
**Solution**:
- Ensure CORS is enabled in server.js (already configured)
- Clear browser cache
- Check if frontend is served from same origin

### Payment Gateway Errors
**Solution**:
- Verify PhonePe test credentials in `.env`
- Check sandbox mode configuration
- Review payment logs in console
- Ensure merchant ID and salt key are correct

### Frontend Not Loading
**Solution**:
- Confirm backend server is running
- Check URL: `http://localhost:5000` (not 3000 or other ports)
- Open browser developer console for error messages
- Verify static files exist in `frontend` folder

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Commit Message Convention

Follow the Conventional Commits specification:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Coding Standards
- Follow **ESLint** rules for JavaScript
- Use **PEP 8** style guide for Python
- Write **meaningful commit messages**
- Add **comments** for complex logic
- Update **documentation** for new features
- Write **tests** for new functionality

### Reporting Issues

Found a bug or have a feature request?
1. Check existing issues to avoid duplicates
2. Use issue templates when available
3. Provide clear description and steps to reproduce
4. Include environment details (OS, Node version, etc.)

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 📬 Contact

For any queries or suggestions, feel free to reach out:

- 📧 **Email:** [abineshbalasubramaniyam@gmail.com](mailto:abineshbalasubramaniyam@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/abinesh-b-1b14a1290/](https://linkedin.com/in/abinesh-b-1b14a1290/)
- 🐙 **GitHub:** [github.com/Abinesh2418](https://github.com/Abinesh2418)
- 🧠 **LeetCode:** [leetcode.com/u/abinesh_06/](https://leetcode.com/u/abinesh_06/)

---
