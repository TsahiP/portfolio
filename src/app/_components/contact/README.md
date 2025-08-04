# Contact Form Component

This directory contains a complete contact form implementation with Zod validation and Airtable integration for the portfolio website.

## Components

### `contact.tsx`
The main contact section component that includes:
- Contact information display
- Social media links
- Contact form wrapper
- Responsive layout with dark mode support

### `contact-form.tsx`
The form component with:
- Zod schema validation
- React Hook Form integration
- Real-time error display
- Loading states
- Success/error feedback
- Dark mode styling

## Features

- **Form Validation**: Uses Zod schema for client and server-side validation
- **Type Safety**: Full TypeScript support with inferred types
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Responsive Design**: Works on all screen sizes
- **Dark Mode**: Supports both light and dark themes
- **Error Handling**: Comprehensive error states and user feedback
- **Loading States**: Visual feedback during form submission
- **Airtable Integration**: Stores submissions in Airtable for easy management

## Validation Rules

- **Name**: Minimum 2 characters
- **Email**: Valid email format
- **Subject**: Minimum 5 characters
- **Message**: Minimum 10 characters

## API Integration

### Contact Form Submission (`/api/contact`)
- Validates the request body using Zod schema
- Stores submission in Airtable
- Returns appropriate success/error responses
- Includes example code for email integration

### Contact Submissions Retrieval (`/api/contact/submissions`)
- Retrieves all contact submissions from Airtable
- Useful for admin dashboards
- Can be protected with authentication

## Airtable Integration

The contact form automatically stores submissions in Airtable. See `AIRTABLE_SETUP.md` for detailed setup instructions.

### Required Airtable Fields:
- **Name** (Single line text)
- **Email** (Email)
- **Subject** (Single line text)
- **Message** (Long text)
- **Submission Date** (Date)
- **Status** (Single select)

### Environment Variables:
```env
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE_ID=your_airtable_base_id_here
AIRTABLE_TABLE_NAME=Contact Submissions
```

## Usage

```tsx
import { Contact } from "./_components/contact/contact";

// In your page component
<Contact />

// Or with custom styling
<Contact className="my-custom-class" />
```

## Customization

### Styling
The components use Tailwind CSS classes and support custom className props for styling overrides.

### API Endpoint
Update the fetch URL in `contact-form.tsx` to point to your actual API endpoint.

### Email Integration
Uncomment and configure the email sending code in `/api/contact/route.ts` to integrate with services like:
- SendGrid
- Resend
- Nodemailer
- AWS SES

### Airtable Customization
- Modify the field names in `src/lib/airtable.ts` to match your Airtable schema
- Add additional fields as needed
- Create custom views and automations in Airtable

## Dependencies

- `zod`: Schema validation
- `react-hook-form`: Form state management
- `@hookform/resolvers`: Zod resolver for react-hook-form
- `airtable`: Airtable API integration
- `@/lib/utils`: Utility functions for className merging

## Setup Instructions

1. **Install dependencies**: `npm install airtable`
2. **Set up Airtable**: Follow the guide in `AIRTABLE_SETUP.md`
3. **Configure environment variables**: Add your Airtable credentials to `.env.local`
4. **Test the integration**: Submit a test form and check your Airtable base 