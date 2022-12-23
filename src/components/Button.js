import '../styles/Button.css';

export default function Button({
  content,
  className = '',
  type = 'button',
  handleClick = () => {},
}) {
  return (
    <button type={type} className={className} onClick={handleClick}>
      {content}
    </button>
  );
}
