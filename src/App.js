import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import AddNew from './components/AddNew';
import EditItem from './components/EditItem';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import SideBar from './components/SideBar';

function App() {
  return (
    <>


    <Navbar/>
    <div className='row'>

      <div className='col-md-2 col-12'>
        <div className='sidebar'>
          <SideBar/>
        </div>
      </div>

      <div className='col-md-10 col-12'>
        <Routes>
          <Route path='/' element={<Products/>} />
          <Route path='' element={<Outlet/>}>
            <Route path='/products' element={<Products/>}/>
            <Route path='add' element={<AddNew/>} />
            <Route path='new' element={<EditItem/>}/>
          </Route>
          <Route path='/products/:productid' element={<Product/>}/>
        </Routes>
      </div>

    </div>
    
    </>
    
  );
}

export default App;
