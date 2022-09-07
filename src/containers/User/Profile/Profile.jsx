import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { userData, deleteUser } from '../userSlice';

const Profile = () => {

    //Me genero una variable que va a LEER de Redux
    const datosUsuario = useSelector(userData);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const eliminarUsuario = () => {
        dispatch(deleteUser(datosUsuario));
        navigate("/");
    }

    return (
        <div className="flex flex-row gap-9 h-5/6 justify-center">
            <div>
                <label className="block font-bold md:text-top mt-16 pr-4">Name</label>
                <label className="block font-bold md:text-top mt-16 pr-4">Surname</label>
                <label className="block font-bold md:text-top mt-16 pr-4">Phone</label>
                <label className="block font-bold md:text-top mt-16 pr-4">Address</label>
                <label className="block font-bold md:text-top mt-16 pr-4">Email</label>
                <div className="flex gap-9 items-center justify-center mt-12">
                    <div className="block h-12 w-64 mt-6 bg-orange-400 hover:bg-orange-500 cursor-pointer text-black font-bold py-2 px-4 rounded" onClick={() => navigate('/update')}>Update profile</div>
                </div>
            </div>
            <div>
                <p className="block text-orange-800 font-bold md:text-top mt-16 pr-4">{datosUsuario.user_name}</p>
                <p className="block text-orange-800 font-bold md:text-top mt-16 pr-4">{datosUsuario.user_surname}</p>
                <p className="block text-orange-800 font-bold md:text-top mt-16 pr-4">{datosUsuario.user_phone}</p>
                <p className="block text-orange-800 font-bold md:text-top mt-16 pr-4">{datosUsuario.user_address}</p>
                <p className="block text-orange-800 font-bold md:text-top mt-16 pr-4">{datosUsuario.user_email}</p>
                

                <div className="flex  gap-9 items-center justify-center mt-12">
                    <div className="block h-12 w-64 mt-6 bg-red-700 hover:bg-red-800 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={() => eliminarUsuario()}>Delete account</div>
                </div>
            </div> 
        </div>

    )
}
export default Profile; 