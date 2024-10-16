import React, { useEffect } from "react";
import FormContact from "../components/FormContact";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="py-16">
      <FormContact />
    </div>
  );
}

export default Contact;
