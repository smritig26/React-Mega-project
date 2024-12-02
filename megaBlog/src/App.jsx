import { useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authService from "./appwrite/auth"
import { Header } from './components'
import {Footer} from './components'
import { login,logout } from './store/authSlics'
function App() {
  // const [count, setCount] = useState(0)
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout());
      }
    })
    .catch((err) => {
      console.error("Error fetching current user:", err); // Handle errors
    })
    .finally(() => setLoading(false))
  } ,[dispatch])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
  
}

export default App
