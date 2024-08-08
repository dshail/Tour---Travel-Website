import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Travellogo is more than just a travel company - it is a gateway to extraordinary travel experiences. With a comprehensive range of services, attention to detail and seamless communication,Travellogo is committed to delivering personalized services.
          We operate with a client-centric approach, tailoring every itinerary to the unique preferences and requirements of each traveller. The team at Travellogo consists of travel enthusiasts driven by a passion for creating unforgettable experiences and exploring new destinations.
          With an extensive network of trusted partners worldwide, we provide access to the best travel plans at the most appropriate cost.Travellogo captures the essence of wanderlust and transforms it into extraordinary journeys.
          </p>
          <br />
          <p>
          15k+ Client using Our Services.
          Your success is our mission. As business advisors, we offer expert guidance, unlocking your potential for growth and profitability
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
