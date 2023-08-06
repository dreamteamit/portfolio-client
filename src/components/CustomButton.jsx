/* eslint-disable react/prop-types */
const CustomButton = ({ children }) => {
  return (
    // btn-primary bg-gradient-to-r from-primary to-secondary
    <button className="btn  text-white bg-red-500 text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-3 px-8 rounded">
      {children}
    </button>
  );
};

export default CustomButton;
