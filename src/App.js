
import './App.css';
import React ,{useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Contact from './components/Contact';



function App() {
 const [mode, setMode] = useState('light')
 const [alert, setalert] = useState(null)

 const showAlert = (message ,type) =>{
   setalert({
     msg:message,
     type:type
   })
 }

 setTimeout(() => {
   setalert(null)
   
 }, 2000);

 const toggleMode = () =>{
   if (mode === "light"){
     setMode("dark")
     document.body.style.backgroundColor = "#042743";
     document.body.style.color = "white";
     showAlert("dark mode is enalbed" ,"success")
  
   }
 else{
  setMode("light")
   console.log("light")
   document.body.style.backgroundColor = "white";
   document.body.style.color = "black";
 
   showAlert("light mode is enabled",  "success")
 }

 }
  
  return (
<>
<Router>

<Navbar title="Textutils"  abouttext="About us" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert} />
<div className="container my-3">
<Switch>
  {/* users ---> componets
      users/home react does partial matching thats why we need to use exact to match full path */}
          <Route exact path ="/about">
            <About  mode={mode} />
          </Route>

          <Route  exact path ="/Home">
          <Textform  showAlert = {showAlert}  heading="Try Textutils-Word Counter ,Character Counter"/>
          </Route>
        </Switch>

        <Route exact path ="/contact">
             
             <Contact showAlert = {showAlert} />  {/*we need to add the name of the file whch is in capital letter*/}
           
          </Route>

     

</div>
</Router>

</>
  );
}

export default App;
