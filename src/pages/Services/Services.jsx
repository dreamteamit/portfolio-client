import { useEffect } from "react";
import CustomHeading from "../../components/CustomHeading";
import Service from "./Service";
import "./Servoces.css";
import { useState } from "react";
const Services = () => {

  const [service, setService] = useState([]);

  useEffect(()=>{
    fetch('Service.json')
    .then(res => res.json())
    .then(data=> setService(data))
  },[])
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="service-header md:text-2xl text-xl text-blue-600">
        <CustomHeading>SERVICES</CustomHeading>
      </div>
      {/* our services header */}
      <div className="our-service-h1 mt-5 md:text-7xl text-2xl">
        <h1>Our Services</h1>
      </div>
      {/* content description */}

      <div className="content-description w-1/3 text-center mt-5">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.</p>
      </div>

      {/* services */}

      <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        {
          service.map((service)=> <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
