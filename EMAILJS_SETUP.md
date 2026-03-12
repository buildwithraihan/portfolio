# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account

## Step 2: Create Email Service
1. Go to Email Services
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **SERVICE_ID**

## Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use these template variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content
4. Copy your **TEMPLATE_ID**

## Step 4: Get Public Key
1. Go to Account > General
2. Copy your **PUBLIC_KEY**

## Step 5: Add Environment Variables
Create a `.env.local` file in your project root:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## For GitHub Pages / Static Hosting
Since environment variables don't work on static hosting, you can:
1. Replace the placeholders directly in `ContactForm.tsx`
2. Or use a build-time replacement script

Your contact form will now work on any static hosting platform!
