import React from "react";
import succesImage from "../../assets/images/rb_35029.png";

const About = () => {
  return (
    <div>
      <section className="bg-gray-50 py-16 px-6 sm:px-12 md:px-16 lg:px-32">
        <div className="container mx-auto text-center">
          {/* Heading */}
          <h5 className="text-4xl poppins-semibold">
              About <span className="text-custom-lightBlue">Job Huntly</span>
            </h5>

          {/* Description */}
          <p className=" poppins-regular mt-3 text-lg sm:text-xl md:text-2xl text-custom-lightGray mb-12 max-w-3xl mx-auto">
            Job-Huntly is the ultimate job portal platform designed to connect
            talented professionals with exciting opportunities. Whether you're a
            job seeker or an employer, we offer an easy-to-use platform for
            finding the perfect match. Explore thousands of job listings,
            enhance your profile, and take the next step in your career journey
            with us.
          </p>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={succesImage}
              alt="Job Portal"
              className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
            />
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-custom-darkBlue text-white font-semibold rounded-md text-xl transition duration-300 hover:bg-custom-lightBlue"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
