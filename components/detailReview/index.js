import { Rating } from "react-simple-star-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import variables from "@/styles/variables.module.scss";
import styles from "./style.module.scss";

export default function DetailReview({ info }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Ratings and Reviews</p>
      <div className={styles.ratingContainer}>
        <div className={styles.section1}>
          <p className={styles.score}>{info.score}</p>
          <div className={styles.ratings}>
            <Rating
              initialValue={info.score}
              readonly={true}
              allowFraction={true}
              fillColor={variables.primaryColor}
            />
          </div>
          <p className={styles.rating}>{info.rating} Ratings</p>
          <div className="al-button-primary w-full mt-5">Write A Review</div>
          <div className="al-button-primary w-full mt-2">Show All Reviews</div>
        </div>
        <div className={styles.section2}>
          <div className={styles.starGroup}>
            {info.stars.map((s, _idx) => (
              <div className={styles.starSet} key={_idx}>
                <p className={styles.title}>{5 - _idx} Stars</p>
                <div className={styles.bar}>
                  <div
                    className={styles.inner}
                    style={{ width: `${s.pro}%` }}
                  ></div>
                </div>
                <p className={styles.count}>{s.count}</p>
              </div>
            ))}
          </div>
          <p className={styles.description}>
            <span>{info.pro}%</span> of reviewers would recommend this product
            to a friend
          </p>
        </div>
      </div>
      <p className={styles.title}>Top Reviews</p>
      <div className={styles.swiperContainer}>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween="20"
        >
          {info.reviews.map((r, _idx) => (
            <SwiperSlide key={_idx}>
              <div className={styles.reviewContainer}>
                <div className={styles.rating}>
                  <Rating
                    initialValue={r.score}
                    readonly={true}
                    allowFraction={true}
                    fillColor={variables.primaryColor}
                    size={20}
                  />
                  <p className={styles.ratingScore}>{r.score}</p>
                </div>
                <p className={styles.title}>{r.title}</p>
                <div className={styles.info}>
                  <p className={styles.user}>{r.user}</p>
                  <p className={styles.time}>{r.time}</p>
                </div>
                <p className={styles.content}>{r.content}</p>
                <p className={styles.helpful}>Helpful?</p>
                <div className={styles.value}>
                  <div className={styles.valueUnit}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    YES {r.yes}
                  </div>
                  <div className={styles.valueUnit}>
                    <FontAwesomeIcon icon={faThumbsDown} />
                    NO {r.no}
                  </div>
                  <p className={styles.report}>Report</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="swiper-button-prev al-button-swiper-navigator"></div>
          <div className="swiper-button-next al-button-swiper-navigator"></div>
        </div>
      </div>
    </div>
  );
}
