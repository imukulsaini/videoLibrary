import "./forminput.styles.css";

export function FormNamesInput(inputNameProps) {
  const {
    name,
    htmFor,
    required,
    pattern,
    placeholder,
    type,
    label,
    onChangeInput,
    value,
  } = inputNameProps;
  return (
    <div className="user__name">
      <label className="user__name-label"> {label} </label>
      <input
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        name={name}
        value={value}
        htmFor={htmFor}
        onChange={onChangeInput}
        className="user__input-name"
      />
    </div>
  );
}
