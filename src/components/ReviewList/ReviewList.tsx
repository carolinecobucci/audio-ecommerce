import styles from "./ReviewList.module.css";
import userProfilePicture from "/src/assets/user-profile-picture.svg";
import starFilled from "/src/assets/star-filled-icon.svg";
import starOutlined from "/src/assets/star-outlined-icon.svg";
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
          src={userProfilePicture}
          alt="user profile picture"
        />
        <div className={styles.userNameRate}>
          <p className={styles.userName}>{reviewUser}</p>
          <div className={styles.userRate}>
            <div className={styles.starsContainer}>
              <img className={styles.starReview} src={starFilled} alt="stars" />
              <img className={styles.starReview} src={starFilled} alt="stars" />
              <img className={styles.starReview} src={starFilled} alt="stars" />
              <img className={styles.starReview} src={starFilled} alt="stars" />
              <img className={styles.starReview} src={starOutlined} alt="stars" />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.reviewText}>{reviewDescription}</p>
    </div>
  );
};

export default ReviewList;
