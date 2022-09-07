import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userData, logOut } from '../../containers/User/userSlice';


const Header = () => {
    const credenciales = useSelector(userData);

    let navigate = useNavigate();
    const dispatch = useDispatch();


    const cerrarSesion = () => {
        navigate("/");
        dispatch(logOut());
    }
     return (
         <div className='font-sans bg-orange-400 text-black ml-2 mr-2 mt-2 rounded-lg border-b border-orange-600'>
            <nav className=''>
                <div className="container mx-auto flex items-end justify-between px-4 py-6">
                    <div className='cursor-pointer flex items-center' onClick={() => navigate("/")}>
                        <div className="text-2xl font-bold">z-snkrs</div>
                    </div>
                    <ul className="flex items-center cursor-pointer">
                        <li>
                            Products
                        </li>
                        <li className='ml-8'>
                            Incoming
                        </li>
                        <li className='ml-8'>
                            About us
                        </li>
                        <li className='ml-8'>
                            Contact
                        </li>
                    </ul>
                    {!credenciales.user_role ?
                        <ul  className="flex items-center">
                            <li className='cursor-pointer' onClick={() => navigate("/login")}>
                                Login
                            </li>
                            <li className='ml-12 cursor-pointer' onClick={() => navigate("/register")}>
                                Register
                            </li>
                        </ul>
                    :
                        <ul className="flex items-center">
                            {credenciales.user_role==='admin' ?
                                <li className='ml-16'>
                                    <div className='textLink cursor-pointer' onClick={() => navigate("/adminpanel")}>Admin</div>
                                </li>
                            : <p></p>
                            }
                            <li className='ml-16'>
                                <div className='textLink cursor-pointer' onClick={() => navigate("/profile")}>Profile</div>
                            </li>
                            <li className='ml-16'>
                                <div className='textLink cursor-pointer' onClick={() => cerrarSesion()}>Log out</div>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
         </div>
     )
}
export default Header;