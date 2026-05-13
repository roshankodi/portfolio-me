function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>

      <form action="https://formspree.io/f/mgodqjgw" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;