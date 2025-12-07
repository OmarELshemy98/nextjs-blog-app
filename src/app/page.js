export default function Home() {
  return (
    <div>
      <h1 className="mb-4 text-center">Welcome to My Blog</h1>
      
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://placehold.co/800x400/007bff/ffffff?text=Slide+1" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Slide Label</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://placehold.co/800x400/6610f2/ffffff?text=Slide+2" className="d-block w-100" alt="Slide 2" />
             <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide Label</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://placehold.co/800x400/28a745/ffffff?text=Slide+3" className="d-block w-100" alt="Slide 3" />
             <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Label</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}