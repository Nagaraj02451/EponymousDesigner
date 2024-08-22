import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, login } from '../../actions/userActions';
import MetaData from '../layouts/MetaData';
import { toast } from 'react-toastify';
import "../../styles/Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
export default function Login() {
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
    const redirect = location.search ? '/' + location.search.split('=')[1] : '/';

    const submitHandler = (e) => {
        e.preventDefault();
        if(!isAuthenticated){
            setathop("continue")
            // console.log(typeof(formData));
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
                navigate(redirect)
            },2000)
        }
        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => { dispatch(clearAuthError) }
            })
            return
        }
    }, [error, isAuthenticated, dispatch, navigate , redirect])

    return (
        <>
            <MetaData title={`Login`} />
            <Header />
            <div className='headerlogin'>
                <div className='innerlogin'>HOME/LOGIN</div>
            </div>

            <div className="wrapper">

                <div className='wrapperinner'>

                    <div className='loginleft' >

                        <form onSubmit={submitHandler} className="shadow-lg">
                            <h1 id='accoutn'>Have an account</h1>
                            <div className="form-group" id='downpay'>
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
                                                    <img src="/images/openeye.svg" alt="hide" />
                                                ) : (
                                                    <img src="/images/closeeye.svg" alt="show" />
                                                )}
                                            </div>
                                    </div>
                            </div>


                            <button
                                id="login_button"
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


                    <div className='linelogin'>

                    </div>


                    <div className='loginleft'>
                        <h1 className='shadow-lgReg' id='accoutn'>Register Now</h1>
                        <p className='pararegiste'>Montes vitae est aliquam lobortis aliquet. Odio  quis porttitor enim curabitur morbi sit cursus. </p>
                          <div></div>
                      <Link to="/register">    <button
                               id='secondbtn'
                                className="btnlogin"
                            >
                               CREATE AN ACCOUNT
                            </button>
                            </Link>
                   </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
