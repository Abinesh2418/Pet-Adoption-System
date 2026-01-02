# Frontend

## 🎨 Frontend Structure

Static files for the PawFinders Pet Adoption System.

### 📁 Directory Structure

```
frontend/
├── index.html              # Landing page
├── about.html             # About the NGO
├── adoption.html          # Browse pets for adoption
├── donation.html          # Make donations
├── chat.html             # AI chatbot
├── login.html            # User login
├── register.html         # User registration
├── service.html          # Services offered
├── contact.html          # Contact form
├── payment-status.html   # Payment confirmation
├── imageres.html         # Image result display
├── retrieve.html         # Retrieve lost pets
├── team.html            # Team members
├── testimonial.html     # User testimonials
├── blog.html            # Blog posts
├── price.html           # Pricing information
├── product.html         # Products
│
├── css/
│   ├── bootstrap.min.css
│   └── style.css
│
├── js/
│   └── main.js
│
├── img/                  # Images and assets
│
└── lib/                  # Third-party libraries
    ├── owlcarousel/
    ├── waypoints/
    ├── easing/
    └── flaticon/
```

### 🚀 Usage

The frontend is served as static files by the Express backend server.

### 🎨 Technologies

- **HTML5** - Markup
- **CSS3** - Styling
- **Bootstrap 5** - UI Framework
- **JavaScript** - Interactivity
- **jQuery** - DOM manipulation
- **Owl Carousel** - Image sliders
- **Waypoints** - Scroll animations

### 🔗 Pages Overview

| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero section and features |
| `about.html` | Information about the NGO |
| `adoption.html` | List of pets available for adoption |
| `donation.html` | Donation form (money/pet/both) |
| `login.html` | User authentication |
| `register.html` | New user registration |
| `service.html` | Services: adoption, vet, grooming |
| `contact.html` | Contact form |
| `chat.html` | AI-powered chatbot for queries |
| `retrieve.html` | Search for lost pets |
| `payment-status.html` | Payment success/failure page |

### 🖼️ Key Features

- ✨ Responsive design (mobile-first)
- 🎭 Smooth animations and transitions
- 📱 Mobile-friendly navigation
- 🎨 Modern UI/UX
- ♿ Accessibility considerations

### 🔧 Customization

#### Updating Styles
Edit [css/style.css](css/style.css) for custom styling.

#### Modifying Scripts
Edit [js/main.js](js/main.js) for JavaScript functionality.

#### Changing Colors
Update Bootstrap variables or CSS custom properties:
```css
:root {
    --primary-color: #FEA116;
    --secondary-color: #0F172B;
    --light: #F1F8FF;
    --dark: #0F172B;
}
```

### 📝 Notes

- All frontend files are served from the `frontend/` directory
- The backend server (Express) serves these static files
- API calls are made to the backend server endpoints
- Form submissions use AJAX for better UX
