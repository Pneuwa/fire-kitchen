export default function Carousel({ source1, source2, source3, className }) {
  return (
    <div
      className={`col-12 col-md-6 carousel slide p-0 ${className}`}
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={source1} class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src={source2} class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src={source3} class="d-block w-100" />
        </div>
      </div>
    </div>
  );
}
