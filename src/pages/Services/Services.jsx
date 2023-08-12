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
     
        <CustomHeading subheading={'services'} heading={'Our Services'} content={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.'}></CustomHeading>
     
      {/* our services header */}
     
      {/* content description */}

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
