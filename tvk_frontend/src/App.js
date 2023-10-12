import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Preloader from './components/preloader/Preloader';
import Navbar from './components/navbar/Navbar';
import TextCube from './components/textcube/Textcube';
import Mainpage from './pages/Mainpage';
import InfinitySlider from './components/infinityslider';
import Newsletter from './pages/Newsletter';
import RecentNewsletter from './pages/RecentNewsletter';
import Services from './pages/Services';

function App() {

  {/*const items = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
  ];*/}

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
      <Mainpage/>
      <Services/>
      {/*<InfinitySlider items={items} />
      <Newsletter/>
      <RecentNewsletter/>*/}
    </div>
  )
}

export default App;
