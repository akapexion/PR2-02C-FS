import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Table = () => {

    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);
    const [updateProductName, setUpdateProductName] = useState("");

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/getproducts");

            console.log(response.data.products);

            setProducts(response.data.products);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])


    // Edit BTN
    const handleEdit = (p) => {
        setEditingProductId(p._id);
        setUpdateProductName(p.product_name);

        console.log(editingProductId);
    }

    // Save BTN
    const saveEdit = async (id) => {
        try {
            const response = await axios.put(`http://localhost:3000/updateproduct/${id}`, {
                updateProductName
            });

            console.log(response);
            setEditingProductId(null);
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, i) => (
                            <tr>
                                <th>{i + 1}</th>
                                <td>

                                    {editingProductId == p._id ?
                                        <input type="text" value={updateProductName} onChange={(e) => setUpdateProductName(e.target.value)} className='border border-gray-300 p-3' />
                                        :
                                        p.product_name
                                    }
                                </td>
                                <td>

                                    {editingProductId == p._id ?
                                        <>
                                            <button className="btn btn-soft btn-success" onClick={() => saveEdit(p._id)}>Save</button>
                                            <button className="btn btn-soft btn-warning" onClick={() => setEditingProductId(null)}>Cancel</button>
                                        </>
                                        :
                                        <>
                                            <button className="btn btn-soft btn-info" onClick={() => handleEdit(p)}>Edit</button>
                                            <button className="btn btn-soft btn-error">Delete</button>
                                        </>
                                    }

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
