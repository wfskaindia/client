"use client";
import {
  InputField,
  RadioField,
  TextAreaField,
  CheckboxField,
  Label,
  ProfilePhotoUpload,
  SubmitButton,
} from "components/form";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    address: "",
    phone: "",
    school_name: "",
    std: "",
    sex: "",
    date_of_birth: "",
    age: "",
    height: "",
    weight: "",
    district: "",
    state: "",
    taluka: "",
    pin_code: "",
    wish_to_participate_in_tournament: "", // Will be a boolean, stored as 'Yes' or 'No'
    experience: "",
    health_conditions: [], // Array to store selected health conditions
    more_health_details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "checkbox") {
      setFormData((prevData) => {
        const newHealthConditions = e.target.checked
          ? [...prevData.health_conditions, value]
          : prevData.health_conditions.filter((val) => val !== value);
        return { ...prevData, health_conditions: newHealthConditions };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        "http://localhost:5000/api/student-membership",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
      } else {
        console.log("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
        Student Membership Form
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <ProfilePhotoUpload />
        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Father's Name"
          type="text"
          name="father_name"
          value={formData.father_name}
          onChange={handleChange}
          required={true}
        />

        <InputField
          label="Mobile No (Whatsapp)"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required={true}
        />
        <InputField
          label="Name of the School"
          type="text"
          name="school_name"
          value={formData.school_name}
          onChange={handleChange}
          required={true}
        />
        <InputField
          required={true}
          label="Standard (Std)"
          type="text"
          name="std"
          onChange={handleChange}
          value={formData.std}
        />
        <div className="flex gap-4">
          <Label text="Sex:" />
          <div className="flex">
            <RadioField
              label="Male"
              name="sex"
              value="Male"
              checked={formData.sex === "Male"}
              onChange={handleChange}
            />
            <RadioField
              label="Female"
              name="sex"
              value="Female"
              checked={formData.sex === "Female"}
              onChange={handleChange}
            />
          </div>
        </div>
        <InputField
          label="Date of Birth"
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          required={true}
        />
        <div className="flex gap-4">
          <InputField
            required={true}
            label="Height"
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
          <InputField
            required={true}
            label="Weight"
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <TextAreaField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required={true}
        />
        <div className="flex gap-4">
          <InputField
            required={true}
            label="District"
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
          <InputField
            required={true}
            label="State"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-4">
          <InputField
            required={true}
            label="Taluka"
            type="text"
            name="taluka"
            value={formData.taluka}
            onChange={handleChange}
          />
          <InputField
            required={true}
            label="Pin Code"
            type="text"
            name="pin_code"
            value={formData.pin_code}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-4">
          <Label text="Wish to participate in open tournament:" />
          <RadioField
            label="Yes"
            name="wish_to_participate_in_tournament"
            value="1"
            checked={formData.wish_to_participate_in_tournament === "1"}
            onChange={handleChange}
          />
          <RadioField
            label="No"
            name="wish_to_participate_in_tournament"
            value="0"
            checked={formData.wish_to_participate_in_tournament === "0"}
            onChange={handleChange}
          />
        </div>
        <TextAreaField
          label="Previous Experience in Fitness Program/ Martial Arts Training (Style / Rank / Duration)"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <div>
          <h3 className="font-semibold text-lg">Health Details (if any)</h3>
          <div className="flex flex-wrap gap-4">
            <CheckboxField
              label="Back Pains?"
              name="health_conditions"
              value="Back Pains"
              checked={formData.health_conditions.includes("Back Pains")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Blood Pressure?"
              name="health_conditions"
              value="Blood Pressure"
              checked={formData.health_conditions.includes("Blood Pressure")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Diabetes?"
              name="health_conditions"
              value="Diabetes"
              checked={formData.health_conditions.includes("Diabetes")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Asthma?"
              name="health_conditions"
              value="Asthma"
              checked={formData.health_conditions.includes("Asthma")}
              onChange={handleChange}
            />
            <CheckboxField
              label="High Fever?"
              name="health_conditions"
              value="High Fever"
              checked={formData.health_conditions.includes("High Fever")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Epilepsy?"
              name="health_conditions"
              value="Epilepsy"
              checked={formData.health_conditions.includes("Epilepsy")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Anxiety?"
              name="health_conditions"
              value="Anxiety"
              checked={formData.health_conditions.includes("Anxiety")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Heart Ailments?"
              name="health_conditions"
              value="Heart Ailments"
              checked={formData.health_conditions.includes("Heart Ailments")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Anemia?"
              name="health_conditions"
              value="Anemia"
              checked={formData.health_conditions.includes("Anemia")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Joint Pains?"
              name="health_conditions"
              value="Joint Pains"
              checked={formData.health_conditions.includes("Joint Pains")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Migraines?"
              name="health_conditions"
              value="Migraines"
              checked={formData.health_conditions.includes("Migraines")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Sleeplessness?"
              name="health_conditions"
              value="Sleeplessness"
              checked={formData.health_conditions.includes("Sleeplessness")}
              onChange={handleChange}
            />
            <CheckboxField
              label="Lacks of Concentration?"
              name="health_conditions"
              value="Lacks of Concentration"
              checked={formData.health_conditions.includes(
                "Lacks of Concentration"
              )}
              onChange={handleChange}
            />
          </div>
          <TextAreaField
            label="Please Give Additional Details"
            name="more_health_details"
            value={formData.more_health_details}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <p>
            <strong>Agreement:</strong> I acknowledge that I am undertaking this
            training course, at my own will & risk and I further submit that I
            do not hold <strong>WFSKA-INDIA</strong> the chief instructor or the
            other instructors responsible for any injuries or loss/ess incurred
            during or after undertaking this course or the training session(s).
          </p>
        </div>
        <SubmitButton />
      </form>
    </>
  );
}
