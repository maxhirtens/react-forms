import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// Create a new box form and handle changes/submits.
const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ''
    }
    
    const [boxData, setBoxData] = useState(INITIAL_STATE);
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setBoxData(boxData => ({
      ...boxData,
      [name]: value
    }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(boxData);
        addBox({ ...boxData, id: uuid() });
        setBoxData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='width'>Width:</label>
            <input id='width' type='text' name='width' placeholder='Width' value={boxData.width} onChange={handleChange} />
            
            <label htmlFor='height'>Height:</label>
            <input id='height' type='text' name='height' placeholder='Height' value={boxData.height} onChange={handleChange} />

            <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            placeholder="Color"
            value={boxData.backgroundColor}
            id="backgroundColor"
          />
            <button>Add Box</button>
        </form>
    )
}








export default NewBoxForm;