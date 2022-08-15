/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function Square(props: { value: number }) {
  const [value, setValue] = useState("");

  return (
    <button
      className="square"
      onClick={() => {
        setValue(() => {
          return "X";
        });
      }}
    >
      {value}
    </button>
  );
}
