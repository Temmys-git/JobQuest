import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Job from './components/Job';
import SignUp from './pages/SignUp';
import MyAccount from './pages/MyAccount';
import Applicants from './pages/Applicants';
import PostJob from './pages/PostJob';
import Footer from './components/Footer';
import ApplyJob from './pages/ApplyJob';

function App() {

  return (
    <>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<SignUp/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/postJobs' element={<PostJob/>}/>
                <Route path='/applyJob' element={<ApplyJob/>}/>

                <Route path='/myAccount' element={<MyAccount/>}/>
                <Route path='/myAccount/job/:id/applicants' element={<Applicants/>}/>
                <Route path='/jobs/:id' element={<Job/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
