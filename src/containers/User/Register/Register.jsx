import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Register = (props) => {

    //Hooks

    const [datosUser, setDatosUser] = useState({
        name: "",
        surname: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        password2: "",
    });

    const [msgError, setMsgError] = useState("");

    const [congratulations, setCongratulations] = useState("");

    //Variables
    let navigate = useNavigate();

    //Handlers
    const updateUserData = (e) => {
        setDatosUser({ ...datosUser, [e.target.name]: e.target.value })
    }

    //Funciones del componente (useEffect)

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    })

    //Funciones

    const Register = async () => {

        //Primero, comprobación de campos vacíos
        console.log(datosUser);
        let mandatory = ['name', 'surname', 'phone', 'address', 'email', 'password', 'password2'];

        for (let field of mandatory) {
            if (datosUser[field] === '') {
                setMsgError(`Missing ${[field]} field`);
                return;
            }
        }

        //Comprobamos que el password esté repetido correctamente

        if (datosUser.password !== datosUser.password2) {
            setMsgError("Both password must be the same");
            return;
        }

        if (! /[\d()+-]/g.test(datosUser.password) ) {
            
            setMsgError('Introduce un password válido');
            return;
        };

        //Limpiamos error
        setMsgError(false);

        try {

            //axios....comunicamos con el backend

            let resultado = await axios.post("https://videoclub-proyecto5.herokuapp.com/api/auth/register", datosUser);

            console.log(resultado)

            setCongratulations(true);

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error){
            console.log(error)
        }
    }


    if (congratulations === true) {

        return (
            <div className="registerDesign">
                Welcome to Z-SNKRS, {datosUser.name}....
            </div>
        )

    } else {


        console.log(datosUser);
        return (
            <div className='h-124 mt-8 flex flex-column align-middle justify-center items-center'>
                <div className="grid grid-cols-2 gap-9">
                    <label className="block font-bold md:text-center mt-3 mb-3 pr-4">Name</label>
                    <input className="w-64 border-2 border-black-100 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='text' name='name' title='name' onChange={updateUserData} lenght='30' placeholder='name' />
                    
                    <label className="block font-bold md:text-top mt-3 mb-3 pr-4">Surname</label>
                    <input className="w-64 border-2 border-black-100 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='text' name='surname' title='surname' onChange={updateUserData} lenght='30' placeholder='surname' />
                    
                    <label className="block font-bold md:text-top mt-3 mb-3 pr-4">Phone</label>
                    <input className="w-64 border-2 border-black-100 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='text' name='phone' title='phone' onChange={updateUserData} lenght='30' placeholder='phone' />
                    
                    <label className="block font-bold md:text-top mt-3 mb-3 pr-4">Address</label>
                    <input className="w-64 border-2 border-black-100 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='text' name='address' title='address' onChange={updateUserData} lenght='30' placeholder='address' />

                    <label className="block font-bold md:text-top mt-3 mb-3 pr-4">Email</label>
                    <input className="w-64 border-2 border-black-100 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='text' name='email' title='email' onChange={updateUserData} lenght='30' placeholder='email' />
                    
                    <label className="block font-bold md:text-top mt-3 mb-3 pr-4">Password</label>
                    <input className="w-64 border-2 border-black-100 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='password' name='password' title='password' onChange={updateUserData} lenght='30' placeholder='password' />
                    
                    <label className="block font-bold md:text-top mt-3 mb-3 pr-4">Repeat password</label>
                    <input className="w-64 border-2 border-black-100 rounded py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-700" type='password' name='password2' title='password2' onChange={updateUserData} lenght='30' placeholder='password' />

                    <div></div>

                    <div className=" w-64 mt-2 mb-2 bg-orange-400 hover:bg-orange-500 cursor-pointer text-black font-bold py-2 px-4 rounded" onClick={() => Register()}>
                    Register
                    </div>  
                </div>

                {/* En este div estamos mostrando el contenido del hook msgError, ese contenido a priori siempre son comillas vacías
                pero cuando ocurra algún error, setearemos el hook y entonces se recargará el componente y este mensaje se mostrará */}
                <div className="designMessageError">
                    {msgError}
                </div>

                {/* Siempre que tengamos botones en un return, les incluyo un callback antes de la funcion
                ya que en caso contrario, siempre se ejecutarán la primera vez que se cargue el container/componente
                y no cuando yo haga click que es lo que quiero */}
                
            </div>
            

        )
    }

}
export default Register;