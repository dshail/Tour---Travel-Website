import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Lake Tahoe",
    location: "USA",
    description: "On this freshwater lake, you can get clear, vibrant sunsets with mountain backdrops.",
    price: 9700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 3700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Maldives Island",
    location: "Maldives",
    description:
      "The calm waters and stunning overwater bungalows make for a perfect backdrop. Try to find a boat that can navigate to less crowded spots for a clearer view.",
    price: 10200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney Harbour",
    location: "Australia",
    description: " The iconic Sydney Harbour is a prime location. You can capture the sunset with the Sydney Opera House and Sydney Harbour Bridge in the frame. Look for a boat that offers a clear view of these landmarks.",
    price: 10700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Santa Monica Bay",
    location: "Los Angeles",
    description:
      "Sunset views from a boat in Santa Monica Bay can be spectacular. Capture the sun setting over the Pacific Ocean with the city skyline or the iconic Santa Monica Pier in the background..",
    price: 9700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "The Las Vegas Strip",
    location: "Los Vegas",
    description:
      "While not a traditional sunset location, capturing the sunset with the Strip’s vibrant lights can create a dynamic contrast between natural and artificial lighting.",
    price: 7200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
