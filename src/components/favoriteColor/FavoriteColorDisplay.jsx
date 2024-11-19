import styles from "./favoriteColor.module.css";

const FavoriteColorDisplay = ({ color }) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.container}></div>
  );
};

export default FavoriteColorDisplay;
