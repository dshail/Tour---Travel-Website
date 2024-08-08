import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "The Taj Mahal, located in Agra, is one of the most iconic landmarks in India and is often highlighted as a must-visit destination.The Taj Mahal is renowned as one of the Seven Wonders of the World and is a UNESCO World Heritage Site. Built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, it stands as a symbol of love and architectural brilliance. The construction began in 1632 and took 22 years to complete, involving around 20,000 artisans and workers. The monument is celebrated for its stunning white marble façade and intricate inlay work, which reflects the grandeur of Mughal architecture. Key Features Location: Situated on the banks of the Yamuna River in Agra, Uttar Pradesh. Timings: Open daily from 6:00 AM to 6:00 PM (closed on Fridays). Architecture: The Taj Mahal features a symmetrical layout with a central dome, surrounded by lush gardens, reflecting pools, and other structures, including a mosque and a guest house. Visitors are often advised to visit during sunrise or sunset for breathtaking views, as the changing light enhances the monument's beauty. The Taj Mahal is not just a visual spectacle but also a poignant reminder of love and loss, making it a deeply emotional experience for many.",
    author: "Saurya Singh",
    date: "December 22, 2023",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "New York City, a vibrant metropolis, offers a myriad of iconic attractions. Visitors can marvel at the Statue of Liberty and explore Ellis Island's rich history. Central Park provides a green oasis for relaxation and recreation, while Times Square dazzles with its bright lights and bustling atmosphere. The Empire State Building and Top of the Rock offer breathtaking city views, and the Metropolitan Museum of Art showcases world-class art collections. Broadway's renowned theaters, 5th Avenue's luxury shopping, and Rockefeller Center's seasonal ice skating complete the quintessential NYC experience.",
    author: "Arhaan Akhtar",
    date: "January 12, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Tokyo, Japan's bustling capital, is a fascinating blend of traditional and modern attractions. Visit the historic Senso-ji Temple in Asakusa and explore the serene Meiji Shrine surrounded by lush forest. Shibuya Crossing, one of the world's busiest intersections, epitomizes Tokyo's dynamic energy. The Tokyo Skytree offers panoramic city views, while the shopping districts of Shibuya and Harajuku provide trendy fashion and unique street style. For a taste of pop culture, Akihabara is the go-to place for anime and electronics enthusiasts. Lastly, the peaceful gardens of the Imperial Palace contrast beautifully with the urban landscape, offering a glimpse into Japan's imperial history.",
    author: "Lisa Frendes",
    date: "June 5, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
