import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "../../App.css";

import { apiConnector } from "../../services/apiConnector";
import { ratingsEndpoints } from "../../services/apis";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 18;

  useEffect(() => {
    (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API,
      );

      if (data?.success) {
        setReviews(data.data);
      }
    })();
  }, []);

  return (
    <section className="relative mx-auto mt-[28px] mb-24 w-11/12 max-w-7xl overflow-hidden text-white">
      {/* Arrows */}

      <button className="review-prev absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-richblack-800/90 backdrop-blur-md transition hover:scale-110">
        <FiChevronLeft size={28} />
      </button>

      <button className="review-next absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-richblack-800/90 backdrop-blur-md transition hover:scale-110">
        <FiChevronRight size={28} />
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        navigation={{
          prevEl: ".review-prev",
          nextEl: ".review-next",
        }}
        pagination={{
          clickable: true,
        }}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        speed={900}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,
          modifier: 1.6,
          scale: 0.88,
          slideShadows: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="reviewSwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id || review?.user?._id}>
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-white/10
                bg-gradient-to-br
                from-richblack-800/90
                to-richblack-900/90
                backdrop-blur-xl
                p-4
                transition-all
                duration-500
                hover:border-purple-400
                hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

              {/* Quote */}
              <FaQuoteLeft className="absolute right-6 top-6 text-2xl text-purple-400/40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />

              {/* User */}
              <div className="relative z-10 flex items-start gap-3">
                <img
                  src={
                    review?.user?.image
                      ? review.user.image
                      : `https://api.dicebear.com/7.x/initials/svg?seed=${review?.user?.firstName}%20${review?.user?.lastName}`
                  }
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-purple-400 object-cover shadow-lg mt-1"
                />

                <div className="flex flex-col">
                  <h2 className="text-base font-bold leading-tight text-white">
                    {review?.user?.firstName} {review?.user?.lastName}
                  </h2>

                  <p className="mt-1 text-sm text-richblack-300">
                    {review?.course?.courseName}
                  </p>
                </div>
              </div>

              {/* Review */}
              <p className="relative z-10 mt-6 text-sm leading-6 text-richblack-100">
                {review?.review.split(" ").length > truncateWords
                  ? review.review.split(" ").slice(0, truncateWords).join(" ") +
                    "..."
                  : review.review}
              </p>

              <div className="relative z-10 my-4 h-px bg-white/10"></div>

              {/* Rating */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300">
                    {Number(review?.rating).toFixed(1)}
                  </h3>

                  <p className="mt-1 text-sm text-richblack-300">Excellent</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div className="star-rating-wrapper">
                      <Rating
                        readonly
                        initialValue={review?.rating}
                        size={18}
                        fillColor="#FACC15"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ReviewSlider;