import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import '@smastrom/react-rating/style.css'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider } from 'react-photo-view';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
   <PhotoProvider>
   <RouterProvider router={Router} />
   </PhotoProvider>
    </AuthProvider>
     </QueryClientProvider>
  </React.StrictMode>
);
