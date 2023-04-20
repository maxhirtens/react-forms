import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const Boxlist = () => {
    const [boxes, setBoxes] = useState([]);
    
    const add = boxObj => {
    setBoxes(boxes => [...boxes, boxObj]);
    };
    
    const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
    };
    
    const boxesOnPage = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
    />
    ))

    return (
        <div>
            <h1>Boxes!</h1>
            <NewBoxForm addBox={add} />
            {boxesOnPage}
            <ul>

            </ul>
        </div>
           )
}



export default Boxlist;