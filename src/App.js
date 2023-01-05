import './App.css';
import Body from './layouts/Body';
import Header from './layouts/Header'
import Footer from './layouts/Footer';
import SideBar from './layouts/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
