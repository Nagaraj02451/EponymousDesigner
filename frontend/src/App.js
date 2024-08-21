import './App.css';
import Home from './components/Home';
// import Footer from './components/layouts/Footer';
// import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/product/ProductDetail';
import ProductSearch from './components/product/ProductSearch';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect} from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import Cart from './components/cart/Cart';
import Designers from './components/Designers';
import About from './About';
// import DesignerForm from './components/DesignerForm';
// import FilterIteam from './components/FilterIteam';
import SliderHome from './components/SliderHome';
import Searchproducts from './components/product/Searchproducts';
import PageNotFound from './PageNotFound';
import Welcome from './components/Welcome';
// import Designerlogin from './components/user/Designerlogin';
import Network from './components/Network';
import Resource from './components/Resource';
// import Designerdashboard from './components/Designerdashboard';
import Pageslist from './Pageslist';
import Designerdashboard from './components/designers/Designerdashboard';
import Designerlogin from './components/designers/Designerlogin';
import DesignerForm from './components/designers/DesignerForm';
import DesignerSignlePage from './components/DesignerSignlePage';
import LoginDesingerUpdate from './components/LoginDesingerUpdate';

function App() {
  useEffect(() => {
    store.dispatch(loadUser)
  },[])

  return (
    <Router>
      <div className="App">
        <HelmetProvider>
        
                <div>
                  <ToastContainer theme='dark' />
                  <Routes>
                      <Route path='/home' element={<Home/>} />
                      <Route path='/search/:keyword' element={<Searchproducts />} />
                      <Route path='/pageslist' element={<Pageslist />} />
                      <Route path='/about' element={<About />} />
                      <Route path='/designerlogin' element={<Designerlogin />} />
                      <Route path='/network' element={<Network />} />
                      <Route path='/resource' element={<Resource />} />
                      <Route path='/dashboard' element={<ProtectedRoute><Designerdashboard /></ProtectedRoute>} />
                      <Route path='/designer/:id' element={<LoginDesingerUpdate />} />
                  {/* <Route path='/admin/products/create' element={ <ProtectedRoute isAdmin={true}><NewProduct/></ProtectedRoute> } /> */}
                      <Route path='/designer' element={<ProtectedRoute><DesignerSignlePage /></ProtectedRoute>} />
                      <Route path='/' element={<DesignerForm />} />
                      <Route path='/welcome' element={<Welcome />} />
                      <Route path='/search/:keyword' element={<ProductSearch/>} />
                      <Route path='/alldesigners' element={<Designers />} />
                      <Route path='/slider' element={<SliderHome />} />
                      <Route path='/alldesigners/:id' element={<ProductDetail/>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path='/register' element={<Register/>} />
                      <Route path='/myprofile' element={<ProtectedRoute><Profile/></ProtectedRoute> } />
                      {/* <Route path='/myprofilesample' element={<Profile/> } /> */}
                      <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute> } />
                      <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword/></ProtectedRoute> } />
                      <Route path='/password/forgot' element={<ForgotPassword/> } />
                      <Route path='/password/reset/:token' element={<ResetPassword/> } />
                      <Route path='/saved' element={<Cart/> } />
                      <Route path='*' element={<PageNotFound /> } />
                 
                  </Routes>
                </div>
    
            {/* <Footer/> */}
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
