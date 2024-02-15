import React from "react";
import boyImage from "../assets/images/red-shoes-boy.jpg";
import perfumeImage from "../assets/images/red-perfume.jpg";
import girlImage from "../assets/images/red-girl-photo.jpg";
import smallPerfumeImage from "../assets/images/perfume-image.png";
import smallCoatImage from "../assets/images/coat-image.png";
import ProductCard from "../components/product/ProductCard";
import yellowShoes from "../assets/images/yellow-shoes.jpg";
import capCollection from "../assets/images/cap-collection.jpg";
import blackCoat from "../assets/images/black-coat.jpg";
import clothShop from "../assets/images/clothing-shop-image.jpg";
import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section-images flex flex-col lg:flex-row">
        <div className="image-container relative overflow-hidden">
          <img
            className="image w-full h-auto transition-transform duration-300 transform hover:blur-[2px] cursor-pointer"
            src={boyImage}
            alt=""
          />
          <div className="overlay-text absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-8 transition-opacity duration-300 hover:opacity-100 text-4xl lg:text-8xl cursor-pointer">
            Boys Collection
          </div>
        </div>
        <div className="image-container relative overflow-hidden">
          <img
            className="image w-full h-auto transition-transform duration-300 transform hover:blur-[2px] cursor-pointer"
            src={girlImage}
            alt=""
          />
          <div className="overlay-text absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-8 transition-opacity duration-300 hover:opacity-100 text-4xl lg:text-8xl cursor-pointer">
            Ladies Collection
          </div>
        </div>
        <div className="image-container relative overflow-hidden">
          <img
            className="image w-full h-auto transition-transform duration-300 transform hover:blur-[2px] cursor-pointer"
            src={perfumeImage}
            alt=""
          />
          <div className="overlay-text absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-8 transition-opacity duration-300 hover:opacity-100 text-4xl lg:text-8xl cursor-pointer">
            Perfume Collection
          </div>
        </div>
      </div>

      {/* mid section */}

      <div className="mid-section-home flex flex-col gap-9 justify-center items-center lg:flex-row lg:justify-between m-6 lg:m-20 ">
        <div className="first-image-mid-section rounded-full">
          <img
            width={200}
            className="rounded-full"
            src={smallCoatImage}
            alt=""
          />
        </div>

        <div className="seconde-text-section text-xl lg:text-5xl max-w-[25rem] text-[#a7adb8] ">
          <h1>BRING YOU INTO THE NEW FASHION TREND</h1>
        </div>

        <div className="third-section-image rounded-full">
          <img
            width={200}
            src={smallPerfumeImage}
            alt=""
            className="rounded-full"
          />
        </div>
      </div>

      {/* Third section */}

      <div className="item-card-feature-product">
        <div className="heading flex items-center">
          <h1 className="m-4 text-xl lg:text-4xl font-semibold"> FLASH SALE</h1>
          <FaStar className="text-3xl text-red" />
        </div>

        <div className="show-all-product-card m-4 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <ProductCard
            productImage={
              "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            productPrice={"1,499.00"}
            productTitle={"Black Full-zip Leather Jacket"}
          />
          <ProductCard
            productImage={
              "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            productPrice={"1,499.00"}
            productTitle={"Black Full-zip Leather Jacket"}
          />
          <ProductCard
            productImage={
              "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            productPrice={"1,499.00"}
            productTitle={"Black Full-zip Leather Jacket"}
          />
          <ProductCard
            productImage={
              "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            productPrice={"1,499.00"}
            productTitle={"Black Full-zip Leather Jacket"}
          />
          <ProductCard
            productImage={
              "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            productPrice={"1,499.00"}
            productTitle={"Black Full-zip Leather Jacket"}
          />
          <ProductCard
            productImage={
              "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            productPrice={"1,499.00"}
            productTitle={"Black Full-zip Leather Jacket"}
          />
          <ProductCard
            productImage={
              "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            productPrice={"1,499.00"}
            productTitle={"Black Full-zip Leather Jacket"}
          />
        </div>
      </div>

      {/* fourth section */}

      <div className="fourth-section-div flex flex-col lg:flex-row">
        <div className="image-container relative overflow-hidden">
          <img
            className="image w-full h-auto transition-transform duration-300 transform hover:blur-[2px] cursor-pointer"
            src={yellowShoes}
            alt=""
          />
          <div className="overlay-text absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-8 transition-opacity duration-300 hover:opacity-100 text-4xl lg:text-8xl cursor-pointer">
            Shoes Collection
          </div>
        </div>
        <div className="image-container relative overflow-hidden">
          <img
            className="image w-full h-auto transition-transform duration-300 transform hover:blur-[2px] cursor-pointer"
            src={capCollection}
            alt=""
          />
          <div className="overlay-text absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-8 transition-opacity duration-300 hover:opacity-100 text-4xl lg:text-8xl cursor-pointer">
            Caps Collection
          </div>
        </div>
        <div className="image-container relative overflow-hidden">
          <img
            className="image w-full h-auto transition-transform duration-300 transform hover:blur-[2px] cursor-pointer"
            src={blackCoat}
            alt=""
          />
          <div className="overlay-text absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-8 transition-opacity duration-300 hover:opacity-100 text-4xl lg:text-8xl cursor-pointer">
            Blazers Collection
          </div>
        </div>
      </div>

      {/* fifth section */}

      <div className="fifth-section-div">
        <div className="image-container relative overflow-hidden ">
          <img
            className="image w-full h-auto transition-transform duration-300 transform blur-[2px] "
            src={clothShop}
            alt=""
          />
          <div className="overlay-text absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-8 transition-opacity duration-300 hover:opacity-100 text-xl lg:text-8xl ">
            Visit Our Store
            <p className=" text-xs lg:text-xl h-auto">
              Step into our clothing shop and discover a world of style and
              comfort. Immerse yourself in the latest fashion trends, from
              timeless classics to cutting-edge designs. Our curated collection
              ensures you not only find the perfect outfit but also an
              experience that caters to your unique taste. Explore and elevate
              your wardrobe today!
            </p>
          </div>
        </div>
      </div>

      {/* sixth section */}

      <div className="sixth-section ">
        <div className="text-section-div bg-red h-32 flex justify-center p-5">
          <div className="text-section w-[80%] text-sm h-auto text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eos
            laudantium aspernatur ab ea sequi totam repellendus perferendis,

          </div>

          <h1
            style={{ fontFamily: "Cinzel" }}
            className="logo-heading text-center p-4 text-sm font-semibold lg:text-4xl text-white  "
          >
            {" "}
            Fashion Matrix
          </h1>
        </div>
        <div
          style={{ backgroundColor: "black" }}
          className="newsletter h-28 flex flex-col lg:flex-row justify-center items-center gap-3"
        >
          <h1 className="text-white text-xl lg:text-4xl">Get Newsletter From Us!</h1>

          <form className="newsletter-from text-sm flex gap-3">
            <input
              type="text"
              className="rounded-full pr-6 pl-6 placeholder:text-xs"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="register-button  font-bold bg-gray pr-6 pl-6 pt-2 pb-2 text-sm rounded-full border border-red text-white bg-red transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
