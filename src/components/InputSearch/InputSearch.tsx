import styles from "./InputSearch.module.css";

const InputSearch = () => {
  return (
    <div>
      <input
        className={styles.search}
        type="search"
        name="search"
        id="search"
        placeholder="Search headphone"
      />
    </div>
  );
};

export default InputSearch;
