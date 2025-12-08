# reCAPTCHA v3 Setup Guide

This project uses Google reCAPTCHA v3 for contact form spam protection. reCAPTCHA v3 is invisible and provides a better user experience than traditional CAPTCHAs.

## Setup Instructions

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "**+ Create**" to create a new site
3. Fill in the form:
   - **Label**: VirtuProse Contact Form (or any descriptive name)
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domain(s)
     - For local development: `localhost`
     - For production: `virtuprose.com`, `www.virtuprose.com`
   - Accept the reCAPTCHA Terms of Service
   - Click "**Submit**"

4. You'll receive two keys:
   - **Site Key** (public) - Add this to your `.env.local`
   - **Secret Key** (private) - Add this to your `.env.local`

### 2. Configure Environment Variables

Add these to your `.env.local` file (or your production environment):

```bash
# reCAPTCHA v3 Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important:**
- `NEXT_PUBLIC_` prefix is required for client-side access
- `RECAPTCHA_SECRET_KEY` should NEVER be exposed to the client
- Restart your development server after adding these variables

### 3. Verify Installation

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Open browser console - you should see no errors
4. Submit the form - it should work seamlessly

### 4. Testing

**Local Development:**
- reCAPTCHA will use "localhost" domain automatically
- Test scores may be lower in development
- Form will still submit if verification fails gracefully (for development)

**Production:**
- Make sure your production domain is added to reCAPTCHA settings
- Monitor the reCAPTCHA admin console for statistics
- Check spam/legitimate request ratios

## How It Works

1. **Client Side**: The reCAPTCHA script loads automatically when the contact page loads
2. **On Form Submit**: reCAPTCHA v3 executes invisibly in the background
3. **Token Generation**: A token is generated and sent with the form data
4. **Server Verification**: The backend verifies the token with Google's API
5. **Score-Based**: reCAPTCHA v3 returns a score (0.0 to 1.0) - we accept scores ≥ 0.5

## Security Features

- ✅ Invisible to users (no checkbox to click)
- ✅ Score-based verification (0.5 threshold)
- ✅ Server-side token verification
- ✅ Prevents spam and bot submissions
- ✅ Works seamlessly with the contact form

## Troubleshooting

### Form not submitting
- Check browser console for errors
- Verify `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- Ensure your domain is registered in reCAPTCHA admin console

### "Security verification failed" error
- Check that `RECAPTCHA_SECRET_KEY` is set correctly
- Verify the secret key matches the site key
- Check server logs for detailed error messages

### reCAPTCHA not loading
- Check browser console for script loading errors
- Verify the site key is correct
- Ensure your domain is in the allowed domains list

## Additional Resources

- [reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
- [reCAPTCHA Best Practices](https://developers.google.com/recaptcha/docs/v3#best_practices)

