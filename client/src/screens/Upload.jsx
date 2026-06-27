import React, { useState } from 'react'
import axios from 'axios'

const Upload = () => {

  const [image, setImage] = useState(null);

  const handleSubmission = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:3000/uploadProductImage", formData);

      console.log(response);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmission}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Settings</legend>
          <div className="join">
            <input type="file" className="input join-item" placeholder="Product Image"
              onChange={(e) => setImage(e.target.files[0])} />
            <button className="btn join-item">save</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}
export default Upload
