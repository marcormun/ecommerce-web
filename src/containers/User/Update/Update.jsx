import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { userData, updateUser } from '../userSlice';

const Update = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [perfilUsuario, setPerfilUsuario] = useState({
        user_name: datosUsuario.user_name,
        user_surname: datosUsuario.user_surname,
        user_phone: datosUsuario.user_phone,
        user_address: datosUsuario.user_address,
        user_email: datosUsuario.user_email,
        user_token: datosUsuario.user_token

    })

    const handlerInputs = (e) => {
        console.log("target", e.target.value)
        setPerfilUsuario({ ...perfilUsuario, [e.target.name]: e.target.value })
        console.log("perfil usuario update", perfilUsuario);

    }

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (datosUsuario.token === "") {
            navigate('/')
        }
    })

    return (
        <div className="flex flex-row gap-9 h-5/6 justify-center">
            <div>
                <label className="block font-bold md:text-top mt-16 pr-4">Name</label>
                <label className="block font-bold md:text-top mt-16 pr-4">Surname</label>
                <label className="block font-bold md:text-top mt-16 pr-4">Phone</label>
                <label className="block font-bold md:text-top mt-16 pr-4">Address</label>
                <label className="block font-bold md:text-top mt-16 pr-4">Email</label>
                <div className="flex gap-9 items-center justify-center mt-12">
                    <div className="block h-12 w-64 mt-6 bg-orange-400 hover:bg-orange-500 cursor-pointer text-black font-bold py-2 px-4 rounded" onClick={() => navigate('/profile')}>Go back</div>
                </div>
            </div>
            <div>
            <input type="text" className="block rounded font-bold text-orange-800  md:text-top mt-16 pr-4 text-center ml-4 bg-gray-400" value={perfilUsuario.user_name} name='user_name' title='user_name' disabled></input>
            <input type="text" className="block rounded font-bold text-orange-800  md:text-top mt-16 pr-4 text-center ml-4 bg-gray-400" value={perfilUsuario.user_surname} name='user_surname' title='user_surname' disabled onChange={handlerInputs}></input>
            <input type="text" className="block rounded font-bold text-orange-800  md:text-top mt-16 pr-4 text-center ml-4 bg-gray-400" value={perfilUsuario.user_phone} name='user_phone' title='user_phone' disabled onChange={handlerInputs}></input>
            <input type="text" className="block rounded font-bold text-orange-800  md:text-top mt-16 pr-4 text-center ml-4 bg-gray-100" value={perfilUsuario.user_address} name='user_address' title='user_address' onChange={handlerInputs}></input>
            <input type="text" className="block rounded font-bold text-orange-800  md:text-top mt-16 pr-4 text-center ml-4 bg-gray-400" value={perfilUsuario.user_email} name='user_email' title='user_email' disabled onChange={handlerInputs}></input>                

                <div className="flex  gap-9 items-center justify-center mt-12">
                    <div className="block h-12 w-64 mt-6 bg-red-700 hover:bg-red-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(updateUser(datosUsuario, perfilUsuario))}>Save</div>
                </div>
            </div> 
        </div>
    )
}
export default Update; 