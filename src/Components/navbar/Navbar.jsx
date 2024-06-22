const Navbar = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto my-14">
      <div className="navbar-start">
        <div className="dropdown  lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  flex gap-5"
          >
            <li>Home</li>
            <li>Recipes</li>
            <li>Recipe</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl lg:text-4xl  font-bold ml-3">The Refined Plate</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-11 opacity-75">
          <li>Home</li>
          <li>Recipes</li>
          <li>Recipe</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>
      <div className="navbar-end  lg:flex">
        <div className="flex gap-4">
          <button className="lg:flex gap-2 bg-slate-100 items-center input rounded-full  max-w-xs hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input type="text" placeholder="Search" className="" />
          </button>
          <div className="w-12 h-12 bg-green-400 rounded-full flex justify-center items-center">
            <i className="fa-regular fa-circle-user text-2xl dark:text-black"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
