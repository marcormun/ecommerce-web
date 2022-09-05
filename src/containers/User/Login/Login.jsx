import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userData} from "../userSlice";

const Login = () => {

     return (
         <div className='mt-16 flex flex-col content-center items-center align-middle h-128 w-64 ml-auto mr-auto'>
            <label className="block h-12 text-gray-500 font-bold md:text-top mt-6 pr-4">Correo</label>
            <input type='email' className="w-64 h-12 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" 
                name='email' title='email' lenght='30'/>
            <label className="block h-12 text-gray-500 font-bold md:text-top mt-6 pr-4">Contraseña</label>
            <input  className="w-64 h-12 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700"
                type='password'  name='password' title='password'  lenght='30'/>
            <div className="content-center h-12 w-64 mt-6 bg-orange-500 hover:bg-orange-400 cursor-pointer text-white font-bold py-2 px-4 rounded">Login</div>
            <div className='mt-2'></div>
         </div>
         
     )
}
export default Login;