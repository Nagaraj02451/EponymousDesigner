import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
import "../styles/Designers.css"
import ProductSearch from "./product/ProductSearch";
// import Search from "./layouts/Search";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
export default function Designers() {
    const dispatch = useDispatch();
    const { products, loading, error , productsCount } = useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
    console.log(productsCount ,"start");

    useEffect(() => {
        if (error) {
            return toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(null, null, null, null, currentPage))
    }, [error, dispatch, currentPage])


    return (
        <Fragment>
     

        <div>
        <MetaData title={'Designers'} />
            <Header />
            <div className='headerlogin'>
                <div className='innerlogin'>HOME/ ALL DESINGERS</div>

            </div>


<ProductSearch />
    



            {loading ? <Loader /> :
                <>

                    <div className="productitteams">
                        <div className="innerproductiteam">


                            <div className="productiteamone">

                                {/* <Search /> */}
                                {products && products.map(product => (
                                    <>
                                           {
                                            product.status === "success" &&   <Product key={product._id} product={product} />
                                           }
                                      
                                    </>
                                ))}
                                {
                                    productsCount === 0 &&   <div className="uytg7u">
                                    No designers are here........
                                    </div>
                                }
                              
                            </div>

                            {/* {productsCount > 0 && productsCount > resPerPage ?
                                <div className="d-flex justify-content-center mt-5">
                                    <Pagination
                                        activePage={currentPage}
                                        onChange={setCurrentPageNo}
                                        totalItemsCount={productsCount}
                                        itemsCountPerPage={resPerPage}
                                        nextPageText={'Next'}
                                        firstPageText={'First'}
                                        lastPageText={'Last'}
                                        itemClass={'page-item'}
                                        linkClass={'page-link'}
                                    />
                                </div> : null} */}
                        </div>
                    </div>
                </>
            }
        </div>
        <Footer />
        </Fragment>
    )
}
