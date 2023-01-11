import { BrowserRouter } from 'react-router-dom';
import { addUserToDB, createUser, getUserFromDB, signIn } from './services/firebase';
import './App.css';
import Body from './layouts/Body';
import Header from './layouts/Header'
import Footer from './layouts/Footer';



function App() {
  // Please check the process to add a user to db, and get the user data from 
  // signIn('krishnamohan.bitsindri@gmail.com', 'krishna@123')
  // .then(credentials => {
    // const user = {};
    // user.email = credentials.user.email;
    // user.phone = '7632874178';
    // user.id = credentials.user.uid;
    // user.fname = 'Krishna';
    // user.lname = 'Mohan';
  //   // return addUserToDB(user);
  //   return getUserFromDB(credentials.user.uid)
  // })
  // .then(doc => {
  //   console.log(doc.data());
  // })
  // .catch(e => {
  //   console.log(e);
  // });

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
