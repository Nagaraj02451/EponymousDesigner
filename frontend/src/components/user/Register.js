import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { register, clearAuthError } from '../../actions/userActions'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "../../styles/Login.css"
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const [isathop , setathop] = useState("")
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telephone : "",
        password: ""
    });
    console.log(userData , "datas");
    // const [avatar, setAvatar] = useState("");
    // const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState)

    const onChange = (e) => {
        console.log({[e.target.name]:e.target.value}, "yufgi");
        setUserData({...userData, [e.target.name]:e.target.value })
    }

    const submitHandler = (e) => {
        // console.log(userData.name , "jhk");
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('telephone', userData.telephone);
        formData.append('password', userData.password)

  
        if(!isAuthenticated){
            setathop("continue")
            // console.log(typeof(formData));
            dispatch(register(formData))
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

    useEffect(()=>{

        if(isathop === "continue" && isAuthenticated){
            setTimeout(()=>{
                navigate("/")
            },2000)
        }
        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[error, isAuthenticated, dispatch, navigate])

    return (

        <>
        <Header />
             <div className='headerlogin'>
                <div className='innerlogin'>HOME/REGISTER NOW</div>
            </div>


            <div className="wrapper">

<div className='wrapperinner2'>

    <div className='loginleftr' >
    <h1 className='shadow-lgReg' id='accoutn'>Register Now</h1>
                        <p className='pararegiste'>Montes vitae est aliquam lobortis aliquet. Odio quis porttitor enim curabitur morbi sit cursus. </p>
                       
    </div>


  


    <div className='loginleftr'  id='leftid'>
    <div className='lineloginrrr' id='liop'>

</div>
        {/* <h1 className='shadow-lgReg'>Register Now</h1> */}
        <form onSubmit={submitHandler} className="shadow-lg1" encType='multipart/form-data'>
                {/* <h1 className="mb-3">Register</h1> */}

            <div className="form-group">
                {/* <label htmlFor="email_field">Name</label> */}
                <input name='name' placeholder='Name' onChange={onChange} type="name" id="name_field" className="form-control" />
            </div>

                <div className="form-group">
                {/* <label htmlFor="email_field">Email</label> */}
                <input
                    type="email"
                    id="email_field"
                    name='email' 
                    placeholder='Email'
                    onChange={onChange}
                    className="form-control"
                  
                />
                </div>
                <div className="form-group">
                {/* <label htmlFor="email_field">Telephone</label> */}
                <input
                    type="text"
                    id="text_field"
                    name='telephone' 
                    placeholder='Telephone'
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
                className="btnlogin"
                disabled={loading}
                >
               CREATE AN ACCOUNT
                </button>
            </form>
   </div>

</div>
</div>
<Footer />
      

        </>


    )
}
