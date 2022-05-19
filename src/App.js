import logo from './logo.svg';
import './App.css';
import { Registration } from './Component/Registration';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Login } from './Component/Login';
import HomePage from './Component/HomePage';
import { AddMedical } from './Component/AddMedical';
import Details from './Component/Details';
import ListMedicals from './Component/ListMedicals';



function App() {
  return (
    <div className="App">
     <BrowserRouter>

       {/* <Registration></Registration> */}
       {/* <Login></Login> */}
       {/* <HomePage></> */}
       <Route path="/" component={HomePage}></Route>
       <Route path="/Login"  component={Login}></Route>
       <Route path="/Registration" component={Registration}></Route>

       <Route path="/AddMedical"  component={AddMedical}></Route>
       <Route path="/Details"  component={Details}></Route>
       <Route path="/ListMedicals"  component={ListMedicals}></Route>

      </BrowserRouter> 
      </div>
  );
}

export default App;
