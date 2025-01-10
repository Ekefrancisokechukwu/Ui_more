import { useEffect, useRef, useState } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  console.log(squares);

  const onSquareClick = (index) => {
    if (squares[index]) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  return (
    <div className="h-screen grid place-items-center bg-white">
      <div className="grid grid-cols-3 gap-3 p-2 border">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => onSquareClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        textAlign: "center",
        cursor: "pointer",
      }}
      className="size-[60px] cursor-pointer text-xl border"
    >
      {value}
    </button>
  );
};

export default App;
