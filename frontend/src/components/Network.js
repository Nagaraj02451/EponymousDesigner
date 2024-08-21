import React, { useState } from 'react'
import "../styles/Home.css"
// import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
// import Sidebar from './layouts/Sidebar/Sidebar'
// import Search from './layouts/Search'
import Header2 from './layouts/Header2'
export default function Network() {
  const [keyword, setKeyword] = useState("")
    // const [isopen, setisopen] = useState(false);
    // const toggle = () => {
    //   setisopen(!isopen);
    // };
  
    // const profileone = useRef()
      // const { isAuthenticated, user } = useSelector(state => state.authState);
      const navigate = useNavigate();
      // const profile =()=>{
      //   profileone.current.classList.toggle("hgfiyug")
      // }
      const searchHandler = (e) => {
      
        e.preventDefault();
        navigate(`/search/${keyword}`)
  
    }
  
    return (
        <>

     
            <div className='Home'>
                <div className='Homeinner'>
             <div className='layoutojk'>
             <Header2 />
             </div>

              <div className='searchdes'>
  <div className='layoutojk'>
  <h1>Commodo mollis tempor dictum 
  ullamcorper tempor. Maecenas enim.</h1>
  <p className='fyghj'>
  Donec in netus placerat leo dolor. Urna et in feugiat donec pulvinar sollicitudin nisl.
  </p>
    <form onSubmit={searchHandler}>
    <div className='searchinputdes'>
      <input type='text' onChange={(e)=>{ setKeyword(e.target.value) }}
                value={keyword} placeholder='Email Address' />
      <button id="search_btn" >Join Waitlist</button>

     
    </div>

    
    </form>
  </div>
</div>
<div className='layoutojk'>
    
</div>

{/*          
                    <div className='lasthome'>
                         <p className='parahome'>Lorem morbi </p>
                         <div className='homedesc'>
                         Viverra sagittis enim in tellus
                         <br /> non posuere tellus viverra. 
                         </div>

                         <div className='Deginershome'>

                            {
                                datasHome.map(iteam =>{
                                    return(
                                        <>
                                          <div className='desiinne'>
                                <img className='hjvuyo' src={iteam.image} />
                                <div className='jgfi7uy'>
                                <h1>{iteam.titile}</h1>
                                </div>
                                <div className='linethrow'></div>
                                <div className='fgyg'>
                                    <div>{iteam.destination}</div>
                                    <div><img id='jhgfyu' src='/images/arrow.svg' /></div>
                                    </div>
                            </div>
                                        </>
                                    )
                                })
                            }
                       
                         
                         </div>

                       <div className='lastfooteend'>
                       <div className='yug8bui'>
                            <div className='lasjio'><div id='hgfdc'>Fermentum tristique at</div> <div className='lastright'><img id='jhgfyulast' src='/images/arrow.svg' /><a href='/alldesigners'>View All Designers</a></div></div>
                         </div>
                       </div>
                    </div> */}
                </div>
            </div>
      
        
        </>
    )
}
