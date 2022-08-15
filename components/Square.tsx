/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function Square(
  props: { value: string; onClick: () => void },
) {
  return (
    <button
      className="square"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
}
