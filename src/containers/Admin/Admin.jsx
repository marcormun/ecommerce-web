import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import axios from 'axios';

const Admin = () => {
    const [pedidosDefecto, setPedidosDefecto] = useState([]);
    const credenciales = useSelector(userData);

    useEffect(()=>{
        PedidosApi();
        console.log(pedidosDefecto);
    },[]);

    const PedidosApi = async () => {
        try{
            let config = {
                headers: {Authorization: `Bearer ${credenciales.token}`}
            };
            let pedidos = await axios.get(`https://zsnkrs.herokuapp.com/api/orders`, config);
            console.log(pedidos);
            setPedidosDefecto(pedidos.data.data);
        }catch(error){
            console.log(error)
        }
    }

    const eliminarPedido = async (pedidoId) => {
        try{
            let config = {
                headers: {Authorization: `Bearer ${credenciales.token}`}
            };
            let response = await axios.delete(`https://zsnkrs.herokuapp.com/api/orders/id/${pedidoId}`, config);
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }

     return (
        <div className='container mx-auto px4 pt-16 min-w-max'>
            <h2 className="uppercase tracking-wider text-orange-500 text-2xl font-bold mb-6">ALL ORDERS</h2>
            <div className='grid gap-8 justify-center'>
                {
                    pedidosDefecto.map(pedido => {
                        return(
                            <div className='mt-8 w-128 border-b flex' key={pedido._id}>
                                <img className='' src={pedido.productImg}/>
                                <div className='ml-8 text-left flex flex-col'>
                                    <div>Status: {pedido.status}</div>
                                    <div>Order date: {pedido.orderDate}</div>
                                    <div>User id: {pedido.userId}</div>
                                    <button type="button"  onClick={() => eliminarPedido(pedido._id)} className="text-white bg-gradient-to-br from-orange-700 to-orange-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button> 
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     )
}
export default Admin;