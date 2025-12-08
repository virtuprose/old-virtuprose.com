# Calendar Integration Guide

This guide explains how to integrate Cal.com or Calendly into your contact page.

## Option 1: Cal.com Integration (Recommended)

### Step 1: Get Your Cal.com Account
1. Sign up at [cal.com](https://cal.com)
2. Create an account and set up your calendar
3. Create an event type (e.g., "30-minute strategy call")

### Step 2: Get Your Embed URL
1. Go to your Cal.com dashboard
2. Navigate to **Event Types** → Select your event (e.g., "30min")
3. Click on **Embed** tab
4. Copy the embed URL (it will look like: `https://cal.com/your-username/30min`)

### Step 3: Update the Component
Replace `your-username` in `src/components/contact/book-call-section.tsx`:

```tsx
<iframe
  src="https://cal.com/your-username/30min"
  style={{
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "1rem",
  }}
  title="Book a strategy call"
/>
```

### Step 4: Customize (Optional)
You can add query parameters to customize the embed:
- `?theme=dark` - Dark theme
- `?hideEventTypeDetails=1` - Hide event details
- `?layout=month_view` - Month view layout

Example:
```tsx
src="https://cal.com/your-username/30min?theme=dark"
```

---

## Option 2: Calendly Integration

### Step 1: Get Your Calendly Account
1. Sign up at [calendly.com](https://calendly.com)
2. Create an account and set up your calendar
3. Create an event type (e.g., "30-minute strategy call")

### Step 2: Get Your Embed URL
1. Go to your Calendly dashboard
2. Navigate to **Event Types** → Select your event
3. Click on **Share** → **Embed**
4. Copy the embed URL (it will look like: `https://calendly.com/your-username/30min`)

### Step 3: Update the Component
1. Comment out the Cal.com iframe
2. Uncomment the Calendly iframe
3. Replace `your-username` with your Calendly username:

```tsx
<iframe
  src="https://calendly.com/your-username/30min?embed_domain=yourdomain.com&embed_type=Inline"
  style={{
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "1rem",
  }}
  title="Book a strategy call"
/>
```

### Step 4: Update embed_domain
Replace `yourdomain.com` with your actual domain (e.g., `virtuprose.com`)

---

## Option 3: Custom Scheduler

If you have a custom booking system or API:

1. Create a custom component in `src/components/contact/custom-scheduler.tsx`
2. Replace the iframe with your custom component
3. Import and use it in `book-call-section.tsx`

Example:
```tsx
import { CustomScheduler } from "./custom-scheduler";

// In the component:
<CustomScheduler />
```

---

## Environment Variables (Optional)

If you want to make the calendar URL configurable, add to `.env.local`:

```bash
NEXT_PUBLIC_CALENDAR_URL=https://cal.com/your-username/30min
```

Then use it in the component:
```tsx
<iframe
  src={process.env.NEXT_PUBLIC_CALENDAR_URL || "https://cal.com/your-username/30min"}
  // ... rest of props
/>
```

---

## Troubleshooting

### Iframe not showing:
- Check that the URL is correct
- Ensure your calendar service allows embedding
- Check browser console for CORS errors
- Verify the iframe height is sufficient (520px)

### Styling issues:
- The iframe inherits the rounded corners from the parent container
- Adjust the `borderRadius` in the style prop if needed
- Some calendar services have their own theme settings

### Mobile responsiveness:
- The iframe is responsive by default (100% width/height)
- Test on mobile devices to ensure proper display
- Some calendar services have mobile-optimized views

---

## Quick Start Checklist

- [ ] Sign up for Cal.com or Calendly
- [ ] Create a 30-minute event type
- [ ] Get your embed URL
- [ ] Update `book-call-section.tsx` with your URL
- [ ] Test the embed on your site
- [ ] Customize theme/styling if needed

---

## Support Links

- [Cal.com Documentation](https://cal.com/docs)
- [Calendly Embed Guide](https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview)
- [Cal.com Embed Options](https://cal.com/docs/embed)

