
import CustomHeading from "../../components/CustomHeading";
import Team from "./Team";

const Projects = () => {
  return (
    <>
      <div className="my-10 flex flex-col justify-center items-center">
        <CustomHeading subheading={'PROJECTS'} heading={'Our Portfolio'} content={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader.'}></CustomHeading>
        <Team/>
      </div>
    </>
  );
};

export default Projects;
