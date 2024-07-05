import React from "react";

function Button({ text }) {
    return (
        <button className={`bg-color-gradient text-white px-3 py-2 rounded font-semibold tracking-wider hover:scale-105`}>
            {text}
        </button>
    )
}

export default Button;
