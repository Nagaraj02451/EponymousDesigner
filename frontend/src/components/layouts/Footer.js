import React, { useState } from 'react'
import "../../styles/Footer.css"
import { useSelector } from 'react-redux';
import axios from "axios"
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

   const { isAuthenticated } = useSelector(state => state.authState);
   const conttactinfo = async () => {
      // alert("df")
      try {
        if (email) {
          const result = await axios.post("/api/v1/news", {
            email : email
          });
          toast(
            `Hello ${email} your email has been received successfully. Our team will contact you soon!!!`,
            {
              position: "bottom-top",
            }
          );
        } else {
          toast(
            `Please fill !`,
            {
              position: "bottom-top",
            }
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    };
   return (
      <>


         <div className='f1'>


            <div className='f2'>


               <div className='f22'>
             <div>
             <div className='f21a'>Eponymous</div>

                  <div className='f22a'>
                     <div className='f22b'>DESIGNERS</div>
                     <div className='f22b'>ABOUT US</div>
                     <div className='f22b'>JOIN US</div>
                    {isAuthenticated && <div className='f22b'>RESCOURSES</div> } 
                  </div>
             </div>
                  <div className='xtrtdfuytu'>
                  <div className='f21aa' id='rtdygfu'>JOIN OUR NEWSLETTER</div>
                     <div className='ytdygu'>
                     <input value={email}
                  onChange={(e) => setEmail(e.target.value)} type='email' className='ytyguh' placeholder='Your Email' />
                          <div className='jghkbj' onClick={conttactinfo}><img  src='/images/footerarr.svg' alt="footer" /></div>
                     </div>
                  </div>

               </div>
            </div>

            <div className='f33'>

               <div className='f31'>
                  <div className='newfooter'>
                  <div id='orivacy' className='privacy'>PRIVACY POLICY</div>
                  <div id='orivacy' className='privacy'>SITEMAP</div>
                  </div>
                 <div className='newfooter' id='yugf'>
                 <div id='field'>hello@eponymous.com</div>
                  <div id='field' className='f322b1'>Follow us at
                     <img src='/images/li.svg' alt="footer" />
                     <img src='/images/x.svg' alt="footer" />
                     <img src='/images/ins.svg' alt="footer" />
                     <img src='/images/face.svg' alt="footer" /></div>
                 </div>
               </div>

            </div>

            <div className='f3aaa'>

               <div className='f3122'>

                  <div className='kastcghvj'>
                     <div id='field'>hello@eponymous.com</div>
                     <div id='field' className='f322b1'>Follow us at
                        <img src='/images/li.svg' alt="footer" />
                        <img src='/images/x.svg' alt="footer" />
                        <img src='/images/ins.svg' alt="footer" />
                        <img src='/images/face.svg' alt="footer" /></div>
                  </div>
                  <div className='ytguh'>
                     <div id='orivacy'>PRIVACY POLICY</div>
                     <div id='orivacy'>SITEMAP</div>
                  </div>

               </div>

            </div>
         </div>
      </>
   )
}

export default Footer
