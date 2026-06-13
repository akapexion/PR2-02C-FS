import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';

const App = () => {

  const [productName, setProductName] = useState("");


  const handleSubmission = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post("http://localhost:3000/addproduct", {
        productName
      });
      console.log(response.data.message);
      toast.success(response.data.message)

      setProductName("");
    }
    catch (err) {
      console.log("Error :", err);
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmission}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Settings</legend>
          <div className="join">
            <input type="text" className="input join-item" placeholder="Product name"
              value={productName} onChange={(e) => setProductName(e.target.value)} />
            <button className="btn join-item">save</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default App
