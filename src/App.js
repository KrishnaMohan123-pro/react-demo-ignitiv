import { BrowserRouter } from 'react-router-dom';
import { addUserScoreToDB, addUserToDB, createUser, getUser, getUserFromDB, signIn } from './services/firebase';
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

  // getting data from db for user
  // getUser('4vlslznTZzPELOOClcPxxRF01lF2').then(res => res.forEach(r => console.log(r.data())));
  // addUserScoreToDB({id: '4vlslznTZzPELOOClcPxxRF01lF2', marks: '5', total: '10', category: 'linux', difficulty:'easy'}).then(console.log);
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
