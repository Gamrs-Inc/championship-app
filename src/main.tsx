import App from "@/App";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.scss";

const MainApp = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<MainApp />);
