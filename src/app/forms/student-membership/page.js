import {
  InputField,
  RadioField,
  TextAreaField,
  CheckboxField,
  Label,
  ProfilePhotoUpload,
  SubmitButton,
} from "components/form";

export const metadata = {
  title: "Student Membership Form - WfskaIndia",
};

export default function Page() {
  return (
    <>
      <section className="bg-white px-80 py-10 space-y-5">
        <h2 className="bg-gray-200 p-4 rounded-md text-2xl text-center">
          Student Membership Form
        </h2>
        <form className="space-y-5">
          <ProfilePhotoUpload />
          <InputField label="Reg No" type="text" name="reg_no" />
          <InputField label="Name" type="text" name="name" />
          <InputField label="Date" type="date" name="date" />
          <InputField label="Father's Name" type="text" name="father_name" />
          <TextAreaField label="Address" name="address" />
          <InputField
            label="Telephone No/ Mobile No."
            type="text"
            name="phone"
          />
          <InputField
            label="Name of the School"
            type="text"
            name="school_name"
          />
          <InputField label="Standard (Std)" type="text" name="std" />
          <div className="flex flex-col">
            <Label text="Sex:" />
            <div className="flex">
              <RadioField label="Male" name="sex" value="Male" />
              <RadioField label="Female" name="sex" value="Female" />
            </div>
          </div>
          <InputField label="Date of Birth" type="date" name="dob" />
          <InputField label="Age" type="number" name="age" />
          <div className="flex flex-wrap gap-4">
            <InputField label="Height" type="text" name="height" />
            <InputField label="Weight" type="text" name="weight" />
          </div>
          <div className="flex flex-wrap gap-4">
            <InputField label="District" type="text" name="district" />
            <InputField label="State" type="text" name="state" />
          </div>
          <div className="flex flex-wrap gap-4">
            <InputField label="Taluka" type="text" name="taluka" />
            <InputField label="Pin Code" type="text" name="pin_code" />
          </div>
          {/* Open Tournament */}
          <div className="flex items-center gap-4">
            <Label text="Wish to participate in open tournament:" />
            <RadioField label="Yes" name="tournament" value="Yes" />
            <RadioField label="No" name="tournament" value="No" />
          </div>
          {/* Previous Experience */}
          <TextAreaField
            label="Previous Experience in Fitness Prog/ Martial Arts Training (Style / Rank / Duration)"
            name="experience"
          />
          {/* Health Details */}
          <div>
            <h3 className="font-semibold text-lg">Health Details (if any)</h3>
            <div className="flex flex-wrap gap-4">
              <CheckboxField
                label="Back Pains?"
                name="health"
                value="Back Pains"
              />
              <CheckboxField
                label="Blood Pressure?"
                name="health"
                value="Blood Pressure"
              />
              <CheckboxField label="Diabetes?" name="health" value="Diabetes" />
              <CheckboxField label="Asthma?" name="health" value="Asthma" />
              <CheckboxField
                label="High Fever?"
                name="health"
                value="High Fever"
              />
              <CheckboxField label="Epilepsy?" name="health" value="Epilepsy" />
              <CheckboxField label="Anxiety?" name="health" value="Anxiety" />
              <CheckboxField
                label="Heart Ailments?"
                name="health"
                value="Heart Ailments"
              />
              <CheckboxField label="Anemia?" name="health" value="Anemia" />
              <CheckboxField
                label="Joint Pains?"
                name="health"
                value="Joint Pains"
              />
              <CheckboxField
                label="Migraines?"
                name="health"
                value="Migraines"
              />
              <CheckboxField
                label="Sleeplessness?"
                name="health"
                value="Sleeplessness"
              />
              <CheckboxField
                label="Lacks of Concentration?"
                name="health"
                value="Lacks of Concentration"
              />
            </div>
            <TextAreaField label="Please Give Details" name="health_details" />
          </div>
          <div className="space-y-2">
            <p>
              <strong>Agreement:</strong> I acknowledge that I am undertaking
              this training course, at my own will & risk and I further submit
              that I do not hold <strong>WFSKA-INDIA</strong> the chief
              instructor or the other instructors responsible for any injuries
              or loss/ess incurred during or after undertaking this course or
              the training session(s).
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <InputField
              label="Student Signature"
              type="text"
              name="student_signature"
            />
            <InputField
              label="Parent's Signature"
              type="text"
              name="parent_signature"
            />
            <InputField
              label="Instructor Signature"
              type="text"
              name="instructor_signature"
            />
          </div>
          <InputField
            label="Date of Joining"
            type="date"
            name="date_of_joining"
          />
          {/* Submit */}
          <SubmitButton />
        </form>
      </section>
    </>
  );
}
