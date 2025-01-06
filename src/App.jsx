import './App.css';
import Contact from './Components/Contact/contact';
import Portofolio from './Components/Portofolio/Portofolio';
import About from './Components/About/About';
import Layout from './Components/layout/Layout';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';





let x = createBrowserRouter([

  {path:"" , element: <Layout   />, children: [
    {index:true , element: <Home   /> },
    {path:"about" , element: <About   />},
    {path:"contact" , element: <Contact   />},
    {path:"portofolio" , element: <Portofolio   />},
  ], 
},

]);


function App() {
  return <RouterProvider router={x}></RouterProvider>;
  
}

export default App
