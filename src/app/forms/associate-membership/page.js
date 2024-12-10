"use client";

import { useState } from "react";
import { InputField, TextAreaField, SubmitButton } from "components/form";
import { Message } from "components/message";

export default function Page() {
  const [formData, setFormData] = useState({
    representative_name: "",
    organisation_name: "",
    style_name: "",
    style_grade: "",
    date_of_birth: "",
    years_martial_arts: "",
    number_of_students: "",
    years_coaching: "",
    number_of_dojos: "",
    instructors: "",
    employment_type: "",
    training_history: "",
    address: "",
    state: "",
    pincode: "",
    mobile_no: "",
    email: "",
    date: "",
    recommended_by: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(null);

  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/associate-membership",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (result.success) {
        setMessage({ type: "success", text: "Form Submitted Successfully" });
        console.log("Form submitted successfully:", result);
      } else {
        setMessage({ type: "ERROR", text: result.message });
        console.log("Error Submitting Form");
      }
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:", error);
      setMessage({ type: "ERROR", text: error.message });
    }
  };
  return (
    <>
      <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
        Associate Membership State / District / Club Form
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {message.text ? (
          <Message type={message.type} text={message.text} />
        ) : null}
        <InputField
          label="Name of the Representative:"
          type="text"
          name="representative_name"
          value={formData.representative_name}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Name of the International/National Organisation if any:"
          type="text"
          name="organisation_name"
          value={formData.organisation_name}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Name of the Style (Shoto / Shito / Goju / Wado / Others):"
          type="text"
          name="style_name"
          value={formData.style_name}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Present Style Grade Dan:"
          type="text"
          name="style_grade"
          value={formData.style_grade}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Date Of Birth"
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          required={true}
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Number of years in Martial arts:"
            type="number"
            name="years_martial_arts"
            value={formData.years_martial_arts}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Number of Students:"
            type="number"
            name="number_of_students"
            value={formData.number_of_students}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Number of years in Coaching:"
            type="number"
            name="years_coaching"
            value={formData.years_coaching}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Number of Dojos:"
            type="number"
            name="number_of_dojos"
            value={formData.number_of_dojos}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Instructors under you:"
            type="text"
            name="instructors"
            value={formData.instructors}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Part Time / Full Time"
            type="text"
            name="employment_type"
            value={formData.employment_type}
            onChange={handleChange}
            required={true}
          />
        </div>
        <TextAreaField
          label="History of Training, Education, Awards etc."
          name="training_history"
          rows={3}
          value={formData.training_history}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Correspondence Address:"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required={true}
        />
        <div className="grid grid-cols-3 gap-4">
          <InputField
            label="State:"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Pin code:"
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Mob. No."
            type="tel"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            required={true}
          />
        </div>
        <InputField
          label="Email id"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        {/* Undertaking Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">UNDERTAKING</h2>
          <p>
            I/We hereby declare and confirm that this information furnished by
            me are true and grant of approval by WFSKA INDIA is subject to
            abiding by the rules regulations terms and conditions followed by me
            and my instructors / students. I agree to conduct karate classes /
            seminars as per the guidelines of WFSKA INDIA. I agree that I shall
            participate in all the events conducted / hosted by WFSKA INDIA for
            the development of karate in the interest of my students. I
            understand that the request for the renewal of the approval would be
            required to be made by a fresh application once expired.
          </p>
          <p className="text-red-600">
            I understand and accept that WFSKA INDIA has the rights to cancel
            the recognition granted to me at any time incase of me or my
            association / style involve in any antiassociation or anti WFSKAI /
            KIO / WKF / TKAG Karate Do activity.
          </p>
        </div>
        <InputField
          label="Date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Recommended By"
          type="text"
          name="recommended_by"
          value={formData.recommended_by}
          onChange={handleChange}
          required={true}
        />
        {isSubmitting ? (
          <SubmitButton text="Submitting" />
        ) : (
          <SubmitButton text="Submit" />
        )}
        {message.text ? (
          <Message type={message.type} text={message.text} />
        ) : null}
      </form>
    </>
  );
}
