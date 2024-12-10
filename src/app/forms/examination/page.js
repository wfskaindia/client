"use client";

import { useState } from "react";
import {
  InputField,
  TextAreaField,
  PhotoUpload,
  SubmitButton,
} from "components/form";
import { Message } from "components/message";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    membership_no: "",
    period_of_practice: "",
    present_rank: "",
    rank_applied_for: "",
    last_certificate_no: "",
    date_of_certificate: "",
    date_of_examination: "",
    mobile_no: "",
  });

  const [photo, setPhoto] = useState("");
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
      const response = await fetch("http://localhost:5000/api/examination", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, photo }),
      });
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
        Examination Form
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {message.text ? (
          <Message type={message.type} text={message.text} />
        ) : null}
        <PhotoUpload onPhotoUpload={setPhoto} />

        <InputField
          label="Name:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required={true}
        />
        <TextAreaField
          label="Address:"
          name="address"
          rows={2}
          value={formData.address}
          onChange={handleChange}
          required={true}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Membership No.:"
            type="text"
            name="membership_no"
            value={formData.membership_no}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Period of Practice:"
            type="text"
            name="period_of_practice"
            value={formData.period_of_practice}
            onChange={handleChange}
            required={true}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField label="Present Rank:" type="text" name="present_rank" />
          <InputField
            label="Rank Applied For:"
            type="text"
            name="rank_applied_for"
            value={formData.rank_applied_for}
            onChange={handleChange}
            required={true}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Last Certificate No.:"
            type="text"
            name="last_certificate_no"
            value={formData.last_certificate_no}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Date:"
            type="date"
            name="date_of_certificate"
            value={formData.date_of_certificate}
            onChange={handleChange}
            required={true}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Date of Examination:"
            type="date"
            name="date_of_examination"
            value={formData.date_of_examination}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Mobile No (Whatsapp)"
            type="tel"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            required={true}
          />
        </div>
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
