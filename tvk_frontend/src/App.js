import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Preloader from './components/preloader/Preloader';

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
    <h1>Welcome to TVK</h1>
  )
}

export default App;
