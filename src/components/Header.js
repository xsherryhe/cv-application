import Avatar from './Avatar';

export default function Header({ avatarImage }) {
  return (
    <div className="header">
      <Avatar image={avatarImage} />
    </div>
  );
}
