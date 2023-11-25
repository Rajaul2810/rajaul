"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowRight, FiCheckCircle, FiMail, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { useForm } from "@formspree/react";
import Link from "next/link";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [state, onSubmit] = useForm("mrgwwezb");
  if (state.succeeded) {
    return (
      <div className=" min-h-screen bg-slate-100 flex justify-center items-center">
        <div className=" bg-white shadow-md rounded-md p-5">
          <div className=" flex justify-center">
            <p className=" btn btn-circle bg-slate-300 hover:bg-slate-400 shadow-xl ">
              <FiCheckCircle size={25} color="green"/>
            </p>
          </div>
          <div className=" flex flex-col justify-center pt-5 ">
            <p className=" text-center font-bold text-lg">Thank You</p>
            <p className=" text-sm text-gray-600 text-center">
              I will response in a short time.
            </p>
            <Link href="/"
              
              className="btn btn-ghost mt-5"
            >
              Go Home <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // const onSubmit = (values, { resetForm }) => {
  //   // Handle form submission logic here
  //   console.log("Form submitted:", values);
  //   resetForm();
  // };

  return (
    <div className="min-h-screen bg-slate-100 py-5">
      <div className="pb-10">
        <h1 className=" text-center text-3xl font-bold pt-10 drop-shadow-md">
          Get In Touch
        </h1>
        <p className=" text-center text-gray-400">Contact Me</p>
      </div>
      <div className=" flex justify-center items-center ">
        <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className=" flex flex-col justify-center items-center">
            <div>
              <div className=" bg-white shadow-sm rounded-md p-5 w-72">
                <div className=" flex justify-center">
                  <p className=" btn btn-circle bg-amber-300 hover:bg-amber-400 shadow-xl ">
                    <FiMail />
                  </p>
                </div>
                <div className=" flex flex-col justify-center pt-5 ">
                  <p className=" text-center font-bold text-lg">MailBox</p>
                  <p className=" text-sm text-gray-600 text-center">
                    rajaulkarim2810@gmail.com
                  </p>
                  <a
                    href="mailto:rajaulkarim2810@gmail.com"
                    target="_blank"
                    className="heroBtn mt-5"
                  >
                    Send Mail <FiSend />
                  </a>
                </div>
              </div>
              <div className=" bg-white shadow-sm rounded-md p-5 w-72 mt-5">
                <div className=" flex justify-center">
                  <p className=" btn btn-circle bg-amber-300 hover:bg-amber-400 shadow-xl ">
                    <FaWhatsapp />
                  </p>
                </div>
                <div className=" flex flex-col justify-center pt-5 ">
                  <p className=" text-center font-bold text-lg">WhatsApp</p>
                  <p className=" text-sm text-gray-600 text-center">
                    +880 1776030787
                  </p>
                  <a
                    href="https://wa.me/01776030787"
                    target="_blank"
                    className="heroBtn mt-5"
                  >
                    Send Message <FiSend />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white p-3 rounded-md shadow-sm">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className=" w-full px-5">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-medium"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-600 font-medium"
                  >
                    Subject
                  </label>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-600 font-medium"
                  >
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="heroBtn"
                >
                  Submit <FiSend />
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
