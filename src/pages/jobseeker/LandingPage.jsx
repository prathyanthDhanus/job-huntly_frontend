import React from "react";
import jobFindImage from "../../assets/images/rb_5774.png";
import menImage from "../../assets/images/design-b3dcb2a2-23f6-41f0-b740-595184e6d3e9 1.png";
import vectorImage from "../../assets/images/Vector.png";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import CustomButton from "../../components/button/CustomButton";
import JobOpensCard from "../../components/card/JobOpensCard";

const LandingPage = () => {
  const handleClick = () => {
    alert("More Info clicked");
  };
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:h-screen ml-5 ">
        {/* Left Section */}
        <div className="p-5 sm:p-4 md:p-6 lg:p-8 rounded-md m-4 sm:m-2 md:m-4 lg:m-8 ">
          <div className="font-bold text-custom-yellow text-4xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight lg:mt-10">
            <h5>Discover</h5>
            <h5>Morethan</h5>
          </div>
          <p className="font-bold mt-2 text-lg sm:text-base md:text-2xl lg:text-7xl text-custom-lightBlue">
            5000+ Jobs
          </p>

          <div className="mt-4">
            <img
              src={vectorImage}
              alt="vector"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
            />
          </div>
          <p className="mt-5 poppins-medium text-lg text-custom-lightGray">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups
          </p>

          <div className="bg-red-400 flex">
            <FiSearch />
            <FaMapMarkerAlt />
          </div>

          <p className="mt-5 poppins-medium text-lg text-custom-lightGray">
            Popular : UI-UX Designer,Web Developer,Freelancer
          </p>
        </div>

        {/* Right Section */}
        <div className="p-10 sm:p-6 md:p-12 lg:p-20 flex items-center justify-center">
          <img
            src={menImage}
            alt="men-image"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      <section className=" ml-5 ">
        {/* Left Section */}
        <div className="p-5 sm:p-4 md:p-6 lg:p-8 rounded-md m-4 sm:m-2 md:m-4 lg:m-8 ">
          <h5 className="text-4xl poppins-semibold ">
            Exploreby <span className="text-custom-lightBlue">category</span>
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="border-2 border-custom-lightGray p-4 w-60 rounded-md poppins-semibold space-y-2 hover:bg-custom-darkBlue hover:cursor-pointer group mt-10">
              <MdOutlineDesignServices className="text-custom-blue text-4xl mb-2 group-hover:text-white" />
              <span>Design</span>
              <div className="flex gap-5 items-center">
                <span className="text-custom-lightGray poppins-light">
                  235 job availables
                </span>
                <GoArrowRight />
              </div>
            </div>
            <div className="border-2 border-custom-lightGray p-4 w-60 rounded-md poppins-semibold space-y-2 hover:bg-custom-darkBlue hover:cursor-pointer group mt-10">
              <MdOutlineDesignServices className="text-custom-blue text-4xl mb-2 group-hover:text-white" />
              <span>Design</span>
              <div className="flex gap-5 items-center">
                <span className="text-custom-lightGray poppins-light">
                  235 job availables
                </span>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}

        <section className="flex-1 flex flex-col md:flex-row items-center justify-center bg-blue-100 p-6 md:p-12">
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h2 className="text-3xl poppins-bold text-blue-600">
              Find Your Dream Job with Job Huntly
            </h2>
            <p className="text-lg text-gray-700 poppins-regular">
              Your one-stop platform to search, apply, and land your next job.
              Whether you're a seasoned professional or just starting, we've got
              you covered.
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <img src={jobFindImage} alt="Job Huntlly Hero" />
          </div>
        </section>

      

        {/* Features Section */}
        <section
          id="features"
          className="py-12 px-6 md:px-12 p-5 sm:p-4 md:p-6 lg:p-8 rounded-md m-4 sm:m-2 md:m-4 lg:m-8"
        >
          <h5 className="text-4xl poppins-semibold ">
            Why Choose{" "}
            <span className="text-custom-lightBlue">Job Huntly?</span>
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
              <h4 className="text-xl poppins-semibold">Easy Job Search</h4>
              <p className="text-gray-700 mt-2 poppins-regular">
                Search for jobs that match your skills and preferences with our
                user-friendly filters.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
              <h4 className="text-xl poppins-semibold">
                Professional Profiles
              </h4>
              <p className="text-gray-700 mt-2 poppins-regular">
                Create a professional profile and showcase your skills to
                potential employers.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow">
              <h4 className="text-xl poppins-semibold">
                Instant Notifications
              </h4>
              <p className="text-gray-700 mt-2 poppins-regular">
                Get instant updates about new job opportunities and application
                statuses.
              </p>
            </div>
          </div>
        </section>

        <div >
          <section
            id="latestJob"
            className="py-12 px-6 md:px-12 p-5 sm:p-4 md:p-6 lg:p-8 rounded-md m-4 sm:m-2 md:m-4 lg:m-8"
          >
            <h5 className="text-4xl poppins-semibold">
              Latest <span className="text-custom-lightBlue">Job Opens</span>
            </h5>
          </section>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  py-10  bg-gray-100">
            {/* JobOpensCard components */}
            <JobOpensCard
              heading="Sample Heading"
              buttonText="More Info"
              onClick={handleClick}
              bgColor="bg-white"
              circleColor="bg-custom-lightBlue"
            />
            <JobOpensCard
              heading="Sample Heading"
              buttonText="More Info"
              onClick={handleClick}
              bgColor="bg-white"
              circleColor="bg-custom-lightBlue"
            />
            <JobOpensCard
              heading="Sample Heading"
              buttonText="More Info"
              onClick={handleClick}
              bgColor="bg-white"
              circleColor="bg-custom-lightBlue"
            />
            <JobOpensCard
              heading="Sample Heading"
              buttonText="More Info"
              onClick={handleClick}
              bgColor="bg-white"
              circleColor="bg-custom-lightBlue"
            />
            <JobOpensCard
              heading="Sample Heading"
              buttonText="More Info"
              onClick={handleClick}
              bgColor="bg-white"
              circleColor="bg-custom-lightBlue"
            />
          </div>
        </div>

        {/* About Section */}
        <section
          id="about"
          className="py-12 px-6 md:px-12 p-5 sm:p-4 md:p-6 lg:p-8 rounded-md m-4 sm:m-2 md:m-4 lg:m-8"
        >
          <h5 className="text-4xl poppins-semibold ">
            About <span className="text-custom-lightBlue">Job Huntly</span>
          </h5>

          <h3 className="text-3xl poppins-regulartext-center"></h3>
          <p className="text-lg  mt-4">
            Job Huntlly is dedicated to bridging the gap between job seekers and
            employers. With advanced tools and a seamless user experience, we
            aim to make the job-seeking process simple and efficient.
          </p>
          <p className="text-lg  mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-lg  mt-4">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <CustomButton
            buttonText="View More"
            className="bg-blue-500 text-white hover:bg-blue-700 mt-5 poppins-regular"
            onClick=""
            type="button"
            disabled="false"
          />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
