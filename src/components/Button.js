import '../styles/Button.css';

export default function Button({
  content,
  className = '',
  handleClick = () => {},
}) {
  return (
    <button className={className} onClick={handleClick}>
      {content}
    </button>
  );
}
