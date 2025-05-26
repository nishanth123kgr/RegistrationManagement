#!/bin/bash

# Deployment script for Vercel
echo "🚀 Preparing for Vercel deployment..."

# Check if required files exist
echo "📋 Checking required files..."

if [ ! -f "package.json" ]; then
    echo "❌ package.json not found!"
    exit 1
fi

if [ ! -f "server.js" ]; then
    echo "❌ server.js not found!"
    exit 1
fi

if [ ! -f "vercel.json" ]; then
    echo "❌ vercel.json not found!"
    exit 1
fi

echo "✅ All required files found"

# Check for environment variables file
if [ ! -f ".env.example" ]; then
    echo "⚠️  .env.example not found - creating one..."
    echo "# Add your environment variables here" > .env.example
    echo "SUPABASE_URL=your_supabase_url" >> .env.example
    echo "SUPABASE_PUBLIC_ANON_KEY=your_supabase_key" >> .env.example
    echo "NODE_ENV=production" >> .env.example
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI not found. Install it with: npm install -g vercel"
    echo "💡 You can still deploy using the Vercel dashboard"
else
    echo "✅ Vercel CLI found"
    
    # Ask if user wants to deploy now
    read -p "🚀 Do you want to deploy now? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🚀 Deploying to Vercel..."
        vercel --prod
    fi
fi

echo ""
echo "✅ Deployment preparation complete!"
echo ""
echo "📝 Next steps:"
echo "1. Set up your environment variables in Vercel dashboard:"
echo "   - SUPABASE_URL"
echo "   - SUPABASE_PUBLIC_ANON_KEY"
echo "   - NODE_ENV=production"
echo ""
echo "2. Update CORS settings in server.js with your actual domain"
echo ""
echo "3. If using Vercel dashboard:"
echo "   - Go to https://vercel.com/dashboard"
echo "   - Import your Git repository"
echo "   - Add environment variables"
echo "   - Deploy!"
echo ""
echo "4. If using Vercel CLI:"
echo "   - Run: vercel"
echo "   - Follow the prompts"
echo "   - Set environment variables: vercel env add VARIABLE_NAME"
echo ""
