import StaticCarousel from "./Slider";
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
              <div className="md:flex gap-10 lg:text-2xl md:text-xl">
                <a href="#home">Home</a>
                <a href="#service">Service</a>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact Us</a>
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
