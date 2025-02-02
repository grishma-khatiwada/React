import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Docs from './pages/docs.jsx';
import Dashboard from './pages/dashboard.jsx';
import SingleCategories from './pages/single-categories.jsx';
import TopNavbar from './components/top-navbar.jsx';
import MiddleNavbar from './components/middle-navbar.jsx';
import BottomNavbar from './components/bottom-navbar.jsx';
import Footer from './components/footer.jsx';
import Pages from './pages/pages.jsx';
import Account from './pages/account.jsx';
import MegaMenu from './pages/megamenu.jsx';
import Stores from './pages/stores.jsx';
import Shop from './pages/shop.jsx';
import ProductDescription from './pages/product-description.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

   <div className='space-y-6'>
   <TopNavbar/>
    <MiddleNavbar/>
    <BottomNavbar/>
    <hr className="text-gray-200"/>
   </div>

    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/docs" element={<Docs/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/categories/:id" element={<SingleCategories/>}/>
      <Route path="/pages" element={<Pages/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/megamenu" element={<MegaMenu/>} />
      <Route path="/stores" element={<Stores/>} />
      <Route path="/shop" element={<Shop/>} />

      <Route path="/shop/:id" element={<ProductDescription/>} />

 

    </Routes>

    <Footer/>
    </BrowserRouter>

  </StrictMode>,
)
