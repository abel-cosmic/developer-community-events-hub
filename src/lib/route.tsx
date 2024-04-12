/* eslint-disable react-refresh/only-export-components */
// import Home from "@/pages/home";
import { Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Blog = lazy(() => import("@/pages/blog"));
const Event = lazy(() => import("@/pages/event"));
const Forum = lazy(() => import("@/pages/forum"));
const LoadingElement = lazy(() => import("@/components/loaders/loading"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Suspense fallback={<LoadingElement />}>{<Home />}</Suspense>}
      />
      <Route
        path="about"
        element={<Suspense fallback={<LoadingElement />}>{<About />}</Suspense>}
      />
      <Route
        path="blog"
        element={<Suspense fallback={<LoadingElement />}>{<Blog />}</Suspense>}
      />
      <Route
        path="event"
        element={<Suspense fallback={<LoadingElement />}>{<Event />}</Suspense>}
      />
      <Route
        path="forum"
        element={<Suspense fallback={<LoadingElement />}>{<Forum />}</Suspense>}
      />
    </Route>
  )
);

export default router;
