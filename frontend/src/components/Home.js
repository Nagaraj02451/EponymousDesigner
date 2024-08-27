import React, { useRef, useState } from 'react'
import "../styles/Home.css"
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header2 from './layouts/Header2'
import { useSelector } from 'react-redux';
export default function Home() {

  const profileone = useRef()
    const { isAuthenticated, user } = useSelector(state => state.authState);
    // const navigate = useNavigate();
 
  const [keyword, setKeyword] = useState("")
  // const [isopen, setisopen] = useState(false);
  // const toggle = () => {
  //   setisopen(!isopen);
  // };

  // const profileone = useRef()
  // const { isAuthenticated, user , users , products } = useSelector(state => state.authState);

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

        <div className='uygfuyvku'>
          <div className='yutfiygu' id='hcgfgu'>
            <a className='yutfgiu' href='/'><h1 className='tytfgi7u'>Eponymous</h1></a>
          </div>
          <div className='yutfiygu'>
            <h1 className='fyugubi'><a className='yutfgiu' href='/alldesigners'>Explore Designers</a></h1>
            <a href='/' className='jhfgyu'> <p id='jyhtfyui'>Clothing</p></a>
            <a href='/' className='jhfgyu'><p>Jewellery</p></a>
            <a href='/' className='jhfgyu'><p>Accessories</p></a>
            <a href='/' className='jhfgyu'><p>Footwear</p></a>
            <a href='/' className='jhfgyu'><p>Bags</p></a>
          </div>
          <div className='fyutug'>
            <a href='/joinus'>
              <p>
                <div>Designer <span id='buyfugiyub'>Login/Join Us</span></div>
                <div>
                  <img className='uigbuyi' src='/images/se2.svg' />

                </div>
              </p>
            </a>
            { isAuthenticated ? 
            (
              <div className='uyykgu' onClick={() => {
                navigate('/myprofile')
              }} >
                    <div>
                    {user.name} 
                </div>
                <div>
                  <img className='uigbuyi' src='/images/se2.svg' />
                </div>
                  
               
              </div>


            ) : 
            <a href="/login">
              <div className='uyykgu'>
                <div>
                  Are you a Fashion Conscious Buyer or
                  Fashion Enthusiast?<br />
                  <div id='buyfugiyub'>Login/Join Us</div>
                </div>
                <div>
                  <img className='uigbuyi' src='/images/se2.svg' />
                </div>
              </div>
            </a>

          }

          </div>
        </div>

        <div className='search'>
          <div></div>
          <div className='layoutojk'>
            <h1>Welcome to the country’s largest fashion discovery platform.</h1>
            <form onSubmit={searchHandler}>
              <div className='searchinput'>
                <input type='text' onChange={(e) => { setKeyword(e.target.value) }}
                  value={keyword} placeholder='Search...' />
                <button id="search_btn" ><img className='yfytguyr7' src='/images/se.svg' /></button>


              </div>
            </form>
          </div>
          <div className='tyufyuhg'>
            <div>
            <a href='/about' className='jhfgyu'><p className='hgftuyki'>ABOUT US</p></a>  
            </div>
            <div className='yfghvkjgb'>
            <a href='/about' className='jhfgyu'><p id='field'>hello@eponymous.com</p></a>
              <p className='jgfyiuglij' id='field'>Follow us at
                <div className='vhyyfugyubi'>
                  <img src='/images/li.svg' alt="footer" />
                  <img src='/images/x.svg' alt="footer" />
                  <img src='/images/ins.svg' alt="footer" />
                  <img src='/images/face.svg' alt="footer" />
                </div>
              </p>
            </div>
          </div>

        </div>


      </div>

      <div className='hyfgoh8ioj'>
        <h1 className='tytfgi7u'>Eponymous</h1>
        <div className='layoutojk'>
            <h1>Welcome to the country’s largest fashion discovery platform.</h1>
            <form onSubmit={searchHandler}>
              <div className='searchinput'>
                <input type='text' onChange={(e) => { setKeyword(e.target.value) }}
                  value={keyword} placeholder='Search...' />
                <button id="search_btn" ><img className='yfytguyr7' src='/images/se.svg' /></button>


              </div>
            </form>
          </div>

          <div className='uygfuyvku'>
      
          <div className='yutfiygu'>
          <h1 className='fyugubi'><a className='yutfgiu' href='/alldesigners'>Explore Designers</a></h1>
          <a href='/' className='jhfgyu'> <p id='jyhtfyui'>Clothing</p></a>
            <a href='/' className='jhfgyu'><p>Jewellery</p></a>
            <a href='/' className='jhfgyu'><p>Accessories</p></a>
            <a href='/' className='jhfgyu'><p>Footwear</p></a>
            <a href='/' className='jhfgyu'><p>Bags</p></a>
          </div>
          <div className='fyutug'>
            <a href='/joinus'>
              <p>
                <div>Designer <span id='buyfugiyub'>Login/Join Us</span></div>
                <div>
                  <img className='uigbuyi' src='/images/se2.svg' />

                </div>
              </p>
            </a>
            { isAuthenticated ? 
            (
              <div className='uyykgu' onClick={() => {
                navigate('/myprofile')
              }} >
                    <div>
                    {user.name} 
                </div>
                <div>
                  <img className='uigbuyi' src='/images/se2.svg' />
                </div>
                  
               
              </div>


            ) : 
            <a href="/login">
              <div className='uyykgu'>
                <div className='fhjfytvghj'>
                  Are you a Fashion Conscious Buyer or
                  Fashion Enthusiast?<br />
                  <div className='uygiuyvuiyg' id='buyfugiyub'>Login/Join Us</div>
                </div>
                <div>
                  <img className='uigbuyi' src='/images/se2.svg' />
                </div>
              </div>
            </a>

          }

          </div>
        </div>
        <div className='tyufyuhg'>
            <div>
            <a href='/about' className='jhfgyu'><p className='hgftuyki'>ABOUT US</p></a>
            <a href='/' className='jhfgyu'><p id='field'>hello@eponymous.com</p></a>

            </div>
            <div className='yfghvkjgb'>
              <p className='jgfyiuglij' id='field'>
                 <div className='vhyyfugyubi'>
                  <img src='/images/li.svg' alt="footer" />
                  <img src='/images/x.svg' alt="footer" />
                  <img src='/images/ins.svg' alt="footer" />
                  <img src='/images/face.svg' alt="footer" />
                </div>
              </p>
            </div>
          </div>
      </div>

    </>
  )
}
