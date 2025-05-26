"use client"; 
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Form validation
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
  
    // Validate required fields
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }
  
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // If validation passes, send email
    emailjs
      .sendForm(
        "service_cv43muv", // Replace with your EmailJS service ID
        "template_705jxbd", // Replace with your EmailJS template ID
        form.current,
        "i01dFn3wVXvs-XXcW" // Replace with your EmailJS public key
      )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send the message, please try again.");
      }
    );
  };

  return (
    <FadeIn>
      <form ref={form} onSubmit={sendEmail}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Let's work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;