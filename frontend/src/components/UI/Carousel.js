export default function Carousel({ source1, source2, source3, className }) {
  return (
    <div
      className={`col-12 col-md-6 carousel slide p-0 ${className}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={source1} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={source2} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={source3} className="d-block w-100" />
        </div>
      </div>
    </div>
  );
}
