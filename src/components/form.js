"use client";
import { useState } from "react";

export const Label = ({ text, forf }) => {
  return (
    <label htmlFor={forf} className="text-xl">
      {text}
    </label>
  );
};
export const InputContainer = ({ children }) => {
  return (
    <>
      <div className="flex flex-col space-y-2">{children}</div>
    </>
  );
};

export const InputField = ({ label, type, name }) => (
  <InputContainer>
    <Label text={label} />
    <input
      type={type}
      name={name}
      className="rounded-md border border-gray-200 p-3"
    />
  </InputContainer>
);

export const TextAreaField = ({ label, name, rows = 3 }) => (
  <InputContainer>
    <Label text={label} />
    <textarea
      name={name}
      rows={rows}
      className="rounded-md border border-gray-200 p-2"
    ></textarea>
  </InputContainer>
);

// Checkbox component
export const CheckboxField = ({ label, name, value }) => (
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      name={name}
      value={value}
      className="mr-2 scale-125"
      id={value}
    />
    <Label forf={label} text={value} />
  </div>
);

export const SubmitButton = () => {
  return (
    <>
      {" "}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </>
  );
};

// RadioButton component
export const RadioField = ({ label, name, value }) => (
  <div className="flex items-center mr-4">
    <input type="radio" name={name} value={value} className="mr-2" />
    <Label text={label} />
  </div>
);

export const ProfilePhotoUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <InputContainer>
      <Label text="Upload Photo" />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {selectedImage && (
        <div className="mt-2">
          <p className="text-sm text-gray-500 mb-2">Preview:</p>
          <img
            src={selectedImage}
            alt="Profile Preview"
            className="w-32 h-32 object-cover rounded-md border-2 border-gray-300"
          />
        </div>
      )}
    </InputContainer>
  );
};
