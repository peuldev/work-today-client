import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, SetReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => SetReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="mx-2">
      <div className="max-w-screen-xl mx-auto">
        <h3>Testimonials</h3>
        <p>Client Feedbacks</p>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id} review={review}>
                <div className="m-24 lg:flex flex-col items-center">
                  <FaQuoteLeft className="text-5xl m-4" />
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  <p className="py-4 lg:text-xl text-xs">{review.details}</p>
                  <div className="flex items-center">
                    <img
                      className="w-20 rounded-full"
                      src={review.photo}
                      alt=""
                    />
                    <h2 className="text-2xl text-orange-400 ms-5">
                      {review.name}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
