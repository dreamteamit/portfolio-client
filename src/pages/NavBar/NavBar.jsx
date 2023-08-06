import './Navbar.css';
import { FaMailBulk, FaPhone, FaLocationArrow, FaFacebook, FaTwitter, FaGooglePlusG, FaLinkedin, FaPinterest } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="grid grid-cols-2  items-center menu-header px-10">
      <div className="flex justify-around py-5">
        <div className="flex items-center gap-5 ">
          <p>
            <FaPhone />
          </p>
          <p>+8801705978622</p>
        </div>
        <div className="flex items-center gap-5 ">
          <p>
            <FaMailBulk />
          </p>
          <p>mail@example.com</p>
        </div>

        <div className="flex items-center gap-5 ">
          <p>
            <FaLocationArrow />
          </p>
          <p>mail@example.com</p>
        </div>
      </div>
      <div className="social-icon flex gap-5 justify-end md:mr-28">
       <a href="" className="bg-white text-blue-800 p-2 text-xl rounded-lg " target="_blank"> <FaFacebook/></a>
       <a href="" className="bg-white text-blue-800 p-2 text-xl rounded-lg " target="_blank"> <FaTwitter/></a>
       <a href="" className="bg-white text-blue-800 p-2 text-xl rounded-lg " target="_blank"> <FaGooglePlusG/></a>
       <a href="" className="bg-white text-blue-800 p-2 text-xl rounded-lg " target="_blank"> <FaLinkedin/></a>
       <a href="" className="bg-white text-blue-800 p-2 text-xl rounded-lg " target="_blank"> <FaPinterest/></a>

      </div>
    </div>
  );
};

export default NavBar;
