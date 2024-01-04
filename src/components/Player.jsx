import { useRef, useState } from "react";

export default function Player() {
  const input = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  const handleClick = () => {
    console.log("input", input);
    setPlayerName(input.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
