function Gallery() {
  const images = [
    {
      src: "/images/nailcare1.jpg",
      title: "Nail Care",
    },
    {
      src: "/images/manicure1.jpg",
      title: "Manicure",
    },
    {
      src: "/images/manicure2.jpg",
      title: "Manicure",
    },
    {
      src: "/images/pedicure1.jpg",
      title: "Pedicure",
    },
    {
      src: "/images/pedicure2.jpg",
      title: "Pedicure",
    },
    {
      src: "/images/manicure3.jpg",
      title: "Luxury Nails",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Our Nail Care Portfolio</h2>

      <p className="gallery-subtext">
        A showcase of luxury nail care, manicures, and pedicures.
      </p>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.title} />

            <div className="gallery-overlay">
              <span>{image.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;