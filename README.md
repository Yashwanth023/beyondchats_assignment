# BeyondChats - AI Chatbot Setup Portal

BeyondChats is a modern web application that allows businesses to easily set up and integrate AI-powered chatbots into their websites. Built with Next.js 14, TypeScript, and Tailwind CSS.

![BeyondChats Preview](public/preview.png)

## 🌟 Features

- **User Authentication**
  - Email and Password Registration
  - Google OAuth Integration
  - Email Verification System

- **Organization Setup**
  - Company Profile Management
  - Website URL Integration
  - Automatic Meta Description Fetching
  - Website Content Scraping Simulation

- **Chatbot Integration**
  - Live Chatbot Preview
  - Easy Integration Code
  - Developer Instructions
  - Integration Verification

- **Modern UI/UX**
  - Responsive Design
  - Dark Mode Support
  - Smooth Animations
  - Interactive Components

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Shadcn/ui](https://ui.shadcn.com/) - UI Components
- [React Hot Toast](https://react-hot-toast.com/) - Notifications
- [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) - Celebrations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/beyondchats.git
cd beyondchats


2. Install dependencies:


```shellscript
npm install
```

3. Create a `.env.local` file in the root directory:


```plaintext
# Authentication (NextAuth.js)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Start the development server:


```shellscript
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Deployment

### Prerequisites

1. [Vercel Account](https://vercel.com/signup)
2. [Google Cloud Console Project](https://console.cloud.google.com/)
3. Domain Name (optional)


### Deployment Steps

1. Push your code to GitHub:


```shellscript
git add .
git commit -m "Ready for deployment"
git push
```

2. First Deployment:


- Go to [Vercel](https://vercel.com)
- Import your GitHub repository
- Add these environment variables:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXTAUTH_SECRET`



- Deploy


3. Configure Google OAuth:


- Go to [Google Cloud Console](https://console.cloud.google.com)
- Add authorized redirect URIs:

- `https://your-app.vercel.app/api/auth/callback/google`



- Add authorized JavaScript origins:

- `https://your-app.vercel.app`


4. Final Deployment:


- Add `NEXTAUTH_URL` environment variable in Vercel:

- Value: `https://your-app.vercel.app`



- Redeploy the application



### Components

All UI components are built with Shadcn/ui and can be customized in:

```plaintext
components/ui/
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



