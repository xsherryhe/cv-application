import '../styles/Button.css';

export default function Button({
  content,
  className = '',
  type = 'button',
  disabled = false,
  handleClick = () => {},
}) {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
