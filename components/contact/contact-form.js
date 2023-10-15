import classes from "./contact-form.module.css";
import Notification from "@/ui/notification";
import { useEffect, useState } from "react";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus == "pending" || requestStatus == "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);
  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email,
          message,
          name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "something went wrong");
      }
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }

    setRequestStatus("success");
  }

  let notificationData;

  if (requestStatus == "pending") {
    notificationData = {
      status: "pending",
      title: "sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus == "success") {
    notificationData = {
      status: "success",
      title: "success",
      message: "message sent successfully",
    };
  }

  if (requestStatus == "error") {
    notificationData = {
      status: "error",
      title: "error",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you ?</h1>

      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>

            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>

            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
