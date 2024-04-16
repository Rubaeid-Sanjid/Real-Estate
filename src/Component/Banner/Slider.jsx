import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mt-12 container mx-auto px-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[500px] rounded-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Tv5qvG3/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg)",
            }}
          >
            <div className="hero-overlay rounded-2xl"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Find Your Dream Home
                </h1>
                <p className="mb-5">
                  Discover the perfect place to call home with our wide
                  selection of residential properties. From cozy apartments to
                  spacious family houses, explore options that match your
                  lifestyle and preferences.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero h-[500px] rounded-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/jWqgQmJ/pexels-maria-orlova-4947143.jpg)",
            }}
          >
            <div className="hero-overlay rounded-2xl"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Explore Urban Living
                </h1>
                <p className="mb-5">
                  Experience the vibrant energy of city life with our range of
                  urban residences. From trendy loft apartments to modern
                  townhouses, uncover urban living spaces that offer convenience
                  and style.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero h-[500px] rounded-2xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/pP18sHB/pexels-indre-kom-567675.jpg)",
            }}
          >
            <div className="hero-overlay rounded-2xl"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Escape to Tranquil Retreats
                </h1>
                <p className="mb-5">
                  Indulge in serene living with our selection of tranquil
                  retreats. From charming countryside cottages to beachfront
                  villas, find your escape from the hustle and bustle of
                  everyday life.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;