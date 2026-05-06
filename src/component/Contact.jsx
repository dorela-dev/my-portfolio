import "../styles/Contacts.css";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { animate, createTimeline } from "animejs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    if (!submitMessage) return;

    const timer = setTimeout(() => {
      setSubmitMessage("");
      setSubmitStatus("");
    }, 3500);

    return () => clearTimeout(timer);
  }, [submitMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await emailjs.send(
        "service_toen41w",
        "template_ry6wvoc",
        {
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          title: formData.subject,
          message: formData.message,
        },
        "OQ58d5ZqGUJZIwsMk",
      );
      setSubmitMessage("Message sent successfully!");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
      setSubmitStatus("error");
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <a className="contact-link" href="mailto:dorelasela@gmail.com">
              <div className="cl-icon">@</div>
              dorelasela@gmail.com
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/dorela-sela/"
              target="_blank"
            >
              <div className="cl-icon">in</div>
              linkedin.com/in/dorelasela
            </a>
            <a
              className="contact-link"
              href="https://github.com/dorela-dev"
              target="_blank"
            >
              <div className="cl-icon">gh</div>
              github.com/dorela-dev
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="your message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="form-actions">
            <button type="submit" className="form-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
            {submitMessage && (
              <p className={`submit-message ${submitStatus}`}>
                {submitMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
