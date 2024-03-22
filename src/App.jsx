import Home from './Home';
//import Landing from './components/Landing';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: '/bookingform',
    element: < Booking/>,
  },
  {
    path: '/services',
    element: <Services/>
  },
  {
    path: 'contact',
    element: <Contact/>
  }
]);

/*createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);*/


function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App