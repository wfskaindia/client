import React from "react";
import {
  InputField,
  TextAreaField,
  Label,
  ProfilePhotoUpload,
  SubmitButton,
} from "components/form";

export const metadata = {
  title: "Associate Membership Form - WfskaIndia",
};

const ExaminerAuthorizationForm = () => {
  return (
    <section className="bg-white px-80 py-10 space-y-5">
      <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
        Associate Membership State / District / Club Form
      </h2>
      <form className="space-y-5">
        {/* Form Fields */}
        <InputField
          label="Name of the Representative:"
          type="text"
          name="representative_name"
        />
        <InputField
          label="Name of the International/National Organisation if any:"
          type="text"
          name="organisation_name"
        />

        <InputField
          label="Name of the Style (Shoto / Shito / Goju / Wado / Others):"
          type="text"
          name="style_name"
        />

        <InputField
          label="Present Style Grade Dan:"
          type="text"
          name="style_grade"
        />
        <InputField label="DOB" type="date" name="dob" />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Number of years in Martial arts:"
            type="number"
            name="years_martial_arts"
          />
          <InputField
            label="Number of Students:"
            type="number"
            name="number_of_students"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Number of years in Coaching:"
            type="number"
            name="years_coaching"
          />
          <InputField
            label="Number of Dojos:"
            type="number"
            name="number_of_dojos"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Instructors under you:"
            type="text"
            name="instructors"
          />
          <InputField
            label="Part Time / Full Time"
            type="text"
            name="employment_type"
          />
        </div>

        <TextAreaField
          label="History of Training, Education, Awards etc."
          name="training_history"
          rows={3}
        />

        <InputField
          label="Correspondence Address:"
          type="text"
          name="address"
        />

        <div className="grid grid-cols-3 gap-4">
          <InputField label="State:" type="text" name="state" />
          <InputField label="Pin code:" type="text" name="pincode" />
          <InputField label="Mob. No." type="tel" name="mobile_no" />
        </div>

        <InputField label="Email id" type="email" name="email" />

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

        {/* Signatures */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex-1">
            <Label text="Signature of Representative:" />
            <input
              type="text"
              name="signature_representative"
              readOnly
              className="w-full border-b border-gray-300 mt-2 p-1"
              placeholder="Sign here"
            />
          </div>
          <div className="flex-1">
            <Label text="Date:" />
            <input
              type="date"
              name="date"
              className="w-full border-b border-gray-300 mt-2 p-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex-1">
            <Label text="Recommended by:" />
            <input
              type="text"
              name="recommended_by"
              readOnly
              className="w-full border-b border-gray-300 mt-2 p-1"
              placeholder="Sign here"
            />
          </div>
          <div className="flex-1">
            <Label text="Signature:" />
            <input
              type="text"
              name="signature"
              readOnly
              className="w-full border-b border-gray-300 mt-2 p-1"
              placeholder="Sign here"
            />
          </div>
        </div>

        <SubmitButton />
      </form>
    </section>
  );
};

export default ExaminerAuthorizationForm;
