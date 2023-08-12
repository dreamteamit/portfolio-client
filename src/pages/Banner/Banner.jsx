import StaticCarousel from "./Slider";
import { Link, animateScroll as scroll } from "react-scroll";
const Banner = () => {
  return (
    <div>
      <div className="relative">
        {/* menu */}
        <div className="bg-transparent absolute top-10 z-50 text-white w-full">
          <div className="md:flex md:justify-around md:items-center">

            {/* logo */}
            <div>
              <h1>Dream IT</h1>
            </div>
            {/* main menu */}
            <div className="md:flex gap-10 text-xl">
              <Link to="home" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer">Home</Link>

              <Link to="service" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer">Service</Link>


              <Link to="about" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer">About</Link>




              <Link to="portfolio" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer">Portfolio</Link>


              <Link to="portfolio" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer">Testimonial</Link>

              <Link to="blog" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer">Blog</Link>

              <Link to="contact" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer">Contact Us</Link>



            </div>

          </div>
          <hr className="border border-gray-500 w-full mt-10" />
        </div>
        <StaticCarousel />
      </div>
    </div>
  );
};

export default Banner;
