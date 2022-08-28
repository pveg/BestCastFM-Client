import { NextUIProvider } from '@nextui-org/react';
import Nav from './components/Navbar/Nav';
import Background from './components/Background/Background';
import './App.css';


function App() {
  return (
    <NextUIProvider>
    <Nav/>
    <Background />
    </NextUIProvider>
  );
}

export default App;
