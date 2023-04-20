import React from "react";

const Box = ({
    id,
    handleRemove,
    width,
    height,
    backgroundColor}) => {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div
                className="box"
                style={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor
                }}>
                <button onClick={remove}>  X  </button>
            </div>
            
        </div>
    )
}

export default Box;