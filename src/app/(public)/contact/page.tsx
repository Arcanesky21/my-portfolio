"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+1876 441 8811" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mikarlofrancis@gmail.com",
  },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Jamaica" },
  {
    icon: <FaBuilding />,
    title: "Business",
    description: "Arkane Technologies (iNeedALinkJA)",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value });
    setTouched((prev) => ({ ...prev, service: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all fields as touched on submit
    setTouched({
      firstname: true,
      lastname: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });
    setLoading(true);
    setSuccess(false);
    setError("");
    try {
      const res = await fetch("/api/sendEmails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTouched({
          firstname: false,
          lastname: false,
          email: false,
          phone: false,
          service: false,
          message: false,
        });
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Validation: check if all fields are empty
  const isFormEmpty = Object.values(form).every((v) => v === "");
  // Validation: check if required fields are filled
  const isFormValid =
    form.firstname.trim() &&
    form.lastname.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.service.trim() &&
    form.message.trim();

  // Track touched fields for error display
  const [touched, setTouched] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    service: false,
    message: false,
  });

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // Helper for error message
  const getError = (field: keyof typeof form) => {
    return touched[field] && !form[field].trim()
      ? "This field is required"
      : "";
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Feel free to reach out using the form below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <Input
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    value={form.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {getError("firstname") && (
                    <p className="text-red-500 text-xs">
                      {getError("firstname")}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    value={form.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {getError("lastname") && (
                    <p className="text-red-500 text-xs">
                      {getError("lastname")}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {getError("email") && (
                    <p className="text-red-500 text-xs">{getError("email")}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {getError("phone") && (
                    <p className="text-red-500 text-xs">{getError("phone")}</p>
                  )}
                </div>
              </div>
              <Select value={form.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="frontend">
                      Custom Web Development
                    </SelectItem>
                    <SelectItem value="backend">
                      API Design and Development
                    </SelectItem>
                    <SelectItem value="fullstack">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="optimization">
                      Performance Optimization and Refactoring
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {getError("service") && (
                <span className="text-red-500 text-xs">
                  {getError("service")}
                </span>
              )}
              <Textarea
                name="message"
                placeholder="Your message"
                className="h-[200px] "
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {getError("message") && (
                <span className="text-red-500 text-xs">
                  {getError("message")}
                </span>
              )}
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={loading || isFormEmpty || !isFormValid}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
              {success && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <p className="text-xl">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
