import { FaQuoteLeft } from "react-icons/fa";
import CustomHeading from "../../components/CustomHeading";

const Feedbacks = () => {
  return (
    <div className="bg-purple-500 py-12 mb-8">
      <div className="text-center text-white my-12">
        <CustomHeading>Feedbacks?</CustomHeading>
        <h1 className="text-6xl font-bold my-4">Clients Feedback</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a <br /> page when looking at its layout. It is a
          long established fact that a reader.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8">
        <div>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-200 rounded-lg border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700 ">
            <div className="text-center">
              <FaQuoteLeft />
            </div>
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Very easy this was to integrate
              </h3>
              <p className="my-4">
                If you care for your time, I hands down would go with this
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-200 rounded-lg border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <div className="text-center ">
              <FaQuoteLeft />
            </div>
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Very easy this was to integrate
              </h3>
              <p className="my-4">
                If you care for your time, I hands down would go with this
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-gray-200 rounded-lg border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <div className="text-center ">
              <FaQuoteLeft />
            </div>
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Very easy this was to integrate
              </h3>
              <p className="my-4">
                If you care for your time, I hands down would go with this
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
