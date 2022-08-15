/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Board } from "../components/Board.tsx";

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
