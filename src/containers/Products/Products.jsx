import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { keepProduct } from '../../containers/ProductDetail/detailSlice';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    let navegador = useNavigate();
    let dispatch = useDispatch();

    const [productosDefecto, setProductosDefecto] = useState([]);

    useEffect(() => {
        ProductosApi();
        console.log(ProductosApi);
    }, []);
    const ProductosApi = async () => {
        try {
            let productos = await axios.get("https://zsnkrs.herokuapp.com/api/products");
            setProductosDefecto(productos.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    const ProductoEscogido = (producto) => {
        dispatch(keepProduct(producto));

        setTimeout(() => {
            navegador("/detail");
        }, 500);
    }

    return (
        <div className='container mx-auto px4 pt-16 min-w-max'>
            <h2 className="uppercase tracking-wider text-orange-500 text-2xl font-bold mb-6">Our products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    productosDefecto.map(producto => {
                        return (
                            <div className=" mt-12 mb-2 w-64 cursor-pointer" key={producto._id} onClick={() => ProductoEscogido(producto)}>
                                <img className="w-64 " src={producto.image} />
                                <a className="text-base mt-2 hover:text-gray-300">{producto.name}</a>
                                <div className="flex justify-center items-center text-gray-400">
                                    
                                    <span className='ml-1'>{producto.price} €</span>
                                    <span className='mx-2'>|</span>
                                    <span>Stock: {producto.stock}</span>

                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Products;