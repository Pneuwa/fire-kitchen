import classes from "../../Custom.module.css";

export default function Error({ title, message }) {
  return (
    <div className={classes.block}>
      <div className={classes.icon}>!</div>
      <div className={classes.info}>
        <h2 className="fw-semibold">{title}</h2>
        <p className="fw-semibold">{message}</p>
      </div>
    </div>
  );
}
