

const FloatingInputb = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  required = false,
  ...props
}) => {
  return (
    <div className="relative w-full">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`peer h-12 w-full border-b border-gray-700 bg-transparent pt-6 px-2 text-sm 
        text-dark placeholder-transparent dark:peer-focus:text-white dark:border-b dark:border-white    focus:outline-none`}
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 top-2 text-sm text-dark/70 transition-all peer-placeholder-shown:top-4 
          peer-placeholder-shown:text-sm peer-placeholder-shown:text-dark/50 peer-focus:top-2 peer-focus:text-sm 
          dark:peer-focus:text-white peer-focus:text-indigo-500 `}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInputb;
