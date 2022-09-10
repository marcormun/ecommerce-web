import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { takeData } from './detailSlice'; 
import axios from 'axios';
import moment from 'moment';

const ProductDetail = () => {
    const [pedido, setPedido] =useState();
    let detallesProducto = useSelector(takeData);
    let credenciales = useSelector(userData);
    let navigate = useNavigate();

    const hacerPedido = async () => {
        let orderDate = moment().format('YYYY-MM-DD');
        if(!credenciales.user_role){
            navigate('/login');
        }else{
            let config = {
                headers: {Authorization: `Bearer ${credenciales.token}`}
            };
            let body = {
                "orderDate": orderDate,
                "status": "processing",
                "userId": credenciales.user_id,
                "productId": detallesProducto._id
            };
            let order = await axios.post("https://zsnkrs.herokuapp.com/api/orders",body, config);
            console.log(order.data.message);
            if(order.data.message === "Order created succesfully"){
                setPedido(true);
            }else{
                setPedido(false);
            }
        }
    };

    useEffect(()=>{
        console.log(detallesProducto);
        console.log('a')
    },[]);

     return (
         <div className='container mx-auto px4 pt-16 min-w-max'>
            <div className="container mx-auto px-4 py-16 flex align-middle justify-center">
                <img src={detallesProducto?.image} alt="" className='h-72'/>
                <div className="ml-24">
                    <h2 className="text-4xl flex font-semibold">{detallesProducto.name}</h2>
                    <div className="flex text-left text-gray-300 mt-8">{detallesProducto.details}</div>
                    <div className="flex items-center text-gray-400 mt-4">
                        <span className='ml-1'>Price: {detallesProducto.price} €</span>
                        <span className='mx-2'>|</span>
                        <span>Stock: {detallesProducto.stock}</span>
                    </div>
                    <div className="flex items-center text-gray-400 mt-24">
                        <button type="button" className="text-white bg-gradient-to-br from-orange-700 to-orange-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => navigate("/products")}>Volver</button>
                        <button type="button" onClick={()=> hacerPedido()} className="text-white bg-gradient-to-br from-orange-700 to-orange-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Comprar</button> 
                    </div>
                    {pedido===true &&
                        <div className="mt-12 flex text-lime-400">
                            Pedido realizado correctamente
                        </div>
                    }
                    
                </div>
            </div>
         </div>
     )
}
export default ProductDetail;