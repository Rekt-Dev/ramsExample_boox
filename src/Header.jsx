import React, { useState } from "react";

const Header = (props) => {
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          console.log(
            "will call now the function passed by props with the local state of the search text",
            props
          );
          props.search(text);
        }}
      >
        search
      </button>
    </>
  );
};

export default Header;
