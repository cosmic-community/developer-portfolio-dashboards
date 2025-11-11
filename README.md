# 🎯 Developer Portfolio Dashboard

![App Preview](https://imgix.cosmicjs.com/46f70cd0-beb1-11f0-9757-a1b2350abfc3-photo-1557821552-17105176677c-1762832892941.jpg?w=1200&h=300&fit=crop,auto=format,compress)

A comprehensive React-based dashboard application for managing your developer portfolio content. View, edit, and organize your projects, skills, work experience, and testimonials through an intuitive interface powered by Cosmic CMS.

## ✨ Features

- **Comprehensive Content Management**: Full CRUD operations for all portfolio content types
- **Advanced Filtering & Search**: Category-based filtering, status toggles, and content search
- **Real-time Data Updates**: Instant content synchronization with optimistic UI updates
- **Rich Media Management**: Image upload and optimization with imgix integration
- **Analytics Dashboard**: Overview statistics and content metrics visualization
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **TypeScript Support**: Full type safety throughout the application
- **Modern UI Components**: Clean, professional interface built with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6912b167fb7423bbdde50e88&clone_repository=6912b304fb7423bbdde50eb2)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a web developer portfolio with projects, skills, work experience, and testimonials"

### Code Generation Prompt

> "Create a React dashboard that displays and manages my existing content"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic CMS with SDK v1.5.6
- **Package Manager**: Bun
- **Image Optimization**: imgix

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account with bucket access
- Environment variables for Cosmic CMS

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Projects

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Creating New Content

```typescript
await cosmic.objects.insertOne({
  type: 'skills',
  title: 'React',
  metadata: {
    skill_name: 'React',
    category: 'frontend',
    proficiency: 'expert'
  }
})
```

### Updating Content

```typescript
await cosmic.objects.updateOne(projectId, {
  metadata: {
    featured: true
  }
})
```

### Deleting Content

```typescript
await cosmic.objects.deleteOne(projectId)
```

## 🔗 Cosmic CMS Integration

This dashboard is fully integrated with your Cosmic CMS bucket and leverages:

- **Projects**: Showcase development work with descriptions, technologies, and screenshots
- **Skills**: Categorized technical skills with proficiency levels and icons
- **Work Experience**: Professional history with company details and achievements
- **Testimonials**: Client feedback with ratings and featured status

All content is managed through the Cosmic CMS dashboard and displayed in real-time in your portfolio dashboard.

## 🚀 Deployment Options

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in project settings
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Add environment variables in site settings
4. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

## 📖 Documentation

For more information about Cosmic CMS:
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Cosmic SDK Reference](https://www.cosmicjs.com/docs/sdk)
- [Next.js Documentation](https://nextjs.org/docs)

<!-- README_END -->