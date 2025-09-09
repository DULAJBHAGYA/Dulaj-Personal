# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- 📱 **Responsive Design**: Fully responsive across all devices
- 🎨 **Beautiful UI**: Modern design with smooth animations and transitions
- ⚡ **Performance Optimized**: Fast loading with Next.js optimizations
- 🌙 **Dark Theme**: Beautiful dark theme with gradient accents
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **SEO Optimized**: Proper meta tags and SEO optimization

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and experience highlights
- **Skills**: Technical skills with animated progress bars
- **Projects**: Showcase of featured and other projects
- **Contact**: Contact information and working contact form

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Update the following files with your personal information:

- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/About.tsx` - Update personal details and experience
- `src/components/Contact.tsx` - Update contact information
- `src/app/layout.tsx` - Update metadata and SEO information

### Projects
Add your projects in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Next.js', 'TypeScript'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/your-username/project',
    featured: true // Set to true for featured projects
  },
  // Add more projects...
];
```

### Skills
Update your skills in `src/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### Styling
The project uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual component files

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **GitHub Pages**: Use `next export` and deploy the `out` folder

## Performance

This portfolio is optimized for performance with:
- Next.js Image optimization
- Font optimization
- CSS purging with Tailwind
- Lazy loading for images
- Smooth scrolling and animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Dulaj Upananda**