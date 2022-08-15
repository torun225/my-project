/** @jsx h */
import { h } from "preact";
import Square from "../islands/Square.tsx";
import { Head } from "$fresh/src/runtime/head.ts";
import { useState } from "preact/hooks";

export function Board() {
  const status = "Next player: x";
  const [squares, setSquares] = useState<number[]>(Array(9).fill(null));

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/stylesheet/board.css"></link>
      </Head>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0, squares)}
        {renderSquare(1, squares)}
        {renderSquare(2, squares)}
      </div>
      <div className="board-row">
        {renderSquare(3, squares)}
        {renderSquare(4, squares)}
        {renderSquare(5, squares)}
      </div>
      <div className="board-row">
        {renderSquare(6, squares)}
        {renderSquare(7, squares)}
        {renderSquare(8, squares)}
      </div>
    </div>
  );
}

function renderSquare(i: number, squares: number[]) {
  return <Square value={squares[i]} />;
}
