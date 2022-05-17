import logo from './logo.svg';
import './App.css';
import { Registration } from './Component/Registration';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Login } from './Component/Login';
import HomePage from './Component/HomePage';
import { Madicines } from './Component/Medicines';




function App() {
  return (
    <div className="App">
     <BrowserRouter>

       <Registration></Registration>
       {/* <Login></Login> */}
       {/* <HomePage></HomePage> */}
       <Route path="/Registration" component={Registration}></Route>
       <Route path="/" component={HomePage}></Route>
       <Route path="/Login"  component={Registration}></Route>
       <Route path="/Madicines"  component={Madicines}></Route>
       {/* <Route path="/Login"  component={Login}></Route> */}
      </BrowserRouter> 
      </div>
  );
}

export default App;
