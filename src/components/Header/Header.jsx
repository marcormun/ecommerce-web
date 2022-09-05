import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userData, logOut } from '../../containers/User/userSlice';


const Header = () => {
    // const credenciales = useSelector(userData);

    // let navegador = useNavigate();
    // const dispatch = useDispatch();

    // const viajar = (destino) => {
    //     navegador(destino)
    // };

    // const cerrarSesion = () => {
    //     dispatch(logOut());
    //     viajar("/");
    // }
     return (
         <div className='font-sans bg-orange-400 text-black'>
            <nav className='border-b border-orange-600'>
                <div className="container mx-auto flex items-end justify-between px-4 py-6">
                    <div className='cursor-pointer flex items-center'>
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
                    <ul  className="flex items-center">
                        <li className='cursor-pointer'>
                            Login
                        </li>
                        <li className='ml-12 cursor-pointer'>
                            Register
                        </li>
                    </ul>
                </div>
            </nav>
         </div>
     )
}
export default Header;