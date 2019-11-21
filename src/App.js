import React from 'react';
// import Signin from './Components/Signin/Signin';
// import Signup from './Components/Signup/Signup';

import Lifecycle from './Components/Lifecycle_methods/Lifecycle';
// import State from './Components/State/State';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Useroutput from './Container/Useroutput/Useroutput';
import Userinput from './Components/Userinput/Userinput';


function App() {
  return (
    <div className="App">    
      <Router>
       <switch>
         <Route exact path='/' component={Userinput}></Route>
         {/* <Route exact path='/signin' component={Signin}></Route>
         <Route exact path='/signup' component={Signup}></Route> */}
         </switch>
     </Router>
    </div>
  );
}

export default App;
