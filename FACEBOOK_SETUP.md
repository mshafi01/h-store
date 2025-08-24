# Facebook Optimization Setup for Hashfi

## What's Already Configured ✅

Your layout.tsx now includes comprehensive Facebook optimization:

### 1. **Open Graph Tags** (Perfect for Facebook sharing)

- Title, description, and images optimized for social media
- Multiple image sizes (1200x630 and 600x315)
- Proper locale and type settings

### 2. **Facebook-Specific Meta Tags**

- `fb:app_id` - For Facebook App integration
- `fb:pages` - For Facebook Page verification

### 3. **Facebook Pixel Component**

- Created `app/components/FacebookPixel.tsx`
- Ready to use for tracking conversions and user behavior

## Setup Steps 🔧

### Step 1: Get Your Facebook App ID

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app or use existing one
3. Copy your App ID
4. Replace `"your-facebook-app-id"` in `layout.tsx`

### Step 2: Get Your Facebook Page ID

1. Go to your Facebook Page
2. In Page Info, find your Page ID
3. Replace `"your-facebook-page-id"` in `layout.tsx`

### Step 3: Get Your Facebook Pixel ID

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2/)
2. Create a new Pixel or use existing one
3. Copy your Pixel ID

### Step 4: Add Facebook Pixel to Your Layout

In your `app/layout.tsx`, add the Facebook Pixel component:

```tsx
import FacebookPixel from "./components/FacebookPixel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <FacebookPixel pixelId="YOUR_ACTUAL_PIXEL_ID" />
        {children}
      </body>
    </html>
  );
}
```

## Facebook Features You'll Get 🚀

### **Social Media Sharing**

- Beautiful previews when links are shared on Facebook
- Optimized images and descriptions
- Professional brand appearance

### **Analytics & Tracking**

- Track page views, conversions, and user behavior
- Retargeting capabilities
- Audience insights

### **Business Tools**

- Facebook Shop integration ready
- Instagram Shopping compatibility
- Facebook Ads optimization

## Testing Your Setup 🧪

### 1. **Facebook Sharing Debugger**

- Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Enter your URL to see how it appears on Facebook

### 2. **Open Graph Testing**

- Test your Open Graph tags
- Verify images and descriptions display correctly

### 3. **Pixel Testing**

- Use Facebook Pixel Helper browser extension
- Verify tracking is working properly

## Additional Facebook Optimizations 💡

### **For E-commerce (When Ready)**

- Add product-specific Open Graph tags
- Implement Facebook Catalog
- Set up Dynamic Ads

### **For Content Marketing**

- Add article-specific Open Graph tags
- Implement Facebook Instant Articles
- Set up Facebook Groups integration

## Current Configuration Status 📊

- ✅ Open Graph tags configured
- ✅ Facebook meta tags ready
- ✅ Facebook Pixel component created
- ⏳ Facebook App ID needed
- ⏳ Facebook Page ID needed
- ⏳ Facebook Pixel ID needed

## Need Help? 🆘

- [Facebook Business Help Center](https://www.facebook.com/business/help)
- [Facebook Developers Documentation](https://developers.facebook.com/docs/)
- [Facebook Pixel Implementation Guide](https://developers.facebook.com/docs/facebook-pixel/implementation/)

Your Hashfi brand is now fully optimized for Facebook! 🎉
