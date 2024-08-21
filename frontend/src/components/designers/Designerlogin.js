import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
// import { clearAuthError, login } from '../../actions/userActions';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../../styles/Login.css"
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Designerlogin() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const [isathop , setathop] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { loading, error, isAuthenticated } = useSelector(state => state.authState)
    // const redirect = location.search ? './designer' + location.search.split('=')[1] : '/designer';

    const submitHandler = (e) => {
        e.preventDefault();
        if(!isAuthenticated){
            setathop("continue")
            dispatch(login(email, password))

        }
        else{
            toast(
                `Please logout and Continue.....!`,
                {
                  position: "bottom-right",
                }
              );
        }
    }

    useEffect(() => {
   
        if(isathop === "continue" && isAuthenticated){
            setTimeout(()=>{
                navigate("/designer")
            },2000)
        }
     
        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                // onOpen: () => { dispatch(clearAuthError) }
            })
            return
        }
    }, [error, isAuthenticated, dispatch, navigate])

    return (

        <>
            <Header />
            <div className='headerlogin'>
                <div className='innerlogin'>HOME/LOGIN</div>
            </div>


            <div className="wrapper">

                <div className='wrapperinner2'>

                    <div className='loginleftr' >
                        <h1 className='shadow-lgReg' id='accoutn'>Designer Login</h1>
                        <p className='pararegiste'>If you are a designer with at least one collection ready to showcase, please register your Look Book on Eponymous at no cost below.</p>

                    </div>





                    <div className='loginleftr' id='leftid'>
                        <div className='lineloginrrrrrr' id='liop'>

                        </div>
                        {/* <h1 className='shadow-lgReg'>Register Now</h1> */}
                        <form onSubmit={submitHandler} className="shadow-lg1" encType='multipart/form-data'>
                            {/* <h1 className="mb-3">Register</h1> */}



                            <div className="form-group">
                                {/* <label htmlFor="email_field">Email</label> */}
                                <input
                                    type="email"
                                    id="email_field"
                                    className="form-control"
                                    placeholder='Email Address'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="password_field">Password</label> */}
 
                                   <div className='tytfytug'>
                                                <input
                                                type={showPassword ? 'text' : 'password'}
                                                id="password_field"
                                                name="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                className="form-control"
                                            />
                                           <div className="password-toggle" onClick={togglePasswordVisibility}>
                                                {showPassword ? (
                                                    <img src="/images/eye-open.svg" alt="hide" />
                                                ) : (
                                                    <img src="/images/eye-closed.svg" alt="show" />
                                                )}
                                            </div>
                                    </div>
                            </div>


                            <button
                                id="register_button"
                                type="submit"
                                className="btnlogin"
                                disabled={loading}
                            >
                                LOGIN
                            </button>
                            <div className="fpass">
                <Link to="/password/forgot" >Forgot Password?</Link>
                       {/* <br />
                        <Link to="/register" >New User?</Link> */}

                </div>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />

        </>


    )
}