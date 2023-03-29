import NavBarSmall from "./NavBarSmall";

function NavBar() {
  return (
    <nav className="bg-white p-3 shadow-md font-bold tracking-wider fixed w-full z-30">
      <div className="flex justify-between items-center max-w-7xl m-auto text-gray-700">
        <span className="text-lg italic border-l-4 border-red-500 p-1 sm:text-2xl sm:px-2 z-20">
          Sisay <span className="text-red-500"> Driba</span>
        </span>
        <ul className="hidden md:flex gap-5 uppercase">
          <li className="border-red-500 px-4 py-1 hover:border-b-2 hover:py-0 hover:text-xl hover:px-2.5">
            <a href="#">Home</a>
          </li>
          <li className="border-red-500 px-4 py-1 hover:border-b-2 hover:py-0 hover:text-xl hover:px-2.5">
            <a href="#skills">Skills</a>
          </li>
          <li className="border-red-500 px-4 py-1 hover:border-b-2 hover:py-0 hover:text-xl hover:px-1.5">
            <a href="#projects">Projects</a>
          </li>
          <li className="border-red-500 px-4 py-1 hover:border-b-2 hover:py-0 hover:text-xl hover:px-2.5">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="space-x-3 flex items-center">
          <a
            href="#Contact"
            className="px-4 py-1 rounded-full bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white sm:py-2 sm:px-7"
          >
            Hire Me
          </a>
          <NavBarSmall />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
