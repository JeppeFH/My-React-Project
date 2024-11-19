import styles from "./greeting.module.css";

const Greeting = ({ firstName, lastName }) => {
  return (
    <p className={styles.p}>
      Velkommen til vores hjemmeside, {firstName} {lastName}
    </p>
  );
};

export default Greeting;
