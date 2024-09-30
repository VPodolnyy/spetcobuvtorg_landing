import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Wrapper from './components/Wrapper'

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import NotFound from "./pages/NotFound"


// import App from './App.jsx'
// import './styles/index.styl'
import './styles/fonts.styl'
import './styles/reset.styl'

const router = createBrowserRouter([
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog/:group",
    element: <Catalog />,
  },
  {
    path: "/catalog/:group/:subGroup",
    element: <Catalog />,
  },
  {
    path: "/catalog/:group/:subGroup/:id",
    element: <Catalog />,
  },
  {
    path: "/:block",
    element: <Home />,
  },
  // {
  //   path: '/:pathMatch(.*)/*',
  //   component: NotFound
  // },
  {
    path: "*",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)