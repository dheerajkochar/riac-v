# IdeaConnect - Student-Professor Mentorship Matching Platform

A Next.js application that connects students with professors based on research interests and fields of study.

## Features

- **Submit Ideas**: Students can submit their startup/research ideas and select relevant fields
- **Smart Matching**: Automatically match students with professors in their fields of interest
- **Browse Professors**: View all 79 professors across 4 departments (CS, ECE, Chemical, Civil Engineering)
- **Search & Filter**: Find professors by name, department, expertise, and research fields
- **Contact Integration**: Direct email and phone contact links for each professor
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Project Structure

```
app/
├── page.tsx              # Main page combining all components
├── layout.tsx            # Root layout with metadata
└── globals.css           # Tailwind CSS configuration

components/
├── Navbar.tsx            # Navigation bar with smooth scrolling
├── Hero.tsx              # Hero section with stats
├── HowItWorks.tsx        # 3-step process explanation
├── SubmitIdea.tsx        # Idea submission form with matching
├── ProfessorCard.tsx     # Reusable professor card component
└── ProfessorDirectory.tsx # Browse and filter all professors

lib/
├── professors.ts         # Professor database (79 professors from 4 departments)
└── fields.ts             # Research fields and categories

```

## Technologies

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Fonts**: Syne (headings), DM Sans (body)
- **State Management**: React Hooks (useState, useMemo)
- **TypeScript**: Full type safety

## Research Fields

**Computer Science** (3 fields):
- AI & Machine Learning
- Systems & Computing
- Security & Cryptography

**Electronics & Communication** (4 fields):
- 5G & Wireless Communication
- VLSI & Embedded Systems
- Optical & Photonics
- Signal & Image Processing

**Chemical Engineering** (4 fields):
- Separation & Membrane Processes
- Green Chemistry & Catalysis
- Energy & Sustainability
- Nanotechnology & Materials

**Civil Engineering** (5 fields):
- Hydraulics & Water Resources
- Structural & Earthquake Engineering
- Geotechnical Engineering
- Planning & Transportation
- Environmental Engineering

## Getting Started

### Prerequisites
- Node.js 16+ and pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The application will be available at `http://localhost:3000`

## Color Scheme

- **Primary Blue**: #2d6be4
- **Dark Navy**: #0d0d12
- **Light Cream**: #f5f3ee
- **White**: #ffffff
- **Text Dark**: #1a1a1a
- **Text Light**: #666666
- **Border**: #e0e0e0

## Features Detail

### 1. Idea Submission
- Students enter their name and idea description
- Select multiple research fields
- Auto-match with relevant professors
- Display matched professors with their expertise

### 2. Professor Directory
- Browse all 79 professors
- Search by name, department, or expertise
- Filter by research field
- Quick contact options (email/phone)

### 3. Smart Matching
- Professors are tagged with multiple research fields
- Matching algorithm finds professors by selected fields
- Shows professor expertise, bio, and achievements
- Real-time filtering and search results

## Responsive Design

- **Mobile**: Single column layout, touch-friendly buttons
- **Tablet**: 2-column grid for professor cards
- **Desktop**: 3-column grid with enhanced spacing

## Future Enhancements

- User authentication and profiles
- Save favorite professors
- Rating and review system
- Meeting scheduling integration
- Email notifications for new matches
- Mentor-student message system
- Database integration for persistence
