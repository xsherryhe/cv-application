import SelectField from './SelectField';

export default function MonthSelectField({
  value,
  required,
  submitted,
  handleChange,
}) {
  return (
    <SelectField
      name="month"
      value={value}
      options={[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]}
      required={required}
      submitted={submitted}
      handleChange={handleChange}
    />
  );
}
