import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Invalidpage from "./routes/Invalidpage";
import Information from "./components/Information";
import BeginerDriverProgram from "./routes/BeginerDriverProgram";
import BookInstructor from "./components/BookInstructor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Invalidpage />,
  },
  {
    path: "/packageInformation",
    element: <Information />,
  },
  {
    path: "/drivingInstructor",
    element: <BookInstructor/>,
  },
  {
    path:"/beginerDriverEducation",
    element: <BeginerDriverProgram/>
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
