import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Body from './layouts/Body';
import Header from './layouts/Header'
import Footer from './layouts/Footer';

import { createUser, signIn } from './services/firebase';

function App() {
  signIn('krishnamohan.bitsindri@gmail.com', 'krishna@123')
  return (
    <div className="App">
    <BrowserRouter>
        <Header />
        <Body />
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
