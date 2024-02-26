export default function Error({ title, message }) {
  return (
    <div>
      <div>!</div>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
