import React from 'react'
// import Header2 from './components/layouts/Header2'
import Footer from './components/layouts/Footer'
import Header from './components/layouts/Header'

function Pageslist() {
  return (
    <>
    <Header />
    <div className='tutij'>
         <a href='/'><p>Home</p></a>
         <a href='/about'><p>About</p></a>
         <a href='/designerlogin'><p>Designerlogin</p></a>
         <a href='/network'><p>Network</p></a>
         <a href='/resource'><p>Resource</p></a>
         <a href='/dashboard'><p>Designer Dashboard</p></a>
         <a href='/joinus'><p>JoinUs</p></a>
         <a href='/welcome'><p>Welcome</p></a>
         <a href='/alldesigners'><p>Alldesigner</p></a>
         <a href='/login'><p>Login</p></a>
         <a href='/register'><p>Register</p></a>
         <a href='/registerhjf'><p>404</p></a>
    </div>
    <Footer />
    </>
  )
}

export default Pageslist
