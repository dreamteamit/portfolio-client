/* eslint-disable react/prop-types */
const CustomHeading = ({ subheading, heading, content }) => {
  return (
    <div className="flex flex-col justify-center items-center">
     
      <div className="service-header text-sm text-blue-500">
      <p className="text-blue-600 font-semibold  uppercase tracking-[5px]">-- {subheading} --</p>
      </div>
      {/* our services header */}
      <div className="our-service-h1 mt-5 md:text-7xl text-2xl">
        <h1>{heading}</h1>
      </div>
      {/* content description */}

      <div className="content-description w-1/2 text-center mt-5">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CustomHeading;
