import React from "react";

const Buttons = ({ onSubmit, onReset }) => {
    return (
        <>
            <button type="submit" onClick={onSubmit}>
                Added items
            </button>
            <button type="" onClick={onReset}>
                Clear All the tasks
            </button>

        </>
    )
}

export default Buttons;