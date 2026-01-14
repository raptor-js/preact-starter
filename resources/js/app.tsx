import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";

import Home from "./pages/index.tsx";
import NotFound from "./pages/not-found.tsx";

export default function App() {
  return (
    <LocationProvider scope="/">
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Home} />
  
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
