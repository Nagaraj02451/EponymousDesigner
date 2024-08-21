import { Link } from 'react-router-dom';
import Header from './layouts/Header';
// import "../../styles/Designers.css"
// import Header from '../layouts/Header';
export default function Resource() {
    return (
        <>
<Header />
<div className='headerlogin'>
                <div className='innerlogin'>HOME/ RESOURCES</div>
                
            </div>
<div className="productitteams">
                        <div className="innerproductiteam">
                        <div>
                                    <div>E-book</div>
                                    <div className='utyghu'></div>
                                    {/* <br /> */}
                                </div>
                                <br />

                            <div className="productiteamone">
                             
            <div id="uygh">
          
                
                            <img
                            alt="epo"
                                className="imageprod"
                            src='/images/1.jpg'
                            />
                        <div className="datsprogu">
                            <div>
                                <div className='uyfguhgf' >
                                <span>Surya</span>
                                <br/>
                                <Link to={`/alldesigners`}>surya</Link>
                                </div>
                                <div className='lineprodict'></div>
                                <div className='iuyhgf7y6u8ig'>
                                <span className='areapoop'>From</span> surya
                                </div>
                                <div className='lineprodict'></div>

                                <div className='onelastview'>
                                <Link to={`/alldesigners`} className="view_btn"><div className='ytdftyui'><b>View Products</b><img alt="epo" id='imageslop' src='/images/arrow.svg' /></div></Link>
                                </div>
                            </div>
                        </div>
                        </div>
            <div id="uygh">
          
                
                            <img
                             alt="epo"
                                className="imageprod"
                            src='/images/1.jpg'
                            />
                        <div className="datsprogu">
                            <div>
                                <div className='uyfguhgf' >
                                <span>Surya</span>
                                <br/>
                                <Link to={`/alldesigners`}>surya</Link>
                                </div>
                                <div className='lineprodict'></div>
                                <div className='iuyhgf7y6u8ig'>
                                <span className='areapoop'>From</span> surya
                                </div>
                                <div className='lineprodict'></div>

                                <div className='onelastview'>
                                <Link to={`/alldesigners`} className="view_btn"><div className='ytdftyui'><b>View Products</b><img alt='hgv' id='imageslop' src='/images/arrow.svg' /></div></Link>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
     
        </>

    )
}
