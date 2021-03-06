import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const  categories = [
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
Amos Han's React Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
          <a href="#portfolio" onClick={() => handleClick()}>
              Portfolio
            </a>
          </li>
          <li className={"mx-2"}>
          <a href="#contact" onClick={() => handleClick()}>
              Contact
            </a>
          </li>
          <li className={"mx-2"}>
          <a href="#resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;