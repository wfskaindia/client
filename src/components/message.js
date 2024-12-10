export const Message = ({ type, text }) => {
  return (
    <div
      className={`p-4 font-bold rounded-md ${
        type == "success" ? "bg-green-400 text-white" : "bg-red-500 text-white"
      }`}
    >
      {text}
    </div>
  );
};
