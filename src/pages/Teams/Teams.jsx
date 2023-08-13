import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Teams = () => {

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-center text-sky-600">Meet Our Awesome Team.</h3>
      <div className='w-5/6 mx-auto my-16 py-2 px-2 shadow-lg shadow-[#F1F8FB] min-h-40 bg-[#F1F8FB] rounded-lg'>

        <Slider {...settings}>
          <div className="mx-4 p-2">
            <img src="https://i.ibb.co/ypx5mVG/365397404-2092992247709495-6443373606371390735-n.jpg" alt="" className=' rounded-xl  bg-white p-4 w-full' />
            <h3 className="text-center text-2xl font-bold text-sky-600 mt-2">CEO OF Team IT</h3>
            <div className="flex justify-evenly items-center mt-2">
              <a className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='mailto:smrabiulislam03@gmail.com'><FaEnvelope /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.facebook.com/smrabiulislam1998' target='_blank'><FaFacebookF /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.linkedin.com/in/sm-rabiul-islam/' target='_blank'><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="mx-4 p-2">
            <img src="https://i.ibb.co/YLp1DX1/p.jpg" alt="" className=' rounded-xl bg-white p-4 w-full' />
            <h3 className="text-center text-2xl font-bold text-sky-600 mt-2">Full Stack Developer</h3>
            <div className="flex justify-evenly items-center mt-2">
              <a className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='mailto:nazmulbhuyian000@gmail.com'><FaEnvelope /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://web.facebook.com/nazmul.nobel.3' target='_blank'><FaFacebookF /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.linkedin.com/in/nazmul-bhuyian-mern-stack-developer/' target='_blank'><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="mx-4 p-2">
            <img src="https://i.ibb.co/mt3XrD0/365777149-842195200429925-5215951036734200385-n.png" alt="" className=' rounded-xl  bg-white p-4' />
            <h3 className="text-center text-2xl font-bold text-sky-600 mt-2">Front End Developer</h3>
            <div className="flex justify-evenly items-center mt-2">
              <a className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='mailto:rishad.islam158@gmail.com'><FaEnvelope /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.facebook.com/rishadislam01/' target='_blank'><FaFacebookF /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.linkedin.com/in/rishad-islam/' target='_blank'><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="mx-4 p-2">
            <img src="https://i.ibb.co/B6GC80v/Shejan-Img1-22.jpg" alt="" className=' rounded-xl  bg-white p-4' />
            <h3 className="text-center text-2xl font-bold text-sky-600 mt-2">Front End Developer</h3>
            <div className="flex justify-evenly items-center mt-2">
              <a className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='mailto:nizam.shejan11@gmail.com'><FaEnvelope /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.facebook.com/profile.php?id=100071887561382' target='_blank'><FaFacebookF /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.linkedin.com/in/nizam-uddin-shejan/' target='_blank'><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="mx-4 p-2">
            <img src="https://i.ibb.co/KjXsWrM/358780768-6806221632735594-1400401729898915798-n.jpg" alt="" className=' rounded-xl  bg-white p-4' />
            <h3 className="text-center text-2xl font-bold text-sky-600 mt-2">Front End Developer</h3>
            <div className="flex justify-evenly items-center mt-2">
              <a className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='mailto:jonaeathbcc18@gmail.com'><FaEnvelope /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.facebook.com/jonaeath.hossain' target='_blank'><FaFacebookF /></a>
              <a rel="noreferrer" className='p-4 text-xl rounded-full hover:bg-sky-800 hover:text-white text-sky-600 bg-white' href='https://www.linkedin.com/in/jonaeath-hossin-ba5302a3/' target='_blank'><FaLinkedinIn /></a>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Teams;
