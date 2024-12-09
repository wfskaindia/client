import React from "react";
import {
  InputField,
  TextAreaField,
  Label,
  ProfilePhotoUpload,
  SubmitButton,
} from "components/form"; // Assume these are the form components you already have

export const metadata = {
  title: "Examination Form - WfskaIndia",
};

const ExaminerAuthorizationForm = () => {
  return (
    <>
      <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
        Examination Form
      </h2>
      <form className="space-y-5">
        {/* Name of the Representative */}
        <ProfilePhotoUpload />

        {/* Form Fields */}
        <InputField label="Name:" type="text" name="name" />
        <TextAreaField label="Address:" name="address" rows={2} />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Membership No.:"
            type="text"
            name="membership_no"
          />
          <InputField
            label="Period of Practice:"
            type="text"
            name="period_of_practice"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField label="Present Rank:" type="text" name="present_rank" />
          <InputField
            label="Rank Applied For:"
            type="text"
            name="rank_applied_for"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Last Certificate No.:"
            type="text"
            name="last_certificate_no"
          />
          <InputField label="Date:" type="date" name="date_of_certificate" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Date of Examination:"
            type="date"
            name="date_of_examination"
          />
          <InputField
            label="Mobile No (Whatsapp)"
            type="tel"
            name="mobile_no"
          />
        </div>

        {/* <InputField
          label="Monthly Fees paid up to (month):"
          type="text"
          name="fees_paid_upto"
        />
        <InputField
          label="Examination Fees:"
          type="number"
          name="examination_fees"
        /> */}

        {/* <div className="flex justify-between mt-8">
          <div className="flex-1">
            <Label text="Signature of the Student:" />
            <input
              type="text"
              name="student_signature"
              readOnly
              className="w-full border-b border-gray-300 mt-2 p-1"
              placeholder="Sign here"
            />
          </div>
          <div className="flex-1">
            <Label text="Signature of Parents:" />
            <input
              type="text"
              name="parent_signature"
              readOnly
              className="w-full border-b border-gray-300 mt-2 p-1"
              placeholder="Sign here"
            />
          </div>
        </div> */}

        <SubmitButton />
      </form>
    </>
  );
};

export default ExaminerAuthorizationForm;
