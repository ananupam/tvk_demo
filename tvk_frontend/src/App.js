import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Preloader from './components/preloader/Preloader';
import Navbar from './components/navbar/Navbar';
import TextCube from './components/textcube/Textcube';
import Mainpage from './pages/Mainpage';

function App() {

  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    const preloaderFetch = () =>{
      setTimeout(()=>{
        setIsLoading(false);
      },2000);
    };
    preloaderFetch();
  }, []);

  return isLoading?(
    <Preloader/>
  ) : (
    <div>
    <Navbar/>
    <Mainpage></Mainpage>
    </div>
  )
}

export default App;
