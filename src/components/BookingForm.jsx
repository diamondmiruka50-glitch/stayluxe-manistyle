import { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I want to book:%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}`;

    window.open(`https://wa.me/254799117367?text=${message}`, "_blank");
  };

  return (
    <section className="booking">
      <h2>Quick Booking</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <select name="service" onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
          <option value="Gel Polish">Gel Polish</option>
          <option value="Nail Art">Nail Art</option>
        </select>

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm;