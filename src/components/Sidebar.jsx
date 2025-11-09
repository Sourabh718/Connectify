import { AiOutlineHome, AiOutlinePlusCircle} from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0  p-2 text-bg-dark sidebar z-0"
      style={{ width: "60px" }}
    >
      <div className="mb-5"></div>
      <div className="mb-5"></div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white p-2 ${selectedTab === "Home" && "active"}`}>
             <AiOutlineHome size={25} />
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Create Post");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white p-2 ${selectedTab === "Create Post" && "active"}`}>            
            <AiOutlinePlusCircle size={25} />
          </a>
        </li>

        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("My Profile");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white p-2 ${selectedTab === "My Profile" && "active"}`}> 
            <FaRegUserCircle size={25} />
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
         
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;