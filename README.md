# Registration Management System

A Node.js/Express application for managing event registrations with team formation capabilities.

## Features

- Multi-step registration form
- Team-based event registration
- Email notifications
- QR code generation for confirmations
- Supabase database integration
- Real-time form validation

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **Frontend**: Vanilla JavaScript, EJS templating
- **Styling**: Custom CSS
- **Email**: Nodemailer
- **Deployment**: Vercel

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in your environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

### Prerequisites

1. A [Vercel account](https://vercel.com)
2. A [Supabase account](https://supabase.com) with your database set up
3. [Vercel CLI](https://vercel.com/cli) installed (optional)

### Method 1: Using Vercel Dashboard

1. **Prepare your project**:
   - Ensure your project is pushed to a Git repository (GitHub, GitLab, or Bitbucket)

2. **Deploy to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Configure the project settings:
     - Framework Preset: Other
     - Root Directory: ./
     - Build Command: Leave empty or use `npm run build`
     - Output Directory: Leave empty
     - Install Command: `npm install`

3. **Set Environment Variables**:
   In the Vercel dashboard, go to your project settings and add these environment variables:
   ```
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_PUBLIC_ANON_KEY=your_supabase_anon_key
   NODE_ENV=production
   ```

4. **Deploy**:
   - Click "Deploy"
   - Your application will be available at `https://your-project-name.vercel.app`

### Method 2: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**:
   ```bash
   vercel
   ```

4. **Set environment variables**:
   ```bash
   vercel env add SUPABASE_URL
   vercel env add SUPABASE_PUBLIC_ANON_KEY
   vercel env add NODE_ENV
   ```

5. **Redeploy with environment variables**:
   ```bash
   vercel --prod
   ```

### Method 3: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to Vercel Dashboard
   - Click "New Project"
   - Select your GitHub repository
   - Configure environment variables in the deployment settings

3. **Automatic Deployments**:
   - Every push to main branch will trigger a new deployment
   - Pull requests will create preview deployments

## Environment Variables

The following environment variables are required:

| Variable | Description | Example |
|----------|-------------|---------|
| `SUPABASE_URL` | Your Supabase project URL | `https://your-project.supabase.co` |
| `SUPABASE_PUBLIC_ANON_KEY` | Your Supabase anon/public key | `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...` |
| `NODE_ENV` | Node environment | `production` |
| `PORT` | Server port (auto-set by Vercel) | `3000` |

## Post-Deployment Configuration

### 1. Update CORS Settings

After deployment, update the CORS configuration in `server.js`:

```javascript
corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? 
        ['https://your-actual-domain.vercel.app'] : // Replace with your actual domain
        ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}
```

### 2. Update Email Configuration

Make sure your email service (Gmail) is properly configured for sending emails from your domain.

### 3. Database Setup

Ensure your Supabase database has the required tables and functions. The application expects:
- `users` table
- `team` table
- `team_members` table
- `participation` table
- `registrations` table
- `transactions` table
- `create_or_get_user` function

## Troubleshooting

### Common Issues

1. **Environment Variables Not Working**:
   - Check that all environment variables are set in Vercel dashboard
   - Redeploy after adding environment variables

2. **CORS Errors**:
   - Update the CORS origin to match your Vercel domain
   - Redeploy after updating

3. **Database Connection Issues**:
   - Verify your Supabase URL and API key
   - Check that your Supabase project is active

4. **Build Failures**:
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Remove any local-only dependencies

## File Structure

```
├── controllers/
│   ├── paymentController.js
│   ├── registrationFormController.js
│   └── userController.js
├── models/
├── routes/
│   ├── paymentRoutes.js
│   ├── registrationFormRouter.js
│   └── userRoutes.js
├── static/
│   ├── css/
│   ├── img/
│   ├── js/
│   └── qrcodes/
├── utils/
│   ├── logger.js
│   └── mailer/
├── views/
│   └── registrationForm.ejs
├── server.js
├── package.json
├── vercel.json
└── .env.example
```

## Support

For deployment issues, check:
1. [Vercel Documentation](https://vercel.com/docs)
2. [Supabase Documentation](https://supabase.com/docs)
3. Project logs in Vercel dashboard
