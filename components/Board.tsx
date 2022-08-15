/** @jsx h */
import { h } from "preact";
import { Square } from "../components/Square.tsx";
import { Head } from "$fresh/src/runtime/head.ts";

export function Board() {
  const status = "Next player: x";
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
}

function renderSquare(i: number) {
  return <Square value={i} />;
}
