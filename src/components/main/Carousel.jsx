
function Carousel() {
  return (
    <div className="lg:w-2/3">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/carrusel1.avif" className="block w-full" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="assets/curresel2.avif" className="block w-full" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="assets/carrusel3.avif" className="block w-full" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
