import styles from "./ReviewList.module.css";
interface reviewProTypes {
  reviewUser: string;
  reviewDescription: string;
}

const ReviewList = ({ reviewUser, reviewDescription }: reviewProTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.userProfile}>
        <img
          className={styles.userProfileImg}
          src="/src/assets/user-profile-picture.svg"
          alt="user profile picture"
        />
        <div className={styles.userNameRate}>
          <p className={styles.userName}>{reviewUser}</p>
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
      <p className={styles.reviewText}>{reviewDescription}</p>
    </div>
  );
};

export default ReviewList;
