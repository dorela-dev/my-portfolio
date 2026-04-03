import "../styles/Contacts.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">// 05. get in touch</p>
      <h2 className="section-title">contact</h2>
      <div className="contact-inner">
        <div className="contact-left">
          <p>
            I'm always open to new opportunities, collaborations or just a good
            chat about tech and agile. Drop me a message and I'll get back to
            you!
          </p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:dorela@email.com">
              <div className="cl-icon">@</div>
              dorela@email.com
            </a>
            <a
              className="contact-link"
              href="https://linkedin.com/in/dorelasela"
              target="_blank"
            >
              <div className="cl-icon">in</div>
              linkedin.com/in/dorelasela
            </a>
            <a
              className="contact-link"
              href="https://github.com/dorelasela"
              target="_blank"
            >
              <div className="cl-icon">gh</div>
              github.com/dorelasela
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="your name" />
            <input type="email" placeholder="your email" />
          </div>
          <input type="text" placeholder="subject" />
          <textarea placeholder="your message..." rows={5} />
          <button type="submit" className="form-btn">
            send message →
          </button>
        </form>
      </div>
    </section>
  );
}
