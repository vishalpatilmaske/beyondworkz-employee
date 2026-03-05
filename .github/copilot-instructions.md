# Beyond Workz Employee Portal - AI Coding Agent Instructions

## Project Overview

A React job search and employee dashboard portal built with Vite, React Router, and Tailwind CSS. The application features public job listings, employer profiles, authentication with OTP, and authenticated user dashboards.

## Architecture & Key Patterns

### Component Organization (`src/components/`)

- **common/**: Reusable layout components (`Navbar`, `Footer`)
- **jobsearch/**: Job search page components (`JobCard`, `FiltersSidebar`, `SearchBar`, `ResultsHeader`, `Pagination`, `EmployerCard`)
- **landingpage/**: Hero, feature sections, testimonials, CTA sections
- **ui/**: Generic UI components (to be populated)

**Pattern**: Functional components with props-based composition. Components receive data as props (e.g., `JobCard` receives `{ job }`) rather than fetching directly.

### Routing Structure (`src/routes/AppRoutes.jsx`)

- `/` → Landing page
- `/jobs` → Job search with filters and results
- `/login`, `/register` → Auth pages
- `/dashboard` → Protected user dashboard (protected route to be implemented)
- Unprotected routes open to public; dashboard requires authentication

### State Management

- **Planned**: Redux store at `src/store/store.js` (currently empty) - will handle auth state, filters, job data
- **Current**: Local state via `useState` in individual pages/components

### Data Models (`src/data/`)

- **jobs.js**: Array of job objects with structure: `{ id, title, company, location, tags, description, posted, logo, salary }`
- **filter.js**: Filter options: `experience`, `workMode`, `jobType` (arrays of strings)

### Authentication Flow (`src/pages/auth/`)

- **Login.jsx**: Two-step OTP-based auth (email → OTP input → dashboard)
- Calls `authService.sendOTP()`, `authService.verifyOTP()`, `authService.loginUser()`
- **authService.js** (empty): Define OTP sending, verification, and login logic here

### Services Layer (`src/services/`)

- **authService.js**: Auth API calls (OTP, login, register) - EMPTY, needs implementation
- **api.js**: Base API client wrapper - EMPTY, needs implementation
- **jobService.js**: Job-related API calls - EMPTY, needs implementation

## Styling & CSS

- **Framework**: Tailwind CSS with `@tailwindcss/vite` plugin
- **Approach**: Utility-first Tailwind classes only (no custom CSS files)
- **Common patterns**: `grid`, `flex`, `gap-*`, `rounded-lg`, `border border-slate-*`, `hover:shadow-*`, `line-clamp-2`
- **Color palette**: `slate-*`, `blue-50/700`, `green-50/700` for secondary actions
- **Configuration**: `src/index.css` imports Tailwind; global styles in `src/styles/globals.css`

## Development Commands

```bash
npm run dev      # Start Vite dev server (HMR enabled)
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## ESLint Configuration

- Flat config in `eslint.config.js`
- Rules: React Hooks recommended, React Refresh, ESLint core recommended
- Allows uppercase variable names (component names): `varsIgnorePattern: '^[A-Z_]'`

## Critical Patterns to Follow

1. **Component Props**: Pass data via props; avoid direct API calls in child components
2. **Empty Service Files**: Implement `authService`, `api`, and `jobService` to handle all backend communication
3. **Form Handling**: Use `useState` for form state (e.g., Login component's multi-step OTP)
4. **Styling**: Use Tailwind utilities; place custom styles only in `globals.css` if unavoidable
5. **File Imports**: Use relative paths (`../../components/`) consistently
6. **Async Operations**: Wrap in try-catch; set `loading` and `error` states (Login component pattern)

## Integration Points

- **Backend API**: All API calls should go through `src/services/` layer
- **Auth Token Storage**: Determine localStorage/sessionStorage strategy in `authService.js`
- **Job Data Fetching**: Will transition from hardcoded `jobs.js` to dynamic via `jobService.js`

## Paths & Key Files

- Routes definition: [src/routes/AppRoutes.jsx](src/routes/AppRoutes.jsx)
- Page examples: [src/pages/public/JobSearchPage.jsx](src/pages/public/JobSearchPage.jsx), [src/pages/auth/Login.jsx](src/pages/auth/Login.jsx)
- Component examples: [src/components/jobsearch/JobCard.jsx](src/components/jobsearch/JobCard.jsx)
- Data models: [src/data/](src/data/)

## Next Steps (Known Gaps)

- Implement services layer (`authService`, `api`, `jobService`)
- Set up Redux store for global state management
- Implement protected routes using `ProtectedRoute.jsx`
- Add error boundaries and loading states globally
- Populate UI components folder with reusable components
