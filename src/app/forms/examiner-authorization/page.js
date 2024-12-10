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
    representativeName: "",
    styleName: "",
    presentStyleGrade: "",
    date_of_birth: "",
    yearsInMartialArts: "",
    numberOfStudents: "",
    history: "",
    place: "",
    date: "",
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
      const response = await fetch(
        "http://localhost:5000/api/examiner-authorization",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, photo }),
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
        Examiner Authorization
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        {message.text ? (
          <Message type={message.type} text={message.text} />
        ) : null}
        <PhotoUpload onPhotoUpload={setPhoto} />

        <InputField
          label="Name of the Representative"
          type="text"
          name="representativeName"
          value={formData.representativeName}
          onChange={handleChange}
          required={true}
        />

        <InputField
          label="Name of the Style"
          type="text"
          name="styleName"
          value={formData.styleName}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Present Style Grade Dan"
          type="text"
          name="presentStyleGrade"
          value={formData.presentStyleGrade}
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

        <InputField
          label="Number of years in Martial arts"
          type="number"
          name="yearsInMartialArts"
          value={formData.yearsInMartialArts}
          onChange={handleChange}
          required={true}
        />

        <InputField
          label="Number of Students"
          type="number"
          name="numberOfStudents"
          value={formData.numberOfStudents}
          onChange={handleChange}
          required={true}
        />

        <TextAreaField
          label="History of Training, Education, Awards etc."
          name="history"
          rows={5}
          value={formData.history}
          onChange={handleChange}
          required={true}
        />

        <h2 className="text-lg font-bold text-center my-4">UNDERTAKING</h2>

        <ul className="list-decimal ml-8 space-y-2">
          <li>
            I am intending to be legally bound hereby as a condition
            affiliation/Membership of WFSKA-INDIA.
          </li>
          <li>
            Students who are getting training under my instructions shall be
            examined finally by the Chief Instructor WFSKA-INDIA.
          </li>
          <li>
            I shall give all information of my activities to the WFSKA-INDIA. I
            shall not entertain any other organization and karate Instructor.
          </li>
          <li>
            I shall be responsible for the supervision if I work against the
            above said rules as laid by WFSKA-INDIA from time to time.
          </li>
          <li>
            I have read all the above conditions and hereby agree to abide by
            the rules and regulations.
          </li>
          <li>
            All the matters concerning the Instructors WORLD FUNAKOSHI SHOTOKAN
            KARATE ASSOCIATION INDIA. Secretary shall be subject only to the
            jurisdiction of the courts of law at Goa.
          </li>
          <li>
            Without WFSKA-INDIA no objection Certificate, I can not join any
            other Organization/Association or Federation.
          </li>
        </ul>

        <div className="flex flex-col space-y-4 mt-6">
          <InputField
            label="Place"
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required={true}
          />
          <InputField
            label="Date"
            type="date"
            name="date"
            value={formData.date}
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
