import { CiSearch } from "react-icons/ci";
import { BiMessageAltDots } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

const Nav = () => {
  return (
    <div className="border-b border-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="navbar bg-base-100 my-2 ">
          <div className="navbar-start text-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="text-xl text-white">
              <span className="text-2xl text-cyan-300 font-bold">U</span>nity
              Mess
            </a>
            <div className="mx-0 sm:mx-0 md:mx-20">
              <form method="GET" className="hidden md:block">
                <div className="relative text-gray-600 border rounded-md border-white focus-within:text-gray-400 hover:text-black">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <span className=" text-white focus-within:text-white ">
                        <CiSearch></CiSearch>
                      </span>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-white font-bold border rounded-full border-cyan-100 p-2">
                <BiMessageAltDots></BiMessageAltDots>
              </span>
              <span className="text-2xl text-white font-bold border rounded-full border-cyan-100 p-2">
                <IoIosNotifications></IoIosNotifications>
              </span>
              <div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
