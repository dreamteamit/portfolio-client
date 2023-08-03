/* eslint-disable react/prop-types */
const CustomHeading = ({ children }) => {
  return (
    <div>
      <p className="text-secondary font-semibold">-- {children} --</p>
    </div>
  );
};

export default CustomHeading;
