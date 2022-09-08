import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { takeData } from './detailSlice'; 
import axios from 'axios';

const ProductDetail = () => {
    let detallesProducto = useSelector(takeData);
    let navegador = useNavigate();
    useEffect(()=>{
        console.log(detallesProducto);
        console.log('a')
    },[]);

     return (
         <div className='container mx-auto px4 pt-16 min-w-max'>
            <div className="container mx-auto px-4 py-16 flex align-middle justify-center">
                <img src={detallesProducto?.image} alt="" className='w-96'/>
                <div className="ml-24">
                    <h2 className="text-4xl flex font-semibold">{detallesProducto.name}</h2>
                    <div className="flex text-left text-gray-300 mt-8">{detallesProducto.details}</div>
                    <div className="flex items-center text-gray-400 mt-4">
                        <span className='ml-1'>Price: {detallesProducto.price} €</span>
                        <span className='mx-2'>|</span>
                        <span>Stock: {detallesProducto.stock}</span>
                    </div>
                    
                </div>
            </div>
         </div>
     )
}
export default ProductDetail;