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
      <div className="flex flex-col space-y-2 w-full">{children}</div>
    </>
  );
};

export const InputField = ({
  label,
  type,
  name,
  value,
  required,
  onChange,
}) => (
  <InputContainer>
    <Label text={label} />
    <input
      type={type}
      name={name}
      value={value}
      className="rounded-md border border-gray-600 p-3 "
      onChange={onChange}
      required={required}
    />
  </InputContainer>
);

export const TextAreaField = ({
  label,
  name,
  value,
  rows = 3,
  required,
  onChange,
}) => (
  <InputContainer>
    <Label text={label} />
    <textarea
      name={name}
      value={value}
      rows={rows}
      className="rounded-md border border-gray-600 p-2"
      required={required}
      onChange={onChange}
    ></textarea>
  </InputContainer>
);

// Checkbox component
export const CheckboxField = ({ label, name, value, checked, onChange }) => (
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      name={name}
      value={value}
      className="mr-2 scale-125"
      id={value}
      checked={checked}
      onChange={onChange}
    />
    <Label forf={label} text={value} />
  </div>
);

export const SubmitButton = ({ text }) => {
  return (
    <>
      {" "}
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          {text}
        </button>
      </div>
    </>
  );
};

// RadioButton component
export const RadioField = ({ label, name, value, checked, onChange }) => (
  <div className="flex items-center mr-4">
    <input
      type="radio"
      name={name}
      value={value}
      className="mr-2"
      id={value}
      checked={checked}
      onChange={onChange}
      required
    />
    <Label text={label} forf={value} />
  </div>
);

export const PhotoUpload = ({ onPhotoUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Base64 string
        setPreviewImage(URL.createObjectURL(file)); // Local preview
        if (onPhotoUpload) onPhotoUpload(reader.result); // Pass Base64 to parent
      };
      reader.readAsDataURL(file);
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
            src={previewImage}
            alt="Profile Preview"
            className="w-32 h-32 object-cover rounded-md border-2 border-gray-300"
          />
        </div>
      )}
    </InputContainer>
  );
};
