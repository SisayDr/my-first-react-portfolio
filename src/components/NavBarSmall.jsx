import { useState } from "react";

function NavBarSmall() {
  let [visible, setVisibility] = useState(false);
  return (
    <>
      <button
        className="md:hidden flex flex-col gap-1 z-20 dark:bg-gray-800"
        onClick={() => setVisibility(!visible)}
      >
        {/* nav closer btn */}
        <span className={`${visible ? "" : "hidden"} text-5xl -mt-5`}>
          &times;
        </span>
        {/* nav opner hambergur icon */}
        <span
          className={`${
            visible ? "hidden" : ""
          } inline-block w-8 h-1 bg-gray-700 dark:bg-white`}
        ></span>
        <span
          className={`${
            visible ? "hidden" : ""
          } inline-block w-8 h-1 bg-gray-700 dark:bg-white`}
        ></span>
        <span
          className={`${
            visible ? "hidden" : ""
          } inline-block w-8 h-1 bg-gray-700 dark:bg-white`}
        ></span>
      </button>
      <ul
        className={`${
          !visible ? "hidden" : ""
        } absolute top-0 right-0 w-full text-center pt-12 pb-5 bg-white dark:bg-gray-800 text-red-500 md:hidden space-y-2 uppercase shadow-md rounded-md z-10`}
      >
        <li className="p-2 hover:bg-red-500 hover:text-white">
          <a href="#" onClick={() => setVisibility(!visible)}>
            Home
          </a>
        </li>
        <li className="p-2 hover:bg-red-500 hover:text-white">
          <a href="#skills" onClick={() => setVisibility(!visible)}>
            Skills
          </a>
        </li>
        <li className="p-2 hover:bg-red-500 hover:text-white">
          <a href="#projects" onClick={() => setVisibility(!visible)}>
            Projects
          </a>
        </li>
        <li className="p-2 hover:bg-red-500 hover:text-white">
          <a href="#contact" onClick={() => setVisibility(!visible)}>
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}

export default NavBarSmall;
