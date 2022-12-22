import '../styles/Button.css';

export default function Button({ content, className = '' }) {
  return <button className={className}>{content}</button>;
}
