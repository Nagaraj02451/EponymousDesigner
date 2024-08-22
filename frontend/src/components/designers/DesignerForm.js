import React, { useEffect, useState } from 'react'
import "../../styles/Login.css"
import { useDispatch, useSelector } from 'react-redux'
import { clearAuthError, designersRegister, register } from '../../actions/userActions';
import { toast } from "react-toastify";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Welcome from '../Welcome';
import { useNavigate } from 'react-router-dom';
// import PasswordInput from './PasswordInput';

function DesignerForm() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const [isathop, setathop] = useState("")
    // const[continue , setdatas] = useState("")
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telephone: "",
        password: ""
    });
    console.log(userData, "datas");
    // const [avatar, setAvatar] = useState("");
    // const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState)

    const onChange = (e) => {
        console.log({ [e.target.name]: e.target.value }, "yufgi");
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        console.log(userData, "jhk");
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('telephone', userData.telephone);
        formData.append('password', userData.password)

        console.log(typeof (formData));
        if (!isAuthenticated) {
            setathop("continue")
            dispatch(register(formData))
        }
        else {
            toast(
                `Please logout and Continue.....!`,
                {
                    position: "bottom-right",
                }
            );
        }

    }

    useEffect(() => {
        if (isathop === "continue" && isAuthenticated) {
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)
        }

        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',

            })
            return
        }
    }, [error, isAuthenticated, dispatch, navigate])

    return (
        <>
            <Header />


            {
                isathop === "continue" && isAuthenticated ? (

                    <div className='yfiyuguyg'>
                        <Welcome />
                    </div>

                ) : (
                    <div>
                        <div className='headerlogindf'>
                            <div className='innerlogin'></div>
                        </div>


                        <div className="wrapper">

                            <div className='wrapperinner2'>

                                <div className='loginleftr' >
                                    <h1 id='accoutn' className='shadow-lgReg'>Join Us</h1>
                                    <p className='pararegiste'>If you are a designer with at least one collection ready to showcase, please register your Look Book on Eponymous at no cost below.  </p>

                                    <h1 className='helpf' id='accoutn'>FAQ</h1>
                                    <div class="accordion accordion-flush" id="accordionFlushExample">

                                        <div class="accordion-item" id="Acco">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <button
                                                    class="accordion-button  collapsed"
                                                    id="Acco1"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne"
                                                >
                                                    Montes vitae est aliquam lobortis aliquet.
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOne"
                                                class="accordion-collapse collapse "
                                                aria-labelledby="flush-headingOne"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div class="accordion-body" id="boduiui">
                                                    <div className="innerbod">
                                                        <div>
                                                            We believe that a well-crafted strategy is the
                                                            cornerstone of business success. Our expert
                                                            consultants collaborate closely with you to develop
                                                            strategies
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item" id="Acco">
                                            <h2 class="accordion-header" id="flush-headingOnen">
                                                <button
                                                    class="accordion-button  collapsed"
                                                    id="Acco1"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOnen"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOnen"
                                                >
                                                    Montes vitae est aliquam lobortis aliquet.
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOnen"
                                                class="accordion-collapse collapse "
                                                aria-labelledby="flush-headingOnen"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div class="accordion-body" id="boduiui">
                                                    <div className="innerbod">
                                                        <div>
                                                            We believe that a well-crafted strategy is the
                                                            cornerstone of business success. Our expert
                                                            consultants collaborate closely with you to develop
                                                            strategies
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item" id="Acco">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button
                                                    class="accordion-button collapsed"
                                                    id="Acco1"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo"
                                                >
                                                    Montes vitae est aliquam lobortis aliquet.
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseTwo"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div class="accordion-body" id="boduiui">
                                                    <div className="innerbod">
                                                        <div>
                                                            We believe that a well-crafted strategy is the
                                                            cornerstone of business success. Our expert
                                                            consultants collaborate closely with you to develop
                                                            strategies
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item" id="Accolast">
                                            <h2 class="accordion-header" id="flush-headingThree">
                                                <button
                                                    class="accordion-button collapsed"
                                                    id="Acco1"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseThree"
                                                >
                                                    Montes vitae est aliquam lobortis aliquet.
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseThree"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingThree"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div class="accordion-body" id="boduiui">
                                                    <div className="innerbod">
                                                        <div>
                                                            We believe that a well-crafted strategy is the
                                                            cornerstone of business success. Our expert
                                                            consultants collaborate closely with you to develop
                                                            strategies
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <h1 className='help' id='accoutn'>Need Help?</h1>
                                    <p className='pararegiste1'>
                                        Montes vitae est aliquam lobortis aliquet. Odio
                                        quis porttitor enim curabitur morbi sit cursus.
                                    </p>

                                    <div className='contactsu'>
                                        <p className='imagephone'><img src='/images/phone.svg' />+91 98000 98000</p>
                                        <p className='imagephone'><img src='/images/mail.svg' />Rufus81@yahoo.com</p>
                                    </div>

                                </div>





                                <div className='loginleftr' id='leftid'>
                                    <div className='lineloginddd' id='liop'>

                                    </div>
                                    {/* <h1 className='shadow-lgReg'>Register Now</h1> */}
                                    <form onSubmit={submitHandler} className="shadow-lg1" encType='multipart/form-data'>
                                        {/* <h1 className="mb-3">Register</h1> */}

                                        <div className="form-group">
                                            {/* <label htmlFor="email_field">Name</label> */}
                                            <input name='name' placeholder='Name of the label*' onChange={onChange} type="name" id="name_field" className="form-control" />
                                        </div>


                                        <div className="form-group">
                                            {/* <label htmlFor="email_field">Tele/phone</label> */}
                                                 <div className='tytfytug'>
                                                    
                                            <select type="text"
                                                id="text_field"
                                                name='telephone'
                                                // placeholder='How many labels do you have?*'
                                                onChange={onChange}
                                                className="form-control"
                                            >
                                                <option id='vjv'>How many labels do you have?* </option>
                                                <option className='vjv'>1</option>
                                                <option className='vjv'>2</option>
                                                <option className='vjv'>3</option>

                                            </select>
                                            <div className="password-toggle"><img id='uyjgbyu' src='/images/narr.svg' /></div>
                                                 </div>
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="email_field">Email</label> */}
                                            <input
                                                type="email"
                                                id="email_field"
                                                name='email'
                                                placeholder='email'
                                                onChange={onChange}
                                                className="form-control"

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
                                                // value={value}
                                                onChange={onChange}
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
                                            id="register_button"
                                            type="submit"
                                            className="btnlogind12"
                                            data-bs-toggle="modal" href="#exampleModalToggle" role="button"
                                            disabled={loading}
                                        >
                                            CREATE A DESIGNERS PROFILE
                                        </button>

                                        <div className='hfghj'>
                                            <div>(Or)</div>
                                        </div>

                                        <a href='/designerlogin'> <div
                                            // id="register_button"
                                            id='jyfiyug'
                                            className="btnlogind"
                                            disabled={loading}
                                        >
                                            ALREADY HAVE AN DESIGNER PROFILE
                                        </div></a>

                                    </form>
                                </div>

                            </div>
                        </div>
                        <Footer />

                    </div>
                )
            }







        </>
    )
}

export default DesignerForm
