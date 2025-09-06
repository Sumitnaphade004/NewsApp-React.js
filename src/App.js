import './App.css';

import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Alert from './components/Alert';

const App =()=> {
  // const pageSize=15;
  const apikey=process.env.REACT_APP_NEWS_APP


  const [alert, setAlert]= useState("");
    
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },2000);
  }

    return (
      <Router>
        <div>
          <NavBar showAlert={showAlert}/>
          <Alert alert={alert}/>
          <Routes>
            <Route exact path='/' element={<News apikey={apikey}  key="general" country="us" category="general"/>}/>
            <Route exact path='/business' element={<News apikey={apikey}  key="business" country="us" category="business"/>}/>
            <Route exact path='/entertainment' element={<News apikey={apikey}  key="entertainment" country="us" category="entertainment"/>}/>
            <Route exact path='/health' element={<News apikey={apikey}  key="health" country="us" category="health"/>}/>
            <Route exact path='/science' element={<News apikey={apikey}  key="science" country="us" category="science"/>}/>
            <Route exact path='/sports' element={<News apikey={apikey}  key="sports" country="us" category="sports"/>}/>
            <Route exact path='/technology' element={<News apikey={apikey}  key="technology" country="us" category="technology"/>}/>
            <Route exact path='/login' element={<Login showAlert={showAlert} />}/>
            <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>
          </Routes>
        </div>
      </Router>
    )
}

export default App;
