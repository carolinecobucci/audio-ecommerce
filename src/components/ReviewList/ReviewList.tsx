import styles from "./ReviewList.module.css";

const ReviewList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userProfile}>
        <img
          className={styles.userProfileImg}
          src="/src/assets/user-profile-picture.svg"
          alt="user profile picture"
        />
        <div className={styles.userNameRate}>
          <p className={styles.userName}>Madelina</p>
          <div className={styles.userRate}>
            <div className={styles.starsContainer}>
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-outlined-icon.svg"
                alt="stars"
              />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.reviewText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <div className={styles.userProfile}>
        <img
          className={styles.userProfileImg}
          src="/src/assets/user-profile-picture.svg"
          alt="user profile picture"
        />
        <div className={styles.userNameRate}>
          <p className={styles.userName}>Irfan</p>
          <div className={styles.userRate}>
            <div className={styles.starsContainer}>
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviewText}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
        <div className={styles.reviewImg}>
          <img
            className={styles.reviewImg}
            src="/src/assets/headphone-review.png"
            alt="headphone"
          />
          <img
            className={styles.reviewImg}
            src="/src/assets/headphone-review.png"
            alt="headphone"
          />
          <img
            className={styles.reviewImg}
            src="/src/assets/headphone-review.png"
            alt="headphone"
          />
        </div>
      </div>

      <div className={styles.userProfile}>
        <img
          className={styles.userProfileImg}
          src="/src/assets/user-profile-picture.svg"
          alt="user profile picture"
        />
        <div className={styles.userNameRate}>
          <p className={styles.userName}>Ravi Putra</p>
          <div className={styles.userRate}>
            <div className={styles.starsContainer}>
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
              <img
                className={styles.starReview}
                src="/src/assets/star-filled-icon.svg"
                alt="stars"
              />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.reviewText}>Excepteur sint occaecat cupidatat non proident</p>
    </div>
  );
};

export default ReviewList;
