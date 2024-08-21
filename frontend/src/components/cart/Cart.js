import { Fragment } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Link} from 'react-router-dom';
import {removeItemFromCart } from '../../slices/cartSlice';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

export default function Cart() {
    const {items } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
 
    return (
        <Fragment>
            <Header />
            {items.length===0 ? 
              <div className='jtf7iyub'>
                <div className='innercard' id='jyhghb'>
                Saved items is Empty
                </div>
              </div>
                 :
                <Fragment>
                     <div className='jtf7iyub'>
                <div className='innercard' id='jyhghb'>
                Saved : <b>{items.length} items</b>

                <div id="uygh">
                <div className="producgug">
                    <div className="datasprodu">
                            {items.map(item => (
                                <Fragment key={item.product}>

                            <img
                                className="imageprod"
                                src={item.image}
                                alt={item.name}
                            />
                        <div className="datsprogu">
                            <div>
                                <p>{item.description}</p>
                                <h5 >
                                    <Link to={`/alldesigners/${item._id}`}>{item.name}</Link>
                                </h5>
                                {/* <div className='lineprodict'></div> */}
                                <p >{item.seller}</p>
                                {/* <div className='lineprodict'></div> */}

                                <div className='onelastview'>
                                <Link to={`/alldesigners/${item.product}`} className="view_btn"><p>View Products<img alt="epo" id='imageslop' src='/images/arrow.svg' /></p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="remove">
                    <div onClick={() => dispatch(removeItemFromCart(item.product))} >Remove</div>
                                            </div>
                                </Fragment>

                                
                                )
                            )
                            }

                         
                            {/* <hr /> */}
                        </div>

                       
                    </div>
                    </div>
                </div>
              </div>
                </Fragment>
            }
                     <Footer />
           
        </Fragment>
    )
}
