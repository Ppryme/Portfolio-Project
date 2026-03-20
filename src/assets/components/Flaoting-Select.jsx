

export default function FloatingSelect({ label, name, options, darkMode }) {
  return (
    <div className="relative w-full">
      <select
        name={name}
        className={`peer w-full bg-transparent font-bold px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 
           "dark:text-white darkborder-gray-500  text-gray-800`}
        defaultValue=""
      >
        <option value="" disabled hidden></option>
        {options.map((option, idx) => (
          <option
            key={idx}h4
            value={option}
            className={`dark:bg-[#0a2e54] dark:text-white bg-white text-gray-800`}
          >
            {option}
          </option>
        ))}
      </select>

      {/* Floating label */}
      <label
        className={`absolute left-4 top-2.5 text-gray-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500
          dark:peer-focus:text-white" `}
      >
        {label}
      </label>
    </div>
  );
}
