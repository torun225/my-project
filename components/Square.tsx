/** @jsx h */
import { h } from "preact";

export function Square(props: { value: number }) {
  return (
    <button className="square">
      {props.value}
    </button>
  );
}
