import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
import { toast } from 'react-toastify';
import "../styles/Designers.css"
// import ProductSearch from "./product/ProductSearch";
// import Search from "./layouts/Search";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import DesinerLoginData from "./DesinerLoginData";
export default function DesignerSignlePage() {
  const { user } = useSelector(state => state.authState);
  const dispatch = useDispatch();
  const { products, loading, error , productsCount } = useSelector((state) => state.productsState)
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
    dispatch(getProducts(null, null, null, null, currentPage))
  }, [error, dispatch, currentPage])

  useEffect(() => {
    if (user && products) {
      const filtered = products.filter(product => product.email === user.email);
      setFilteredProducts(filtered);
    }
  }, [user, products]);


  return (
<Fragment>
      <div>
        <MetaData title={'Designers'} />
        <Header />
        {loading ? <Loader /> :
          <>
            {filteredProducts && filteredProducts.map(product => (
              <>
                <DesinerLoginData key={product._id} product={product} />
              </>
            ))}
          </>
        }
      </div>
      <Footer />
    </Fragment>
  )
}
