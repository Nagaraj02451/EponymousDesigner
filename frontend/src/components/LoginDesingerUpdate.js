import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createNewProduct, getProduct, updateProduct } from "../actions/productActions";
import { clearError, clearProductCreated, clearProductUpdated } from "../slices/productSlice";
import { toast } from "react-toastify";

function LoginDesingerUpdate() {
    //   const genius = useRef()

    const [third, setthird] = useState(["Clothing"])
    console.log(third, "childpp");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id:productId } = useParams();
    console.log({ id:productId }  , "yuf7yu");
    
    const [email, setemail] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("50");
    const [description, setDescription] = useState("designer");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(50);
    const [seller, setSeller] = useState("");

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const { loading, isProductUpdated, error, product } = useSelector( state => state.productState)

    const [imagesCleared, setImagesCleared] = useState(false);

    const [count, setcount] = useState(0);
    const [count1, setcount1] = useState(0);
    const [count2, setcount2] = useState(0);
    const [countt, setcountt] = useState(0);
    const [countt1, setcountt1] = useState(0);
    const [countt2, setcountt2] = useState(0);
    const [counttl, setcounttl] = useState(0);
    const [counttl1, setcounttl1] = useState(0);
    const [counttl2, setcounttl2] = useState(0);
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const [percentage, setpercentage] = useState(100)
    const [facebook, setfacebook] = useState("")
    const [special, setspecialisation] = useState("")
    const [cloth, setcloth] = useState("")
    const [jewell, setjewell] = useState("")
    const [Accessories, setaccessor] = useState("")
    const [foot, setfoot] = useState("")
    // const [price, setfoot] = useState("")
    // alert(special)
    const [parentValue, setParentValue] = useState('');
    const [parent2Value, setParent2Value] = useState('');
    const [parent3Value, setParent3Value] = useState('');
    const [parent4Value, setParent4Value] = useState('');
    const [parent5Value, setParent5Value] = useState('');
    const [parent6Value, setParent6Value] = useState('');
    const [instagram, setinstagram] = useState('');
    const [twiiter, settwiiter] = useState('');
    const [designer, setdesigner] = useState('');
    const [office, setoffice] = useState('ooty');
    const [address, setaddress] = useState('');
    const [establish, setestablish] = useState('');
    const [lable, setlabel] = useState('');
    const [lablelink, setlabellink] = useState('');
    const [lablel1, setlabel1] = useState('');
    const [lablellink1, setlabellink1] = useState('');
    const [lablel2, setlabel2] = useState('');
    const [lablellink2, setlabellink2] = useState('');
    const [lablel3, setlabel3] = useState('');
    const [lablellink3, setlabellink3] = useState('');
    const [howyoaee, sethowyoaee] = useState('');
    const [speciallink, setspeciallink] = useState('');
    const [jewelllink, setjewelllink] = useState('');
    const [accessslink, setaccesslink] = useState('');
    const [footlink, setfootlink] = useState('');
    const [bagslink, setbagslink] = useState('');
    const [store, setstore] = useState('');
    const [store1, setstore1] = useState('');
    const [store2, setstore2] = useState('');
    const [store3, setstore3] = useState('');
    const [storelink, setstorelink] = useState('');
    const [storelink1, setstorelink1] = useState('');
    const [storelink2, setstorelink2] = useState('');
    const [storelink3, setstorelink3] = useState('');
    const [city, setcity] = useState('');
    const [city1, setcity1] = useState('');
    const [city2, setcity2] = useState('');
    const [city3, setcity3] = useState('');
    const [citylink, setcitylink] = useState('');
    const [citylink1, setcitylink1] = useState('');
    const [citylink2, setcitylink2] = useState('');
    const [citylink3, setcitylink3] = useState('');
    const [gender, setgender] = useState('male');
    // const [facebookl, setfacebook] = useState('');

    // console.log(parentValue, parent2Value ,parent3Value ,parent4Value,parent5Value,parent6Value , "images");
    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);
    const [datas3, setDatas3] = useState([]);
    const [datas4, setDatas4] = useState([]);
    const [datas5, setDatas5] = useState([]);
    const [datas6, setDatas6] = useState([]);
    // console.log(datas, "images");
    // console.log(parentValue, parent2Value,parent3Value,parent4Value,parent5Value,parent6Value, "ughb");
    console.log(parentValue, datas.map(iteam => iteam.value), "ughb");
    console.log(parent2Value, datas2, "ughb");
    console.log(parent3Value, datas3, "ughb");
    console.log(parent4Value, datas4, "ughb");
    console.log(parent5Value, datas5, "ughb");
    console.log(parent6Value, datas6.map(iteam => iteam.value), "ughb");


    const datas1 = [
        {
            title: "Clothing",
        },
        {
            title: "Jewellery",
        },
        {
            title: "Accessories",
        },
        {
            title: "Footwear",
        },
        {
            title: "Bags",
        },
    ]


    const increment = () => {
        if (count === 0) {
            setcount(1)
        } else if (count === 1) {
            setcount1(2)
        }

        if (count1 === 2) {
            setcount2(3)
        }
    }
    const increment1 = () => {
        if (countt === 0) {
            setcountt(1)
        } else if (countt === 1) {
            setcountt1(2)
        }

        if (countt1 === 2) {
            setcountt2(3)
        }
    }
    const increment2 = () => {
        if (counttl === 0) {
            setcounttl(1)
        } else if (counttl === 1) {
            setcounttl1(2)
        }

        if (counttl1 === 2) {
            setcounttl2(3)
        }
    }


    function childvalucliked(e) {
        const { name, value } = e.target;

        if (e.target.checked) {
            setDatas(prevDatas => [...prevDatas, { name, value }]);
        } else {
            setDatas(prevDatas => prevDatas.filter(data => data.name !== name || data.value !== value));
        }

    }
    function childvalucliked2(e) {
        const { name, value } = e.target;

        if (e.target.checked) {
            setDatas2(prevDatas => [...prevDatas, { name, value }]);
        } else {
            setDatas2(prevDatas => prevDatas.filter(data => data.name !== name || data.value !== value));
        }

    }
    function childvalucliked3(e) {
        const { name, value } = e.target;

        if (e.target.checked) {
            setDatas3(prevDatas => [...prevDatas, { name, value }]);
        } else {
            setDatas3(prevDatas => prevDatas.filter(data => data.name !== name || data.value !== value));
        }

    }
    function childvalucliked4(e) {
        const { name, value } = e.target;

        if (e.target.checked) {
            setDatas4(prevDatas => [...prevDatas, { name, value }]);
        } else {
            setDatas4(prevDatas => prevDatas.filter(data => data.name !== name || data.value !== value));
        }

    }
    function childvalucliked5(e) {
        const { name, value } = e.target;

        if (e.target.checked) {
            setDatas5(prevDatas => [...prevDatas, { name, value }]);
        } else {
            setDatas5(prevDatas => prevDatas.filter(data => data.name !== name || data.value !== value));
        }

    }
    function childvalucliked6(e) {
        setpercentage(75)

        const { name, value } = e.target;

        if (e.target.checked) {
            setDatas6(prevDatas => [...prevDatas, { name, value }]);
        } else {
            setDatas6(prevDatas => prevDatas.filter(data => data.name !== name || data.value !== value));
        }

    }
    // alert(facebook)
    const facebookdatas = (e) => {
        setfacebook(e.target.value)
        if (facebook) {
            setpercentage(50)
        }
    }

    const onImagesChange = (e) => {
        const files = Array.from(e.target.files);

        files.forEach(file => {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState == 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, file])
                }
            }

            reader.readAsDataURL(file)


        })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(user.name, office, gender, designer, address, user.email);

        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('price', 50);
        formData.append('description', "designer");
        formData.append('stock', 10);
        formData.append('seller', office);
        formData.append('category', gender);
        formData.append('designer', designer);
        formData.append('office', office);
        formData.append('address', address);
        formData.append('email', user.email);
        formData.append('estadate', establish);
        formData.append('lable', lable);
        formData.append('lablelink', lablelink);
        formData.append('lable1', lablel1);
        formData.append('lablelink1', lablellink1);
        formData.append('lable2', lablel2);
        formData.append('lablelink2', lablellink2);
        formData.append('lable3', lablel3);
        formData.append('lablelink3', lablellink3);
        formData.append('profile', howyoaee);
        formData.append('special', special);
        formData.append('specialpara', speciallink);
        formData.append('special1', cloth);
        formData.append('specialpara1', jewelllink);
        formData.append('special2', jewell);
        formData.append('specialpara2', accessslink);
        formData.append('special3', Accessories);
        formData.append('specialpara3', footlink);
        formData.append('special4', foot);
        formData.append('specialpara4', bagslink);
        formData.append('instagram', instagram);
        formData.append('x', twiiter);
        formData.append('facebook', facebook);
        formData.append('women', parentValue);
        formData.append('womendatas', datas.map(iteam => iteam.value));
        formData.append('men', parent2Value);
        formData.append('mendatas', datas2.map(iteam => iteam.value));
        formData.append('child', parent3Value);
        formData.append('childdatas', datas3.map(iteam => iteam.value));
        formData.append('access', parent4Value);
        formData.append('accessdatas', datas4.map(iteam => iteam.value));
        formData.append('jewell', parent5Value);
        formData.append('jewelldatas', datas5.map(iteam => iteam.value));
        formData.append('foot', parent6Value);
        formData.append('footdatas', datas6.map(iteam => iteam.value));
        formData.append('store', store);
        formData.append('storelink', storelink);
        formData.append('store1', store1);
        formData.append('storelink1', storelink1);
        formData.append('store2', store2);
        formData.append('storelink2', storelink2);
        formData.append('store3', store3);
        formData.append('storelink3', storelink3);
        formData.append('city', city);
        formData.append('citylink', citylink);
        formData.append('city1', city1);
        formData.append('citylink1', citylink1);
        formData.append('city2', city2);
        formData.append('citylink2', citylink2);
        formData.append('city3', city3);
        formData.append('citylink3', citylink3);
        formData.append('gallerytitle', third);
        images.forEach(image => {
            formData.append('images', image)
        })
        formData.append('imagesCleared' , imagesCleared);
        dispatch(updateProduct(productId, formData))
    }

    const clearImagesHandler = () => {
        setImages([]);
        setImagesPreview([]);
        setImagesCleared(true);
    }

    useEffect(() => {
        if(isProductUpdated) {
            toast('Saved Succesfully!',{
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(clearProductUpdated())
            })
            navigate('/designer')

            setImages([])
            return;
        }

        if(error)  {
            console.log(error);
            
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearError()) }
            })
            return
        }

        dispatch(getProduct(productId))
    }, [isProductUpdated, error, dispatch])

    useEffect(() => {
        console.log(Accessories , "ftghk");

        
        if(product._id) {
            setName(product.name);
            setPrice(product.price);
            setStock(product.stock);
            setDescription(product.description);
            setSeller(product.seller);
            setCategory(product.category);
            setgender(product.category)
            setoffice(product.office)
            setdesigner(product.designer)
            setaddress(product.address)
            setemail(product.email)
            setestablish(product.estadate)
            setlabel(product.lable)
            setlabellink(product.lablelink)
            setlabel1(product.lable1)
            setlabellink1(product.lablelink1)
            setlabel2(product.lable2)
            setlabellink2(product.lablelink2)
            setlabel3(product.lable3)
            setlabellink3(product.lablelink3)
            sethowyoaee(product.profile)
            setspecialisation(product.special)
            setspeciallink(product.specialpara)
            setcloth(product.special1)
            setjewell(product.specialpara1)
            setjewelllink(product.special2)
            setaccesslink(product.specialpara2)
            setaccessor(product.special3)
            setfootlink(product.specialpara3)
            setfoot(product.special4)
            setbagslink(product.specialpara4)
            setinstagram(product.instagram)
            settwiiter(product.x)
            setfacebook(product.facebook)
            setParentValue(product.women)
            setDatas(product.womendatas)
            setParent2Value(product.men)
            setDatas2(product.mendatas)
            setParent3Value(product.child)
            setDatas3(product.childdatas)
            setParent4Value(product.access)
            setDatas4(product.accessdatas)
            setParent5Value(product.jewell)
            setDatas5(product.jewelldatas)
            setParent6Value(product.foot)
            setDatas6(product.footdatas)
            setstore(product.store)
            setstorelink(product.storelink)
            setstore1(product.store1)
            setstorelink1(product.storelink1)
            setstore2(product.store2)
            setstorelink2(product.storelink2)
            setstore3(product.store3)
            setstorelink3(product.storelink3)
            setcity(product.city)
            setcitylink(product.citylink)
            setcity1(product.city1)
            setcitylink1(product.citylink1)
            setcity2(product.city2)
            setcitylink2(product.citylink2)
            setcity3(product.city3)
            setcitylink3(product.citylink3)
            setthird(product.gallerytitle)

            let images = [];
            product.images.forEach( image => {
                images.push(image.image)
            });
            setImagesPreview(images)
        }
    },[product])


    return (
        <>
            <Header />

            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-lg modal-dialog-centered">

                    <div class="modal-content">
                        <h1>Upload Photo</h1>
                        <div className='u6ygiuy'></div>

                        <div className='ytutrf'>
                            <div className='utygh'>
                                <span>NOTE:</span> At odio feugiat lobortis feugiat. Porttitor eget phasellus urna lorem tortor. Hendrerit lobortis convallis amet convallis sed.
                            </div>
                        </div>
                        <div className='tytuhi'>
                            {datas1.map((iteam) => {
                                let spanClass = third.includes(iteam.title) ? 'spanlist1' : 'fro1';

                                return (
                                    <>
                                        <div className='yjugui' key={iteam.title}>
                                            {/* <h1 className={spanClass}  onClick={(e)=>setthird(e.target.value)}>{}</h1> */}
                                            <input name='third' type='text' className={spanClass} value={iteam.title} onClick={(e) => setthird(e.target.value)} readOnly />

                                        </div>
                                    </>
                                );
                            })}
                            {/* <div>Clothing</div>
                            <div>Jewellery</div>
                            <div>Accessories</div>
                            <div>Footwear</div>
                            <div>Bags</div> */}
                        </div>
                        <div className='u6ygiuy1'></div>


                        <div className='tytuhi'>
                            <div className='ytu'>
                                <div className='box' style={{ backgroundImage: 'url(' + imagesPreview[1] + ')' }} >
                                    <div >

                                        <div className='custom-file'>
                                            {/* <img src={avatarPreview} /> */}
                                            <input
                                                type='file'
                                                name='designer_images'
                                                onChange={onImagesChange}
                                                className='custom-file-input'
                                                id='customFile'
                                            />
                                            <label className='custom-file-label' htmlFor='customFile'>
                                                {
                                                    imagesPreview[1] ? "" : <>
                                                        <div>+</div>
                                                        <div>Add Your</div>
                                                        <div>images here</div>
                                                    </>
                                                }
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='box' style={{ backgroundImage: 'url(' + imagesPreview[2] + ')' }} >
                                    <div>
                                        <div className='custom-file'>
                                            <input
                                                type='file'
                                                name='designer_images'
                                                // value="surya"
                                                onChange={onImagesChange}
                                                className='custom-file-input1'
                                                id='customFile1'
                                            />
                                            <label className='custom-file-label' htmlFor='customFile'>
                                                {
                                                    imagesPreview[2] ? "" : <>
                                                        <div>+</div>
                                                        <div>Add Your</div>
                                                        <div>images here</div>
                                                    </>
                                                }
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='box' style={{ backgroundImage: 'url(' + imagesPreview[3] + ')' }} >
                                    <div>
                                        <div className='custom-file'>
                                            <input
                                                type='file'
                                                name='designer_images'
                                                onChange={onImagesChange}
                                                className='custom-file-input2'
                                                id='customFile2'
                                            />
                                            <label className='custom-file-label' htmlFor='customFile'>
                                                {
                                                    imagesPreview[3] ? "" : <>
                                                        <div>+</div>
                                                        <div>Add Your</div>
                                                        <div>images here</div>
                                                    </>
                                                }
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='box' style={{ backgroundImage: 'url(' + imagesPreview[4] + ')' }} >
                                    <div>
                                        <div className='custom-file'>
                                            <input
                                                type='file'
                                                name='designer_images'
                                                onChange={onImagesChange}
                                                className='custom-file-input3'
                                                id='customFile3'
                                            />
                                            <label className='custom-file-label' htmlFor='customFile'>
                                                {
                                                    imagesPreview[4] ? "" : <>
                                                        <div>+</div>
                                                        <div>Add Your</div>
                                                        <div>images here</div>
                                                    </>
                                                }
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ytu11' >
                                <div>
                                    <div className='utygh'>
                                        <span>NOTE:</span> At odio feugiat lobortis feugiat. Porttitor eget phasellus urna lorem tortor. Hendrerit lobortis convallis amet convallis sed.
                                    </div>
                                    <button class="close ytug" data-bs-toggle="modal" href="#exampleModalToggle" role="button">SAVE</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
            <div className='headerlogin'>
                <div className='innerlogin'><img src='/images/backho.svg' />GO back to Profile</div>
            </div>
            <div className='designerdashboard'>
                <div className='designerdashboardinne'>
                    <div className='firstcontendidign'>
                        <div className='dsignstudio'>
                            <h1>Brand or Designer name</h1>
                            <h2>Montes vitae</h2>
                        </div>
                        <div className='ghjgytyg'>
                            <p>Profile completion</p>
                            <p className='tuyi'>{percentage}%</p>
                        </div>


                    </div>

                </div>
            </div>
            <div className='designerdashboard'>
                <div className='designerdashboardinne'>
                    <div className='firstcontendidign2'>
                        <form onSubmit={submitHandler} encType='multipart/form-data'>
                            <div className='tyui'>
                                <div class="accordion accordion-flush" id="accordionFlushExample1">

                                    <div class="accordion-item" >
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button
                                                class="accordion-button  collapsed"
                                                id="Acco122"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOne"
                                            >
                                                01. Personal Details
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOne"
                                            class="accordion-collapse collapse "
                                            aria-labelledby="flush-headingOne"
                                            data-bs-parent="#accordionFlushExample1"
                                        >

                                            <div className='tyfui'  >
                                                <p>Image/logo</p>
                                                {/* <div data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='ytdf7iy'>+</div> */}
                                                {/* <div  data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='ytgivyu'>ADD IMAGE +</div> */}
                                                <div className='custom-file'>
                                                    {/* <img src={avatarPreview} /> */}
                                                    <input
                                                        type='file'
                                                        name='designer_images'
                                                        onChange={onImagesChange}
                                                        className='custom-file-input'
                                                        id='customFile'
                                                    />
                                                    <label className='custom-file-label' htmlFor='customFile'>
                                                        <div className='ytdf7iy' style={{ backgroundImage: 'url(' + imagesPreview[0] + ')' }}>{imagesPreview[0] ? "" : "+"}</div>
                                                        {/* <div>Add Your</div>
                                                <div>images here</div> */}
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="datascollection" >
                                                <input name='Main Label name' type='text' value={user ? user.name : ""} placeholder='Name surname' />
                                                <input name='designer' onChange={e => setdesigner(e.target.value)}
                                                    value={designer} type='text' placeholder='Name of Desginer' />
                                                {/* <input type='text' placeholder='Name of Desginer' /> */}
                                
                                                <select type="text"
                                                    id="text_field"
                                                    name='telephone'
                                                    // placeholder='How many labels do you have?*'
                                                    onChange={e => setoffice(e.target.value)}
                                                    value={office}
                                                    className="form-control uiyguyglhj"
                                                >
                                                    <option id='vjv'>Head Office</option>
                                                    <option id='vjv'>chennai</option>
                                                    <option id='vjv'>ooty</option>
                                                    <option id='vjv'>Bengaluru</option>
                                                    {/* <option className='vjv'>3</option> */}

                                                </select>
                                                
                                                <input name='address' onChange={e => setaddress(e.target.value)}
                                                    value={address} type='text' placeholder='Address' />
                                                <input name='email' type='email' value={user ? user.email : ""} placeholder='Email' />
                                                <input name='establish' onChange={e => setestablish(e.target.value)}
                                                    value={establish} type='text' placeholder='Established Date' />
                                                <div className='uygfuy'
                                                ><input name='label' onChange={e => setlabel(e.target.value)}
                                                    value={lable} type='text' placeholder='Labels' />
                                                    <p className='htytrf' onClick={increment}>+</p>
                                                </div>
                                                <input name='lablelink' onChange={e => setlabellink(e.target.value)}
                                                    value={lablelink} type='text' placeholder='Link (website, Instagram, or online stores)' />
                                                {/* <input type='text' placeholder='Link (website, Instagram, or online stores)' /> */}
                                                {
                                                    count === 1 && <>
                                                        <input name='lablel1' onChange={e => setlabel1(e.target.value)}
                                                            value={lablel1} type='text' placeholder='Labels' />
                                                        <input name='lablellink1' onChange={e => setlabellink1(e.target.value)}
                                                            value={lablellink1} type='text' placeholder='Link (website, Instagram, or online stores)' />
                                                    </>
                                                }
                                                {
                                                    count1 === 2 && <>
                                                        <input name='lablel2' onChange={e => setlabel2(e.target.value)}
                                                            value={lablel2} type='text' placeholder='Labels' />
                                                        <input name='lablellink2' onChange={e => setlabellink2(e.target.value)}
                                                            value={lablellink2} type='text' placeholder='Link (website, Instagram, or online stores)' />
                                                    </>
                                                }
                                                {
                                                    count2 === 3 && <>
                                                        <input name='lablel3' onChange={e => setlabel3(e.target.value)}
                                                            value={lablel3} type='text' placeholder='Labels' />
                                                        <input name='lablellink3' onChange={e => setlabellink3(e.target.value)}
                                                            value={lablellink3} type='text' placeholder='Link (website, Instagram, or online stores)' />
                                                    </>
                                                }


                                            </div>

                                            <select type="text"
                                                id="text_field"
                                                name='telephone'
                                                // placeholder='How many labels do you have?*'
                                                onChange={e => setgender(e.target.value)}
                                                value={gender}
                                                className="form-control khfgi7uoho"
                                            >
                                                <option id='vjv'>Gender</option>
                                                <option id='vjv'>male</option>
                                                <option id='vjv'>female</option>
                                                {/* <option className='vjv'>3</option> */}

                                            </select>
                                            <div className='tycfkhbjikn'>
                                                <textarea name='howyoaee' onChange={e => sethowyoaee(e.target.value)}
                                                    value={howyoaee} placeholder='Tell us Who your are' type="text"></textarea>
                                                <div className='uytftyug'>max. 250 words</div>
                                            </div>

                                            <div  >
                                                <p>Select your Specialistion</p>
                                                <div className='uytfyugiu'>
                                                    <div className='iyuguym'>
                                                        <label>
                                                            <input type="checkbox" checked={special === "Clothing"} onClick={(e) => setspecialisation(e.target.value)} name="group" id="elementdataa" value="Clothing" />
                                                            CLOTHING
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" checked={cloth === "Jewellery"} onClick={(e) => setcloth(e.target.value)} name="group" id="elementdataa" value="Jewellery" />
                                                            JEWELLERY
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" checked={jewell === "Accessories"} onClick={(e) => setjewell(e.target.value)} name="group" id="elementdataa" value="Accessories" />
                                                            ACCESSORIES
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" checked={Accessories === "Footwear"} onClick={(e) => setaccessor(e.target.value)} name="group" id="elementdataa" value="Footwear" />
                                                            FOOTWEAR
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" checked={foot === "Bags"} onClick={(e) => setfoot(e.target.value)} name="group" id="elementdataa" value="Bags" />
                                                            BAGS
                                                        </label>
                                                    </div>
                                                    <div className='uygfy'>


                                                        {
                                                            special === "Clothing" ? <input onChange={e => setspeciallink(e.target.value)}
                                                                value={speciallink} className='uyfyulkoplkm' name='CLOTHING' type='text' placeholder='max.15 words' /> : ""
                                                        }
                                                        {
                                                            cloth === "Jewellery" ? <input onChange={e => setjewelllink(e.target.value)}
                                                                value={jewelllink} className='uyfyulkoplkm' name='JEWELLERY' type='text' placeholder='max.15 words' /> : ""
                                                        }
                                                        {
                                                            jewell === "Accessories" ? <input onChange={e => setaccesslink(e.target.value)}
                                                                value={accessslink} className='uyfyulkoplkm' name='ACCESSORIES' type='text' placeholder='max.15 words' /> : ""
                                                        }
                                                        {
                                                            Accessories === "Footwear" ? <input onChange={e => setfootlink(e.target.value)}
                                                                value={footlink} className='uyfyulkoplkm' name='FOOTWEAR' type='text' placeholder='max.15 words' /> : ""
                                                        }
                                                        {
                                                            foot === "Bags" ? <input onChange={e => setbagslink(e.target.value)}
                                                                value={bagslink} className='uyfyulkoplkm' name='BAGS' type='text' placeholder='max.15 words' /> : ""
                                                        }



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item" id="Acco">
                                        <h2 class="accordion-header" id="flush-headingOnen">
                                            <button
                                                class="accordion-button  collapsed"
                                                id="Acco122"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOnen"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseOnen"
                                            >
                                                02. Social Connections
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseOnen"
                                            class="accordion-collapse collapse "
                                            aria-labelledby="flush-headingOnen"
                                            data-bs-parent="#accordionFlushExample1"
                                        >
                                            <div>
                                                <div class="datascollection2" >

                                                    <input name='instagram' type='text' onChange={e => setinstagram(e.target.value)}
                                                        value={instagram} placeholder='Instagram' />
                                                    <input name='twiiter' onChange={e => settwiiter(e.target.value)}
                                                        value={twiiter} type='text' placeholder='X' />
                                                    <input name='facebook' type='text' value={facebook} onChange={(e) => facebookdatas(e)} placeholder='Facebook' />

                                                </div>
                                                <div className='htyug'>
                                                    Please only enter your Instagram username without URL nor <br />@, i.e. ‘username’, and not ‘@username’ or ‘instagram.com/
                                                    <br />username’
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                    <div class="accordion-item" id="Acco">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                            <button
                                                class="accordion-button collapsed"
                                                id="Acco122"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseTwo"
                                            >
                                                03. Clothing Categories
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseTwo"
                                            class="accordion-collapse collapse"
                                            aria-labelledby="flush-headingTwo"
                                            data-bs-parent="#accordionFlushExample1"
                                        >
                                            <div>
                                                <div class="wwhjgyded" >
                                                    <div className='datasinnerradio'>
                                                        <div className='datasradio'>
                                                            <label className='ytg7y'>
                                                                <input id="elementdataa" type="checkbox" value="Womenswear" checked={datas.length > 0} onChange={(e) => setParentValue(e.target.value)} />
                                                                WOMENSWEAR
                                                            </label>
                                                            <br />
                                                            {/* Add more parent buttons similarly */}
                                                        </div>
                                                        <div >
                                                            {/* Add more child buttons similarly */}
                                                            <label id='ytg7y'>
                                                                <input id="element" name='Womenswear' checked={datas.includes("Avant-Garde")}  type="checkbox" value="Avant-Garde" onChange={childvalucliked} />
                                                                AVANT-GARDE

                                                            </label>
                                                        </div>
                                                        <label id='ytg7y'>
                                                            <input id="element" name='Womenswear' checked={datas.includes("Bottoms")} type="checkbox" value="Bottoms" onChange={childvalucliked} />
                                                            BOTTOMS

                                                        </label>

                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("T-Shirts")} name='Womenswear' type="checkbox" value="T-Shirts" onChange={childvalucliked} />
                                                            T-SHIRTS

                                                        </label>

                                                        <label id='ytg7y'> 
                                                            <input id="element" checked={datas.includes("Tops")} name='Womenswear' type="checkbox" value="Tops" onChange={childvalucliked} />
                                                            TOPS

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Dresses")} name='Womenswear' type="checkbox" value="Dresses" onChange={childvalucliked} />
                                                            DRESSES

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Skirts")} name='Womenswear' type="checkbox" value="Skirts" onChange={childvalucliked} />
                                                            SKIRTS

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Beachwear")} name='Womenswear' type="checkbox" value="Beachwear" onChange={childvalucliked} />
                                                            BEACHWEAR

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input type="checkbox" checked={datas.includes("Bridal")} name='Womenswear' value="Bridal" onChange={childvalucliked} />
                                                            BRIDAL

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Casualwear")} name='Womenswear' type="checkbox" value="Casualwear" onChange={childvalucliked} />
                                                            CASUALWEAR

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input type="checkbox" checked={datas.includes("Couture")} name='Womenswear' value="Couture" onChange={childvalucliked} />
                                                            COUTURE

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Denim")} name='Womenswear' type="checkbox" value="Denim" onChange={childvalucliked} />
                                                            DENIM

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Eveningwear")} name='Womenswear' type="checkbox" value="Eveningwear" onChange={childvalucliked} />
                                                            EVENINGWEAR

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Knitwear & Sweaters")} name='Womenswear' type="checkbox" value="Knitwear & Sweaters" onChange={childvalucliked} />
                                                            KNITWEAR & SWEATERS

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input type="checkbox" checked={datas.includes("Leather")} name='Womenswear' value="Leather" onChange={childvalucliked} />
                                                            LEATHER

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Lingerie")} name='Womenswear' type="checkbox" value="Lingerie" onChange={childvalucliked} />
                                                            LINGERIE

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Modest")} name='Womenswear' type="checkbox" value="Modest" onChange={childvalucliked} />
                                                            MODEST

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Streetwear")} name='Womenswear' type="checkbox" value="Streetwear" onChange={childvalucliked} />
                                                            STREETWEAR

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Activewear")} name='Womenswear' type="checkbox" value="Activewear" onChange={childvalucliked} />
                                                            ACTIVEWEAR

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Swimwear")} name='Womenswear' type="checkbox" value="Swimwear" onChange={childvalucliked} />
                                                            SWIMWEAR

                                                        </label>
                                                        <label id='ytg7y'>
                                                            <input id="element" checked={datas.includes("Workwear")} name='Womenswear' type="checkbox" value="Workwear" onChange={childvalucliked} />
                                                            WORKWEAR

                                                        </label>

                                                        {/* Add more sections for other parent values and their corresponding child buttons */}

                                                    </div>
                                                    <div className='datasinnerradio'>
                                                        <div className='datasradio'>
                                                            <label className='ytg7y'>
                                                                <input type="checkbox" name="group" id="elementdataa" value="Menswaer" checked={datas2.length > 0} />
                                                                MENSWEAR
                                                            </label>
                                                            <br />

                                                            {/* Add more parent buttons similarly */}
                                                        </div>

                                                        <div>

                                                            <div>
                                                                {/* Add more child buttons similarly */}
                                                                <label id='ytg7y'>
                                                                    <input type="checkbox" checked={datas2.includes("Activewear")}  id="element" value="Activewear" name='Menswaer' onChange={childvalucliked2} />
                                                                    ACTIVEWEAR

                                                                </label >
                                                            </div>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Avant-Garde")} id="element" value="Avant-Garde" name='Menswaer' onChange={childvalucliked2} />
                                                                AVANT-GARDE

                                                            </label>

                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Bottoms")} id="element" value="Bottoms" name='Menswaer' onChange={childvalucliked2} />
                                                                BOTTOMS

                                                            </label>


                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Casualwear")} id="element" value="Casualwear" name='Menswaer' onChange={childvalucliked2} />
                                                                CASUALWEAR

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Denim")} id="element" value="Denim" name='Menswaer' onChange={childvalucliked2} />
                                                                DENIM

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Formalwear")} id="element" value="Formalwear" name='Menswaer' onChange={childvalucliked2} />
                                                                FORMALWEAR

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Underwear")} id="element" value="Underwear" name='Menswaer' onChange={childvalucliked2} />
                                                                UNDERWEAR

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Jackets & Coats")} id="element" value="Jackets & Coats" name='Menswaer' onChange={childvalucliked2} />
                                                                JACKETS & COATS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Leather")} id="element" value="Leather" name='Menswaer' onChange={childvalucliked2} />
                                                                LEATHER

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Knitwear")} id="element" value="Knitwear" name='Menswaer' onChange={childvalucliked2} />
                                                                KNITWEAR

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Streetwear")} id="element" value="Streetwear" name='Menswaer' onChange={childvalucliked2} />
                                                                STREETWEAR

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Swimwear")} id="element" value="Swimwear" name='Menswaer' onChange={childvalucliked2} />
                                                                SWIMWEAR

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Suits & Blazers")} id="element" value="Suits & Blazers" name='Menswaer' onChange={childvalucliked2} />
                                                                SUITS & BLAZERS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("T-Shirts")} id="element" value="T-Shirts" name='Menswaer' onChange={childvalucliked2} />
                                                                T-SHIRTS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas2.includes("Tops")} id="element" value="Tops" name='Menswaer' onChange={childvalucliked2} />
                                                                TOPS

                                                            </label>

                                                            {/* Add more sections for other parent values and their corresponding child buttons */}
                                                        </div>
                                                        <div className='datasradio' id='ghgfuby'>
                                                            <label className='ytg7y'>
                                                                <input type="checkbox" id="elementdataa" value="Childrenswear" checked={datas3.length > 0} onChange={(e) => setParent3Value(e.target.value)} />
                                                                CHILDRENSWEAR
                                                            </label>
                                                            <br />

                                                            {/* Add more parent buttons similarly */}
                                                        </div>
                                                        <div>

                                                            <div>
                                                                {/* Add more child buttons similarly */}
                                                                <label id='ytg7y'>
                                                                    <input type="checkbox" checked={datas3.includes("Avant-Garde")} name='Childrenswear' id="element" value="Avant-Garde" onChange={childvalucliked3} />
                                                                    AVANT-GARDE

                                                                </label>
                                                            </div>


                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas3.includes("Millinery")} id="element" value="Millinery" name='Childrenswear' onChange={childvalucliked3} />
                                                                MILLINERY

                                                            </label>



                                                            {/* Add more sections for other parent values and their corresponding child buttons */}
                                                        </div>
                                                    </div>
                                                    <div className='datasinnerradio'>
                                                        <div className='datasradio'>
                                                            <label className='ytg7y'>
                                                                <input type="checkbox" id="elementdataa" value="Accessories" checked={datas4.length > 0} onChange={(e) => setParent4Value(e.target.value)} />
                                                                ACCESSORIES
                                                            </label>
                                                            <br />

                                                            {/* Add more parent buttons similarly */}
                                                        </div>

                                                        <div>

                                                            <div>
                                                                {/* Add more child buttons similarly */}
                                                                <label id='ytg7y'>
                                                                    <input type="checkbox" checked={datas4.includes("Avant-Garde")} name='Accessories' id="element" value="Avant-Garde" onChange={childvalucliked4} />
                                                                    AVANT-GARDE

                                                                </label>
                                                            </div>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Bags")} id="element" value="Bags" name='Accessories' onChange={childvalucliked4} />
                                                                BAGS

                                                            </label>

                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Body pieces")} id="element" value="Body pieces" name='Accessories' onChange={childvalucliked4} />
                                                                BODY PIECES

                                                            </label>

                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Gloves")} id="element" value="Gloves" name='Accessories' onChange={childvalucliked4} />
                                                                GLOVES

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Hair Accessories")} id="element" value="Hair Accessories" name='Accessories' onChange={childvalucliked4} />
                                                                HAIR ACCESSORIES

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Leather")} id="element" value="Leather" name='Accessories' onChange={childvalucliked4} />
                                                                LEATHER

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Millinery")} id="element" value="Millinery" name='Accessories' onChange={childvalucliked4} />
                                                                MILLINERY

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Opticals")} id="element" value="Opticals" name='Accessories' onChange={childvalucliked4} />
                                                                OPTICALS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Scarves")} id="element" value="Scarves" name='Accessories' onChange={childvalucliked4} />
                                                                SCARVES

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Small Leather")} id="element" value="Small Leather" name='Accessories' onChange={childvalucliked4} />
                                                                SMALL LEATHER

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Goods")} id="element" value="Goods" name='Accessories' onChange={childvalucliked4} />
                                                                GOODS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Gloves")} id="element" value="Gloves" name='Accessories' onChange={childvalucliked4} />
                                                                GLOVES

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Travel")} id="element" value="Travel" name='Accessories' onChange={childvalucliked4} />
                                                                TRAVEL

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas4.includes("Umbrellas")} id="element" value="Umbrellas" name='Accessories' onChange={childvalucliked4} />
                                                                UMBRELLAS

                                                            </label>

                                                            {/* Add more sections for other parent values and their corresponding child buttons */}
                                                        </div>
                                                    </div>
                                                    <div className='datasinnerradio'>
                                                        <div className='datasradio'>
                                                            <label className='ytg7y'>
                                                                <input type="checkbox" id="elementdataa" value="Jewellery" checked={datas5.length > 0} onChange={(e) => setParent5Value(e.target.value)} />
                                                                JEWELLERY
                                                            </label>
                                                            <br />

                                                            {/* Add more parent buttons similarly */}
                                                        </div>

                                                        <div>

                                                            <div>
                                                                {/* Add  more child buttons similarly */}
                                                                <label id='ytg7y'>
                                                                    <input type="checkbox" checked={datas5.includes("Avant-Garde")} id="element" value="Avant-Garde" name='Jewellery' onChange={childvalucliked5} />
                                                                    AVANT-GARDE

                                                                </label>
                                                            </div>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Bangles")} id="element" value="Bangles" name='Jewellery' onChange={childvalucliked5} />
                                                                BANGLES

                                                            </label>

                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Bracelets")} id="element" value="Bracelets" name='Jewellery' onChange={childvalucliked5} />
                                                                BRACELETS

                                                            </label>


                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Body Jewellery")} id="element" value="Body Jewellery" name='Jewellery' onChange={childvalucliked5} />
                                                                BODY JEWELLERY

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Brooches")} id="element" value="Brooches" name='Jewellery' onChange={childvalucliked5} />
                                                                BROOCHES

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Cuffs")} id="element" value="Cuffs" name='Jewellery' onChange={childvalucliked5} />
                                                                CUFFS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Earrings")} id="element" value="Earrings" name='Jewellery' onChange={childvalucliked5} />
                                                                EARRINGS
                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Fine Jewellery")} id="element" value="Fine Jewellery" name='Jewellery' onChange={childvalucliked5} />
                                                                FINE JEWELLERY

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Necklaces")} id="element" value="Necklaces" name='Jewellery' onChange={childvalucliked5} />
                                                                NECKLACES

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Rings")} id="element" value="Rings" name='Jewellery' onChange={childvalucliked5} />
                                                                RINGS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Skulls & Studs")} id="element" value="Skulls & Studs" name='Jewellery' onChange={childvalucliked5} />
                                                                SKULLS & STUDS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas5.includes("Timepieces")} id="element" value="Timepieces" name='Jewellery' onChange={childvalucliked5} />
                                                                TIMEPIECES

                                                            </label>

                                                            {/* Add more sections for other parent values and their corresponding child buttons */}
                                                        </div>
                                                        <div className='datasradio' id='ghgfuby'>
                                                            <label className='ytg7y'>
                                                                <input type="checkbox" id="elementdataa" value="Footwear" checked={datas6.length > 0} onChange={(e) => setParent6Value(e.target.value)} />
                                                                FOOTWEAR
                                                            </label>
                                                            <br />

                                                            {/* Add more parent buttons similarly */}
                                                        </div>

                                                        <div>

                                                            <div>
                                                                {/* Add  more child buttons similarly */}
                                                                <label id='ytg7y'>
                                                                    <input type="checkbox" checked={datas6.includes("Boots")} name='Footwear' id="element" value="Boots" onChange={childvalucliked6} />
                                                                    BOOTS

                                                                </label>
                                                            </div>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox"  checked={datas6.includes("Casual")} id="element" value="Casual" name='Footwear' onChange={childvalucliked6} />
                                                                CASUAL

                                                            </label>

                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas6.includes("Flats")} id="element" value="Flats" name='Footwear' onChange={childvalucliked6} />
                                                                FLATS
                                                            </label>


                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas6.includes("Formal")} id="element" value="Formal" name='Footwear' onChange={childvalucliked6} />
                                                                FORMAL

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas6.includes("Heels")} id="element" value="Heels" name='Footwear' onChange={childvalucliked6} />
                                                                HEELS

                                                            </label>
                                                            <label id='ytg7y'>
                                                                <input type="checkbox" checked={datas6.includes("Sneakers")} id="element" value="Sneakers" name='Footwear' onChange={childvalucliked6} />
                                                                SNEAKERS

                                                            </label>

                                                            {/* Add more sections for other parent values and their corresponding child buttons */}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item" id="Accolast">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                            <button
                                                class="accordion-button collapsed"
                                                id="Acco122"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="flush-collapseThree"
                                            >
                                                04. Company Details
                                            </button>
                                        </h2>
                                        <div
                                            id="flush-collapseThree"
                                            class="accordion-collapse collapse"
                                            aria-labelledby="flush-headingThree"
                                            data-bs-parent="#accordionFlushExample1"
                                        >

                                            {/* <div className='yghvg'>
                                            <div className='tyfui'>
                                                <input placeholder='Label Name' /><br />
                                                <input placeholder='Designer Name' /><br />
                                                <input placeholder='Website' /><br />
                                                <input placeholder='Drop Link of image files' />
                                            </div>
                                            <div className='tyfui' id='tffgyhj'>
                                                <p>Image/logo</p>
                                                <div data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='ytdf7iy'>+</div>
                                                <div  data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='ytgivyu'>ADD IMAGE +</div>
                                            </div>
                                        </div> */}
                                            <div className='strjkhgkhn'>Stores</div>

                                            <p className='tryugh'>Add your online store link and Offline store address</p>
                                            <div className='strjkhgkhn'>Online Stores</div>
                                            <div class="datascollection" id='htfgj' >
                                                <div className='uygfuy'
                                                ><input name='store' onChange={e => setstore(e.target.value)}
                                                    value={store} type='text' placeholder='Name of the store' />
                                                    <p className='htytrf' onClick={increment1}>+</p>
                                                </div>
                                                <input name='storelink' onChange={e => setstorelink(e.target.value)}
                                                    value={storelink} type='text' placeholder='Store link' />

                                                {
                                                    countt === 1 && <>
                                                        <input name='store1' onChange={e => setstore1(e.target.value)}
                                                            value={store1} type='text' placeholder='Name of the store' />
                                                        <input name='storelink1' onChange={e => setstorelink1(e.target.value)}
                                                            value={storelink1} type='text' placeholder='Store link' />
                                                    </>

                                                }
                                                {
                                                    countt1 === 2 && <>
                                                        <input name='store2' onChange={e => setstore2(e.target.value)}
                                                            value={store2} type='text' placeholder='Name of the store' />
                                                        <input name='storelink2' onChange={e => setstorelink2(e.target.value)}
                                                            value={storelink2} type='text' placeholder='Store link' />
                                                    </>

                                                }
                                                {
                                                    countt2 === 3 && <>
                                                        <input name='store3' onChange={e => setstore3(e.target.value)}
                                                            value={store3} type='text' placeholder='Name of the store' />
                                                        <input name='storelink3' onChange={e => setstorelink3(e.target.value)}
                                                            value={storelink3} type='text' placeholder='Store link' />
                                                    </>

                                                }

                                                {/* <input placeholder='Name of the store' />
                                            <input placeholder='Store link' />
                                            <input placeholder='Name of the store' />
                                            <input placeholder='Store link' />
                                            <input placeholder='Name of the store' />
                                            <input placeholder='Store link' /> */}
                                            </div>
                                            <div className='strjkhgkhn'>Offline Stores</div>
                                            <div class="datascollection" id='htfgj' >

                                                <div className='uygfuy'
                                                ><input name='city' onChange={e => setcity(e.target.value)}
                                                    value={city} type='text' placeholder='City/Town' />
                                                    <p className='htytrf' onClick={increment2}>+</p>
                                                </div>
                                                <input name='citylink' onChange={e => setcitylink(e.target.value)}
                                                    value={citylink} type='text' placeholder='Address' />

                                                {
                                                    counttl === 1 && <>
                                                        <input name='city1' onChange={e => setcity1(e.target.value)}
                                                            value={city1} type='text' placeholder='City/Town' />
                                                        <input name='citylink1' onChange={e => setcitylink1(e.target.value)}
                                                            value={citylink1} type='text' placeholder='Address' />
                                                    </>

                                                }
                                                {
                                                    counttl1 === 2 && <>
                                                        <input name='city2' onChange={e => setcity2(e.target.value)}
                                                            value={city2} type='text' placeholder='City/Town' />
                                                        <input name='citylink2' onChange={e => setcitylink2(e.target.value)}
                                                            value={citylink2} type='text' placeholder='Address' />
                                                    </>

                                                }
                                                {
                                                    counttl2 === 3 && <>
                                                        <input name='city3' onChange={e => setcity3(e.target.value)}
                                                            value={city3} type='text' placeholder='City/Town' />
                                                        <input name='citylink3' onChange={e => setcitylink3(e.target.value)}
                                                            value={citylink3} type='text' placeholder='Address' />
                                                    </>

                                                }
                                                {/* <input placeholder='City/Town' />
                                            <input placeholder='Address' />
                                            <input placeholder='City/Town' />
                                            <input placeholder='Address' />
                                            <input placeholder='City/Town' />
                                            <input placeholder='Address' /> */}

                                            </div>
                                            <div className='strjkhgkhn'>Gallery</div>
                                            <div id='yuig' data-bs-toggle="modal" href="#exampleModalToggle" role="button" className='ytgivyu'>ADD IMAGE +</div>

                                        </div>
                                    </div>


                                </div>


                                <div className='ytfugh'>
                                    <span>NOTE:</span> At odio feugiat lobortis feugiat. Porttitor eget phasellus urna lorem tortor. Hendrerit lobortis convallis amet convallis sed.
                                </div>


                                <div className='tyugihjok'>
                                    <button type='submit' disabled={loading} className='tdrfguhj'  >
                                        SAVE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>


            </div>
            <div>


            </div>
            <Footer />
        </>
    )
}

export default LoginDesingerUpdate
