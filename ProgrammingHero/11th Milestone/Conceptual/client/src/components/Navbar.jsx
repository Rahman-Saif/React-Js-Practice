import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {

    const {user}=useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="../images/logo.png" alt="" />
          <span className="font-bold">SoloSphere</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div>Home</div>
          </li>

          { !user &&
            <li>
            <Link to={'/login'}>Login</Link>
          </li>}
        </ul>

        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" title="">
              <img
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src=""
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'/registration'} className="justify-between">Add Job</Link>
            </li>
            <li>
              <div>My Posted Jobs</div>
            </li>
            <li>
              <div>My Bids</div>
            </li>
{   user &&     
    <li>
            <div>Bid Requests</div>
        </li>}
            <li className="mt-2">
              <button className="bg-gray-200 block text-center">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
