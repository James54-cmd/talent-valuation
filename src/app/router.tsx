import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/app/routes/public/home-page";
import { NotFoundPage } from "@/app/routes/not-found-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
