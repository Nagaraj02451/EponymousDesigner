import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import "../../styles/header.css"


export default function Header2 () {
   
  // const [isopen, setisopen] = useState(false);
  // const toggle = () => {
  //   setisopen(!isopen);
  // };

  const profileone = useRef()
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const navigate = useNavigate();
    const profile =()=>{
      // alert("cliked")
      navigate('/myprofile')
      profileone.current.classList.taggle("hgfiyug")
      // profileone.current.classList.remove("hgfiyug")

    }

    return (
<>
{/* <Sidebar isopen={isopen} toggle={toggle} /> */}

<div className="navbarHome" >
        <div className='navbarinnerhome'>
      {/* <a href='/pageslist'>DL</a> */}

        <div className="navleft">
      <a href='/joinus'>DESIGNER LOGIN</a>
        </div>
  
        <div className='nav02'>
            <div className='nav02a'>
            <div className="navbar-brand1">
            <Link to="/">
            eponymous
            </Link>
            </div>
            {/* <Search /> */}

            </div>
             
          </div>
        <div className="navright">
          { isAuthenticated ? 
            (
              <div  >
                  <div className='vyttfy' onClick={profile}>
                  {user.name} 
                  {/* <img className='hftfuyu' src='/images/down.svg' alt='Eponymous' /> */}
            
                  </div>
                  <div className='hgh'  ref={profileone} >
                 
                      {/* <div onClick={() => {
                        navigate('/myprofile')

                      }} >Profile</div> */}
                 
                  </div>
              </div>


            )
          
          :

          <div className='navright'>
             {/* <div className='nav003' id='seearch'>
              <img alt='Eponymous' src='/images/search.svg'></img></div> */}
              
    
              
              <a href="/">      <div className='nav003'><img alt='Eponymous' src='/images/profile.svg'></img></div></a>
                     
               
          </div>
        
          }
        </div>
        </div>
    </div>
<div className='navmob1surya' >

        <a href='/joinus'>   <div  className='navmob2'>            <div  className='navmob2122'>DL</div>            </div></a>
        <a href='/'>   <div  className='navmob2'>            <div  className='navmob21'>eponymous</div>            </div></a>
        <div className="navright">
          { isAuthenticated ? 
            (
              <div  >
                  <div className='vyttfy' onClick={profile}>
                  {user.name} <img className='hftfuyu' src='/images/down.svg' alt='Eponymous' />
            
                  </div>
                  <div className='ytfyuu' ref={profileone} >
                 
                      <div onClick={() => {
                        navigate('/myprofile')
                        profileone.current.classList.remove("hgfiyug")

                      }} >Profile</div>
                 
                  </div>
              </div>


            )
          
          :

          <div className='navright'>
             {/* <div className='nav003' id='seearch'>
              <img alt='Eponymous' src='/images/search.svg'></img></div> */}
              
    
              
              <a href="/">      <div className='nav003'><img alt='Eponymous' src='/images/profile.svg'></img></div></a>
                     
               
          </div>
        
          }
        

        </div>
        </div>

</>
    )
}
