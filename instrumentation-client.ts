// Runs once in the browser before hydration (Next.js instrumentation-client).
// PostHog itself loads lazily; see app/lib/analytics.ts.
import { initAnalytics } from './app/lib/analytics'

initAnalytics()
