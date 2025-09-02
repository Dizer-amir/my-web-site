# Overview

Dawa is an Arabic-language intelligent drug analyzer web application that provides reliable pharmaceutical information. The application allows users to search for medications, check drug interactions, and analyze medications through image recognition using AI technology. Built with a modern full-stack architecture, it features a React-based frontend with Arabic RTL support and an Express.js backend with PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom CSS variables for theming, specifically configured for Arabic RTL layout
- **UI Components**: Radix UI primitives with shadcn/ui component library providing accessible, customizable components
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Typography**: Google Fonts (Cairo and Noto Sans Arabic) for proper Arabic text rendering

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database Integration**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Session Management**: PostgreSQL-backed session storage using connect-pg-simple
- **Development**: Hot module replacement and error overlay integration with Vite

## Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon serverless database provider
- **ORM**: Drizzle ORM for type-safe database queries and schema management
- **Schema Design**: Comprehensive drug information model including:
  - Bilingual drug names (Arabic/English)
  - Active ingredients with localized descriptions
  - Dosage information and medical indications
  - Side effects categorized by severity levels
  - Drug interaction tracking with severity ratings
  - Search history and analytics

## API Architecture
- **RESTful Endpoints**: 
  - `/api/drugs/search` - Text-based drug search with query logging
  - `/api/drugs/:id` - Individual drug information retrieval
  - `/api/drugs/interactions` - Drug interaction checking between medications
  - `/api/drugs/analyze-image` - AI-powered image recognition (placeholder)
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Comprehensive logging for API requests with performance metrics

## Design Patterns
- **Component Composition**: Reusable UI components with consistent prop interfaces
- **Custom Hooks**: Extracted business logic into reusable hooks (useToast, useIsMobile)
- **Repository Pattern**: Storage abstraction layer supporting both in-memory and PostgreSQL backends
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle Kit**: Database migration and schema management tools

## UI and Styling
- **Radix UI**: Headless UI primitives for accessible component foundations
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: SVG icon library with consistent design system
- **Google Fonts**: Web font delivery for Arabic typography

## Development Tools
- **Vite**: Frontend build tool with HMR and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundling for production builds

## State Management
- **TanStack React Query**: Server state synchronization and caching layer
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema parsing

## Routing and Navigation
- **Wouter**: Minimalist client-side routing library
- **React DOM**: Virtual DOM rendering and event handling

## Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx**: Conditional CSS class composition
- **class-variance-authority**: CSS class variance management
- **nanoid**: URL-safe unique identifier generation