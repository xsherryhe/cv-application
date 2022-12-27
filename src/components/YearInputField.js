import InputField from './InputField';

export default function YearInputField({
  value,
  required,
  submitted,
  handleChange,
}) {
  return (
    <InputField
      name="year"
      type="number"
      min={0}
      max={new Date().getFullYear()}
      value={value}
      required={required}
      submitted={submitted}
      handleChange={handleChange}
    />
  );
}
