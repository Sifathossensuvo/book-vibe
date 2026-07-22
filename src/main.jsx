import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Roots from './components/roots/Roots';
import NotFound from './components/Errorpage/NotFound';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetails from './components/BookDetails/BookDetails';
import LisdedBooks from './components/ListedBooks/LisdedBooks';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const router = createBrowserRouter([
{
path: '/',
element: <Roots></Roots>,
errorElement: <NotFound></NotFound>,
children :[
{
  path: '/',
   element: <Home></Home>
},
{
path: 'books/:bookID',
element: <BookDetails></BookDetails>,
loader: () => fetch('/booksData.json')

},
{
path: 'listedBooks',
element: <LisdedBooks></LisdedBooks>,
loader: ()=> fetch('/booksData.json')

},
{
  path: 'dashboard',
  element: <Dashboard></Dashboard>
}
]

},



]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
    <ToastContainer />
  </StrictMode>
)
