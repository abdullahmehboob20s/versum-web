import "../assets/styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact container">
      <form className="contact_form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="fullname">Full name</label>
        <input type="text" id="fullname" placeholder="Full Name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
        <br />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Write Your Message Here"
          rows="10"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br /><br />
    </div>
  );
};

export default Contact;
