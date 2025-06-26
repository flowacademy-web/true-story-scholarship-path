# Overview

This is a full-stack web application built for Flow Prep, a US college transfer consulting service specializing in Community College (CC) to university transfers. The application serves as a marketing website showcasing the consulting services, success stories, and educational content for Korean students looking to transfer to US universities.

# System Architecture

The application follows a modern full-stack architecture with the following components:

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: React Router for client-side navigation
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for optimized bundling

## Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Hot Reload**: Vite middleware integration for development
- **Error Handling**: Runtime error overlay for development

# Key Components

## Frontend Components
- **Header**: Navigation with brand logo and consultation CTA
- **Hero**: Video background with value proposition
- **TransferCarousel**: Showcase of successful CC to university transfers
- **PainPoints**: Problem identification section
- **Solutions**: Service offerings breakdown
- **Advantages**: Competitive advantages
- **StudentStories**: Success testimonials
- **FAQ**: Common questions and answers
- **Testimonials**: Client feedback
- **CallToAction**: Final conversion section
- **Chatbot**: Interactive consultation widget

## Pages Structure
- **Index**: Main landing page with all components
- **Blog**: Educational content listing
- **BlogPost**: Individual blog article pages
- **SuccessStories**: Student success case studies
- **SuccessStoryDetail**: Detailed individual success stories
- **NotFound**: 404 error handling

## UI Component Library
- Complete shadcn/ui implementation with Radix UI primitives
- Tailwind CSS design system with custom color variables
- Responsive design with mobile-first approach

# Data Flow

## Database Schema
- **Users table**: Basic user authentication structure
- **Drizzle ORM**: Type-safe database operations
- **Schema validation**: Zod integration for runtime type checking

## Storage Interface
- **IStorage interface**: Abstracted data access layer
- **MemStorage implementation**: In-memory storage for development
- **Database-ready**: Prepared for PostgreSQL integration

## Client-Server Communication
- **RESTful API**: Express routes under `/api` prefix
- **Type sharing**: Shared schema definitions between client and server
- **Request logging**: Middleware for API request monitoring

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **react-router-dom**: Client-side routing

## UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class names

## Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling
- **vite**: Development server and build tool
- **@replit/***: Replit-specific development tools

# Deployment Strategy

## Development
- **Command**: `npm run dev`
- **Port**: 5000 (configured in .replit)
- **Hot Reload**: Vite middleware integration
- **Database**: PostgreSQL connection via DATABASE_URL

## Production Build
- **Build Command**: `npm run build`
- **Build Process**: 
  1. Vite builds client assets to `dist/public`
  2. esbuild bundles server code to `dist/index.js`
- **Start Command**: `npm run start`
- **Deployment**: Replit autoscale deployment target

## Static Assets
- **Client Build**: Compiled to `dist/public`
- **Server Assets**: Served from `server/public` in development
- **Vite Integration**: Middleware serves assets in development

## Database Management
- **Migrations**: Drizzle Kit for schema migrations
- **Push Command**: `npm run db:push`
- **Configuration**: PostgreSQL dialect with connection pooling

# Changelog

Changelog:
- June 26, 2025: Initial setup
- June 26, 2025: Fixed mobile video white space issues with CSS transforms and viewport optimizations
- June 26, 2025: Added complete Korean content for all blog posts to fix "not found" errors
- June 26, 2025: Applied gradient styling to "플로우프렙" and bold formatting to key phrases in Hero section

# User Preferences

Preferred communication style: Simple, everyday language.