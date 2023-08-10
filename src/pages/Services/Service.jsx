import "./Service.css";
const Service = ({ service }) => {
  const { img, header, desc } = service;
  return (
    <div>
      <div className="relative mainCard">
        <div className="service-box max-w-sm p-6 h-72 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-center items-center">
          <img src={img} alt="" className="w-32 h-28" />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
            {header}
          </h5>

          <p className="mb-3 font-normal  text-center">{desc}</p>
        </div>

        <div className="service-hover max-w-sm p-6 w-[100%] rounded-lg absolute flex flex-col justify-center items-center text-white">
          <img src={img} alt="" className="w-32 h-28" />

          <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
            {header}
          </h5>

          <p className="mb-3 font-normal  text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
