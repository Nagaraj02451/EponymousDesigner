import { Fragment, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { createReview, getProduct } from "../../actions/productActions"
// import { getProduct } from "../../actions/productActions"
import { clearReviewSubmitted, clearError, clearProduct } from '../../slices/productSlice';
import Loader from '../layouts/Loader';
import MetaData from "../layouts/MetaData";
import "../../styles/Designers.css"
import { toast } from "react-toastify";
import { addCartItem } from "../../actions/cartActions";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [third, setthird] = useState(["Profile"])
  const genius = useRef()

  const { loading, product = {}, error } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams()
  console.log(product.images, "hytutui");


  useEffect(() => {

    if (error) {
      console.log(error);

      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: 'error',
        onOpen: () => { dispatch(clearError()) }
      })
      return
    }
    if (!product._id) {
      dispatch(getProduct(id))
      dispatch(getProduct(id))
    }

    return () => {
      dispatch(clearProduct())
    }


  }, [dispatch, id, error])



  const [state, setstate] = useState({
    title: "Profile",
    des: "one",
    firstpara: "Raw Mango draws from the colors, philosophies and cultures of India to create a unique voice, questioning place and perspective through design. With roots in craft and community, Raw Mango’s relationship with handloom began in 2008 as an investigation of possibilities. As a design house it continues to create new conversations in textile and culture through a range of saris, garments and objects. Created with karigars across Rajasthan, Madhya Pradesh, West Bengal and Varanasi, Raw Mango’s designs innovate upon century old skills, in pursuit of defining a new aesthetic vocabulary.",
    secondpara: "Sanjay Garg emerged from an upbringing in the village of Mubarikpur, Rajasthan. As a student of textile design, he developed his unique language in 2008, working in Chanderi, Madhya Pradesh. Garg undertook innovations within the yarn and weaving process to create a new visual vocabulary and weaving interventions which, over a decade later, visually define Chanderi today.",
    thirdpara: "A commitment to experimentation underpins his process, with further explorations in Mashru, Benarasi and Ikat. Always informed by India, Garg constantly engages with established rubric to imagine new possibilities."
  })
  const datas = [
    {
      title: "Profile",
      des: "one",
      firstpara: "Aliquam feugiat velit mauris dolor hendrerit. Integer fames et enim tortor. Ultricies interdum tempus aliquam consequat enim id elementum nulla. Mauris orci quisque risus nulla praesent tincidunt lectus. Scelerisque lorem platea dui ut lacinia amet convallis sodales dignissim. Id sem enim consectetur viverra viverra turpis. Mattis velit convallis morbi maecenas penatibus. ",
      secondpara: "Ut nulla nibh sed maecenas ante in. Nisi fames cursus etiam viverra. Lectus morbi molestie lobortis libero id natoque. Faucibus cras sit ut diam libero donec in est egestas.",
      thirdpara: "At et sed sit viverra feugiat sodales maecenas gravida. Ipsum risus laoreet phasellus tellus condimentum scelerisque sed fermentum. Tortor aliquam.",
      fourpara: "- Formal events"

    },
    {
      title: "Specialisation",
      des: "two",
      firstpara: " Raw Mango focuses on handwoven textiles, particularly Chanderi, Mashru, and Brocade.",
      secondpara: " The brand offers a wide range of clothing for women, including sarees, lehengas, dresses, and separates",
      thirdpara: " Raw Mango also has a line of accessories like scarves, stoles, and bags.",
      fourpara: " The brand has recently expanded into home décor, with a collection of textiles and tableware."

    },
    {
      title: "Occasion",
      des: "three",
      firstpara: "- Everyday wear",
      secondpara: "- Festive wear",
      thirdpara: "- Wedding wear",
      fourpara: "- Formal events"
    },
    {
      title: "Category",
      des: "three",
      firstpara: "- Women's clothing (saris, dresses, separates)",
      secondpara: "- Accessories (stoles, scarves, jewelry)",
      thirdpara: "- Home décor (bed linens, cushions)",
      fourpara: "- Formal events"

    },
    {
      title: "Stores",
      des: "four",
      firstpara: "Online Store",
      secondpara: "Offline Store",
      // thirdpara : "Category 03",
      fouthpara: "Lacus vitae lorem sit ipsum ",
      fithpara: "Lacus vitae lorem sit ipsum "

    },
    {
      title: "Gallery",
      des: "five"
    }

  ];

  const clikeddatas = (datas) => {
    setstate(datas);
    genius.current.classList.remove("ytfjg")

  };



  return (
    <>
      <Header />
      {loading ? <Loader /> :
        <>
          <MetaData title={product.name} />
          <div className='headerlogin'>
            <div className='innerlogin'>HOME/DESIGNERS/{product.name}</div>
          </div>
          <div className="innerlogin22" id="sidecontent">HOME/DESIGNERS/{product.name}</div>

          <div className="save">
            <button type="button" id="cart_btn"
              disabled={product.stock == 0 ? true : false}
              onClick={() => {
                dispatch(addCartItem(product._id, quantity))
                toast('Saved succesfully', {
                  type: 'success',
                  position: toast.POSITION.BOTTOM_CENTER
                })
              }}
              className="hgfctuyc"
            ></button>
            <img className="sharevh" src="/images/share.svg" alt="share" />


          </div>
          <div className="Singledesginerpage">

            <div className="innersingle">

              <div className="headingsingle">
                <div className="yuf7i" id="mobileok">
                  <h1 className="namesin">{product.name}</h1>
                  <p className="namepara">Designer: {product.designer}</p>
                  <div className="sigekbyg">
                    <p id="ftyghj">Labels</p>

                    <a id="hhbnvhj" href={product.lablelink}> <p>{product.lable}</p></a>
                    <a id="hhbnvhj" href={product.lablelink1}> <p>{product.lable1}</p></a>
                    <a id="hhbnvhj" href={product.lablelink2}> <p>{product.lable2}</p></a>
                    <a id="hhbnvhj" href={product.lablelink3}> <p>{product.lable3}</p></a>

                  </div>
                <div className="ytghjfjgyukj">
                <div id='fijhguykeld' >
                     {/* <img src='/images/li.svg' alt="footer" /> */}
                   <a href={product.x}>  <img src='/images/x.svg' alt="footer" /></a>
                   <a href={product.instagram}>  <img src='/images/ins.svg' alt="footer" /></a>
                   <a href={product.facebook}> <img src='/images/face.svg' alt="footer" /></a>
                 </div>
                </div>
                </div>
                <div className="yuf7iimage">
                  <div className="imagesingke">

                    <div className="imagesingke">

                      {product.images &&
                        <img src={product.images[0].image}
                          alt={product.name} />
                      }

                    </div>

                  </div>
                </div>

                <div className="yuf7i" id="mobileokmob">
                  <h1 className="namesin">{product.name}</h1>
                  <p className="namepara">Quis non id sapien</p>
                </div>

                <div className="yuf7i" id="lgiuoh">
                  <div className="lgiuoh">
                    <div>
                      Head Office
                      <p id="tfiyug">{product.office}</p>
                    </div>
                  </div>
                  <div className="lgiuoh">
                    <div>
                      Established in
                      <p id="tfiyug">{product.estadate}</p>
                    </div>
                  </div>
                  <div>
                    <p>{product.address}</p>
                  </div>
                </div>

              </div>

              <div className="linoppp"></div>



              <div className="tyyfvytf">
                <div className="innersta">
                  {datas.map((iteam) => {
                    let spanClass = third.includes(iteam.title) ? 'spanlist' : 'fro';

                    return (
                      <>
                        <div key={iteam.title} onClick={() => clikeddatas(iteam)}>
                          {/* <h1 className={spanClass}  onClick={(e)=>setthird(e.target.value)}>{}</h1> */}
                          <input type='text' className={spanClass} value={iteam.title} onClick={(e) => setthird(e.target.value)} readOnly />

                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="innerright">
                  {
                    state.title === "Profile" ? <div>
                      <p>{product.profile}</p>
                      {/* <h2 className="tyrdufguib">SANJAY GARG</h2> */}
                      {/* <p className="hgcvyg">{state.secondpara}</p>
                        <p>{state.thirdpara}</p> */}
                    </div> : ""
                  }
                  {
                    state.title === "Specialisation" ? <div>
                   <p>
                        {
                          product.special && <p><span className="gdfy">- {product.special} :</span> {product.specialpara}  </p> 
                        }
                        </p>
                   <p>
                        {
                          product.special1 && <p><span className="gdfy">- {product.special1} :</span> {product.specialpara1}  </p> 
                        }
                        </p>
                   <p>
                        {
                          product.special2 && <p><span className="gdfy">- {product.special2} :</span> {product.specialpara2}  </p> 
                        }
                        </p>
                   <p>
                        {
                          product.special3 && <p><span className="gdfy">- {product.special3} :</span> {product.specialpara3}  </p> 
                        }
                        </p>
                   <p>
                        {
                          product.special4 && <p><span className="gdfy">- {product.special4} :</span> {product.specialpara4}  </p> 
                        }
                        </p>
             
               
                    </div> : ""
                  }
                  {
                    state.title === "Occasion" ? <div>
                      <p>{state.firstpara}</p>
                      <p>{state.secondpara}</p>
                      <p>{state.thirdpara}</p>
                      <p>{state.fourpara}</p>
                    </div> : ""
                  }
                  {
                    state.title === "Category" ? <div>
                      <p>
                        {
                          product.women && <p>- {product.women}  ( {product.womendatas} ) </p>
                        }
                      </p>
                      <p>
                        {
                          product.men && <p>- {product.men}  ( {product.mendatas} ) </p>
                        }
                      </p>
                      <p>
                        {
                          product.child && <p>- {product.child}  ( {product.childdatas} ) </p>
                        }
                      </p>
                      <p>
                        {
                          product.access && <p>- {product.access}  ( {product.accessdatas} ) </p>
                        }
                      </p>
                      <p>
                        {
                          product.jewell && <p>- {product.jewell}  ( {product.jewelldatas} ) </p>
                        }
                      </p>
                      <p>
                        {
                          product.foot && <p>- {product.foot}  ( {product.footdatas} ) </p>
                        }
                      </p>
                   
                    </div> : ""
                  }
                  {
                    state.title === "Stores" ? <div className="innerright2">
                      <div className="leftnj1">
                        <p className="ordersl"><b>{state.firstpara}</b></p>
                        <div className="line"></div>
                        {
                          product.store &&  <a id="hhbnvhj" href={product.storelink}> <p className="yugfhb" id="address"><b>{product.store}</b></p></a>
                        }
                        {
                          product.store1 &&  <a id="hhbnvhj" href={product.storelink1}> <p className="yugfhb" id="address"><b>{product.store1}</b></p></a>
                        }
                        {
                          product.store2 &&  <a id="hhbnvhj" href={product.storelink2}> <p className="yugfhb" id="address"><b>{product.store2}</b></p></a>
                        }
                        {
                          product.store3 &&  <a id="hhbnvhj" href={product.storelink3}> <p className="yugfhb" id="address"><b>{product.store3}</b></p></a>
                        }
                        

                      </div>
                      <div className="midline" id="ghyjfyg"></div>
                      <div className="leftnj">
                        <p className="ordersl"><b>{state.secondpara}</b></p>
                        <div className="line"></div>
                        {
                          product.city && <a id="hhbnvhj" href={product.citylink}> <p className="yugfhb" id="address"><b>{product.city}</b></p></a>
                        }
                        {
                          product.city1 && <a id="hhbnvhj" href={product.citylink1}> <p className="yugfhb" id="address"><b>{product.city1}</b></p></a>
                        }
                        {
                          product.city2 && <a id="hhbnvhj" href={product.citylink2}> <p className="yugfhb" id="address"><b>{product.city2}</b></p></a>
                        }
                        {
                          product.city3 && <a id="hhbnvhj" href={product.citylink3}> <p className="yugfhb" id="address"><b>{product.city3}</b></p></a>
                        }
            
                 </div>
                    </div> : ""
                  }


                  {
                    state.title === "Gallery" ? <div className="hyjhtigu">
                      {product.images && product.images[1] ?
                        <img src={product.images[1].image}
                          alt={product.name} /> : ""
                      }
                      {product.images && product.images[2] ?
                        <img src={product.images[2].image}
                          alt={product.name} /> : ""
                      }
                      {product.images && product.images[3] ?
                        <img src={product.images[3].image}
                          alt={product.name} /> : ""
                      }
                      {product.images && product.images[4] ?
                        <img src={product.images[4].image}
                          alt={product.name} /> : ""
                      }


                    </div> : ""
                  }


                </div>


              </div>
              <div className="linoppp"></div>

            </div>

          </div>
          <Footer />

        </>}
    </>
  )
}
