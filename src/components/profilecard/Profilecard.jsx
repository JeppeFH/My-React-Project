import styles from "./profilecard.module.css";

const Profilecard = ({ user }) => {
  console.log(user);
  return (
    <figure className={styles.card}>
      <figcaption>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <img src={user.image} />
        <p>Username: {user.username}</p>
        <p>Username: {user.password}</p>
      </figcaption>
    </figure>
  );
};

export default Profilecard;
