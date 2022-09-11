import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
    let navigate = useNavigate();
     return (
         <div className=''>
            <div className='mt-8'>
                Z-SNKRS - Your online shop for sneakers
            </div>
            <div className='mt-8 mr-16 ml-16'>
                {/* Link promo */}
                <img  className="cursor-pointer" onClick={() => navigate("/productsPromo")} src="https://www.thesneakerone.com/img/cms/2022/8agosto/FA22_VANS_X_STRANGERTHINGS_Desktop-Hero_1390x556_Women.jpg" alt="" />
            </div>
            <div className='mt-8'>
                Check out our new collection of Vans featuring Stranger Things, out now!
            </div>
         </div>
     )
}
export default Home;