/** @jsx h */
import { h } from "preact";
import Square from "../components/Square.tsx";
import { Head } from "$fresh/src/runtime/head.ts";
import { useState } from "preact/hooks";

export default function Board() {
  const status = "Next player: x";
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/stylesheet/board.css"></link>
      </Head>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );

  function renderSquare(i: number) {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  function handleClick(i: number) {
    const squares_copy = squares.slice();
    squares_copy[i] = "X";
    setSquares(squares_copy);
  }
}
