import styles from "./ProductFeatures.module.css";

const ProductFeatures = () => {
  return (
    <div className={styles.reviewTextContainer}>
      <div className={styles.reviewTextTitle}>Highly Detailed Audio</div>
      <div className={styles.reviewText}>
        The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose,
        making it stiffer, lighter and stronger than regular PET speaker units, and allowing the
        sound-producing diaphragm to vibrate without the levels of distortion found in other
        speakers. The speaker unit contains a diaphragm that is precision-grown from NAC Audio
        bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and
        allowing the sound-producing diaphragm to vibrate without the levels of distortion found in
        other speakers.
      </div>
    </div>
  );
};

export default ProductFeatures;
