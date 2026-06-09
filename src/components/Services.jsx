function Services() {
  const services = [
    {
      title: "Manicure",
      price: "KSh 2,000",
      image: "/images/manicure-service.jpg",
    },
    {
      title: "Pedicure",
      price: "KSh 3,000",
      image: "/images/pedicure-service.jpg",
    },
    {
      title: "Gel Polish",
      price: "KSh 2,500",
      image: "/images/gel-polish.jpg",
    },
    {
      title: "Acrylic Nails",
      price: "KSh 4,000",
      image: "/images/acrylic-nails.jpg",
    },
    {
      title: "Nail Art",
      price: "KSh 6,000",
      image: "/images/nail-art.jpg",
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Premium Services</h2>

      <p className="services-subtitle">
        Luxury nail care services tailored to perfection.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />

            <div className="service-content">
              <h3>{service.title}</h3>

              <p className="service-price">
                {service.price}
              </p>

              <a
                href={`https://wa.me/254799117367?text=Hello%20StayLuxe%20ManiStyle,%20I%20would%20like%20to%20book%20${service.title}.`}
                target="_blank"
                rel="noreferrer"
                className="book-btn"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;