import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Body from './layouts/Body';
import Header from './layouts/Header'
import Footer from './layouts/Footer';

function App() {
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
