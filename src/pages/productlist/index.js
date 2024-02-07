import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                console.log(response);
                setProductList(response.data.products);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {productList?.map((product, index) => (
                        <tr className='border' key={index}>
                            <td className="border px-4 py-2">{product.id}</td>
                            <td className="border px-4 py-2">{product.title}</td>
                            <td><img src={product.thumbnail} alt="" className="h-20 w-fit" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
