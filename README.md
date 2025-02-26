# Search System with Autocomplete

A modern search system built with Next.js 15 that provides real-time search suggestions using Algolia's powerful search engine.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **State Management**: Zustand
- **Styling**: TailwindCSS
- **Search Engine**: Algolia API
- **Testing**: Vitest + React Testing Library
- **Language**: TypeScript

## Architecture

src/
├── app/ # Next.js App Router pages
│ ├── page.tsx # Home page
│ ├── layout.tsx # Root layout
│ └── search/ # Search feature
│ ├── page.tsx # Search page
│ └── SearchComponent.tsx
├── components/ # Reusable components
│ ├── SearchInput.tsx
│ └── SearchResults.tsx
├── hooks/ # Custom hooks
│ └── useSearch.ts # Search logic
├── lib/ # Utilities
│ └── algolia.ts # Algolia configuration
├── store/ # State management
│ └── useStore.ts # Zustand store
├── types/ # TypeScript types
│ └── search.ts
└── test/ # Test setup and configurations

## Features

- Real-time search with debouncing
- Search history tracking
- Responsive design
- Error handling
- Loading states
- Type-safe development
- Redux DevTools integration

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env.local` file with your Algolia credentials:
   ```
   NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your_search_api_key
   ```
4. Run the development server:
   ```bash
   pnpm dev
   ```

## Testing

The project uses Vitest and React Testing Library for testing. Tests are organized by component and feature:

- Component tests: `src/components/__tests__/`
- Hook tests: `src/hooks/__tests__/`

Run tests with:

```bash
pnpm test          # Run tests once
pnpm test:watch    # Run tests in watch mode
pnpm test:coverage # Run tests with coverage
```

## State Management

Zustand is used for state management with the following features:
- Search query state
- Results management
- Loading states
- Search history
- Error handling

The store is configured with:
- Redux DevTools integration
- Persistence
- TypeScript support

## Development

- **TypeScript**: Strict mode enabled
- **ESLint**: Custom configuration for React and TypeScript
- **Prettier**: Code formatting
- **Husky**: Pre-commit hooks (optional)

## Performance Considerations

- Debounced search to prevent excessive API calls
- Client-side caching with Zustand
- Optimized bundle size with Next.js
- Responsive design with Tailwind CSS

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

