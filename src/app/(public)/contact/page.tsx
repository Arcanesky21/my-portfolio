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
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 sm:p-10"
              onSubmit={handleSubmit}
              noValidate
            >
              <h3 className="text-3xl font-bold text-primary sm:text-4xl">
                Let&apos;s work together
              </h3>
              <p className="text-muted-foreground">
                Feel free to reach out using the form below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <Input
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    aria-label="First name"
                    aria-invalid={!!getError("firstname")}
                    value={form.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {getError("firstname") && (
                    <p className="text-destructive text-sm">
                      {getError("firstname")}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    aria-label="Last name"
                    aria-invalid={!!getError("lastname")}
                    value={form.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {getError("lastname") && (
                    <p className="text-destructive text-sm">
                      {getError("lastname")}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    aria-invalid={!!getError("email")}
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {getError("email") && (
                    <p className="text-destructive text-sm">{getError("email")}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    aria-label="Phone number"
                    aria-invalid={!!getError("phone")}
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {getError("phone") && (
                    <p className="text-destructive text-sm">{getError("phone")}</p>
                  )}
                </div>
              </div>
              <Select value={form.service} onValueChange={handleServiceChange}>
                <SelectTrigger
                  className="w-full"
                  aria-label="Service"
                  aria-invalid={!!getError("service")}
                >
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
                <span className="text-destructive text-sm">
                  {getError("service")}
                </span>
              )}
              <Textarea
                name="message"
                placeholder="Your message"
                aria-label="Your message"
                aria-invalid={!!getError("message")}
                className="h-[200px]"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {getError("message") && (
                <span className="text-destructive text-sm">
                  {getError("message")}
                </span>
              )}
              <Button
                size="md"
                className="w-full sm:w-auto sm:min-w-40"
                type="submit"
                disabled={loading || isFormEmpty || !isFormValid}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
              {success && (
                <p role="status" className="text-success">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p role="alert" className="text-destructive">
                  {error}
                </p>
              )}
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-5">
                    <div className="flex size-14 items-center justify-center rounded-lg border border-border bg-card text-primary xl:size-16">
                      <div className="text-2xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="text-lg font-medium">{item.description}</p>
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
