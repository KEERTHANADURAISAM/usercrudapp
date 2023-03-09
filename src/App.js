import './App.css';
import User from './Components/User';
import DashBoard from './Components/DashBoard';
import Products from './Components/Products';
import {
  BrowserRouter, Route, Routes,
  
} from "react-router-dom";
import CreateUser from './Components/CreateUser';
import ViewUsers from './Components/ViewUsers';
import EditUser from './Components/EditUser';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DashBoard/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/create-user' element={<CreateUser/>}></Route>
      <Route path='/user/:id' element={<ViewUsers/>}></Route>
      <Route path='/user/edit/:id' element={<EditUser/>}></Route>
    </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
