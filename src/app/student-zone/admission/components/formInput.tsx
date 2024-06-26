type Prop = {
  placeholder?: string;
  htmlFor: string;
  label: string;
  onChange?: any;
  type: string;
  value?: string | number;
  defaultValue?: string | number;
  register?: any;
  disabled?: Boolean;
};
export default function Input({
  onChange,
  type,
  label,
  htmlFor,
  placeholder,
  value,
  defaultValue,
  disabled,
  register,
}: Prop) {
  return (
    <div className="w-full">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        type={type}
        id={htmlFor}
        {...register}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
        placeholder={placeholder}
      />
    </div>
  );
}
