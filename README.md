# 🛒 QuickCard - React Native E-commerce App

A comprehensive e-commerce mobile application built with React Native and Expo, featuring a robust Node.js backend API. This project was developed as part of a hackathon program.

## 📱 Project Overview

QuickCard is a full-stack e-commerce solution consisting of:
- **QuickCart**: A React Native mobile application built with Expo
- **Server**: A Node.js REST API backend with comprehensive e-commerce functionality

## 🏗️ Project Structure

```
QuickCard/
├── QuickCart/           # React Native Mobile App (Frontend)
│   ├── app/            # App navigation and routing
│   ├── components/     # Reusable UI components
│   ├── assets/         # Images, fonts, and static assets
│   ├── constants/      # App constants and color palette
│   └── scripts/        # Utility scripts
└── Server/             # Node.js Backend API
    ├── controller/     # API route controllers
    ├── model/          # Database schemas
    └── route/          # API route definitions
```

## ✨ Features

### Mobile App (QuickCart)
- 🏠 **Home Dashboard** - Product browsing and discovery
- 🛍️ **Shopping Cart** - Add, remove, and manage cart items
- 📱 **Product Details** - Detailed product information and reviews
- 🔖 **Bookmarks** - Save favorite products
- 👤 **User Authentication** - Login, signup, and profile management
- 🔐 **Security Features** - Password reset and email verification
- 📦 **Order Management** - View orders, returns, and refunds
- 💳 **Payment Integration** - Multiple payment methods
- 🎟️ **Vouchers & Deals** - Discount codes and special offers
- 📱 **Responsive Design** - Optimized for various screen sizes

### Backend API (Server)
- 🔐 **User Management** - Registration, authentication, and profiles
- 📦 **Product Management** - CRUD operations for products
- 🛒 **Cart Management** - Shopping cart functionality
- 📱 **Order Processing** - Order creation and management
- 💳 **Payment Processing** - Payment method handling
- 🎟️ **Voucher System** - Discount and coupon management
- ⭐ **Review System** - Product reviews and ratings
- 🔖 **Bookmark System** - User favorites
- 📧 **Email Integration** - Using SendGrid for notifications

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Android Studio / Xcode (for device testing)

### Backend Setup

1. **Navigate to Server directory:**
   ```bash
   cd QuickCard/Server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run server
   ```

   The server will start on `http://localhost:3000` (or your configured port)

### Frontend Setup

1. **Navigate to QuickCart directory:**
   ```bash
   cd QuickCard/QuickCart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Expo development server:**
   ```bash
   npm start
   ```

4. **Run on different platforms:**
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   
   # Web
   npm run web
   ```

## 📱 Running the App

### Using Expo Go
1. Install Expo Go on your mobile device
2. Scan the QR code from the terminal
3. The app will load on your device

### Using Emulator
1. Start Android emulator or iOS simulator
2. Run `npm run android` or `npm run ios`

## 🛠️ Tech Stack

### Frontend (QuickCart)
- **React Native** - Mobile app framework
- **Expo** - Development platform and tools
- **Expo Router** - File-based routing
- **React Navigation** - Navigation library
- **TypeScript** - Type safety
- **Jest** - Testing framework

### Backend (Server)
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database (implied from schemas)
- **Mongoose** - ODM for MongoDB
- **SendGrid** - Email service
- **Nodemon** - Development tool

## 📁 Key Components

### Mobile App Components
- **Dashboard** - Main app dashboard
- **HomePageScreen** - Landing page
- **ProductDetailsScreen** - Product information
- **HomeCartScreen** - Shopping cart
- **LoginScreen/SignupScreen** - Authentication
- **ProfileScreen** - User profile management
- **OrderScreen** - Order history and management

### API Endpoints
- **User Management** - `/api/users`
- **Product Management** - `/api/products`
- **Cart Operations** - `/api/cart`
- **Order Processing** - `/api/orders`
- **Payment Handling** - `/api/payments`
- **Voucher System** - `/api/vouchers`
- **Reviews** - `/api/reviews`

## 🔧 Development Scripts

### QuickCart (Frontend)
```bash
npm start          # Start Expo development server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web
npm test           # Run tests
npm run lint       # Lint code
```

### Server (Backend)
```bash
npm run server     # Start development server with nodemon
```

## 🎨 Design System

The app uses a custom color palette defined in `constants/CollorPallet.tsx` for consistent theming throughout the application.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sanjeev**
- GitHub: [@sanjeev200009](https://github.com/sanjeev200009)

## 🐛 Issues

If you encounter any issues, please report them on the [GitHub Issues](https://github.com/sanjeev200009/ReactNative-Hackathon-QuickCard-App/issues) page.

## 🙏 Acknowledgments

- Built for Hackathon program
- Thanks to the React Native and Expo communities
- Special thanks to all contributors

---

**Happy Shopping with QuickCard! 🛒✨**