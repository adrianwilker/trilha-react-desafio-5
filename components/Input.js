export default function Input({ placeholder, ariaLabel, value, onChange }) {
  return (
    <input
      type="text"
      className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder:italic mb-2"
      placeholder={placeholder}
      ariaLabel={ariaLabel}
      minLength={5}
      maxLength={100}
      required
      value={value}
      onChange={onChange}
    ></input>
  );
}
