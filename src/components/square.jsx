


import './square.css'
function Square({ value, onSquareClick }) {

    function handleClick() {
        console.log('X');
    }
    return (
        <>
            <button className="square" onClick={onSquareClick}>{value}</button>
        </>
    );
}

export default Square;