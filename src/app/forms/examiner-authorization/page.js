import React from "react";
import {
  InputField,
  TextAreaField,
  CheckboxField,
  RadioField,
  ProfilePhotoUpload,
  SubmitButton,
} from "components/form"; // Assume these are the form components you already have

export const metadata = {
  title: "Examininer Authorization Form - WfskaIndia",
};

const ExaminerAuthorizationForm = () => {
  return (
    <section className="bg-white px-80 py-10 space-y-5">
      <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
        Examiner Authorization
      </h2>
      <form className="space-y-5">
        {/* Name of the Representative */}
        <ProfilePhotoUpload />

        <InputField
          label="Name of the Representative"
          type="text"
          name="representativeName"
        />

        {/* Name of the Style */}
        <InputField label="Name of the Style" type="text" name="styleName" />

        {/* Present Style Grade */}
        <InputField
          label="Present Style Grade Dan"
          type="text"
          name="presentStyleGrade"
        />

        {/* DOB */}
        <InputField label="DOB" type="date" name="dob" />

        {/* Age */}
        <InputField label="Age" type="number" name="age" />

        {/* Number of years in Martial arts */}
        <InputField
          label="Number of years in Martial arts"
          type="number"
          name="yearsInMartialArts"
        />

        {/* Number of Students */}
        <InputField
          label="Number of Students"
          type="number"
          name="numberOfStudents"
        />

        {/* History of Training, Education, Awards etc. */}
        <TextAreaField
          label="History of Training, Education, Awards etc."
          name="history"
          rows={5}
        />

        {/* Undertaking section */}
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

        {/* Signature, Date, Place */}
        <div className="flex flex-col space-y-4 mt-6">
          <InputField label="Place" type="text" name="place" />
          <InputField label="Date" type="date" name="date" />
        </div>

        {/* Signature of Applicant and Sensei */}
        <div className="flex justify-between mt-6">
          <div className="text-center">
            <p>Signature of Applicant</p>
            <p>Affiliated Instructor</p>
          </div>
          <div className="text-center">
            <p>Sensei Devidas Gopal Naik</p>
            <p>Chief Instructor/President WFSKA-INDIA</p>
          </div>
        </div>
        <SubmitButton />
      </form>
    </section>
  );
};

export default ExaminerAuthorizationForm;
