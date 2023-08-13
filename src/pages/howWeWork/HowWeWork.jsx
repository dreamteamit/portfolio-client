import CustomHeading from "../../components/CustomHeading";

const HowWeWork = () => {
  return (
    <div className="m-4">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <CustomHeading subheading={'How we Work'}></CustomHeading>
          <h1 className="text-5xl">
            We Can Take Your Business To The
            <span className="text-blue-600">Next Level.</span>
          </h1>
          <br/>
          <p>It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <br/>  
          <ul>
            <li>Dream Team IT</li>
            <li>Dream Team IT</li>
            <li>Dream Team IT</li>
          </ul>
          <br/>
          <button className='flex items-center gap-3 btn  text-white text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-3 px-8 rounded hover:bg-white hover:text-black'> Get Started Now</button>  

        </div>
        <img
          className="rounded-lg"
          src="https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=600&h=400"
          alt="#"
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default HowWeWork;
