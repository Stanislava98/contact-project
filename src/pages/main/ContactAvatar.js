const ContactAvatar = ({ avatar, size }) => {
  return (
    <div style={{ width: size, height: size }}>
      <img src={avatar} style={{ borderRadius: '50%' }} alt="User-avatar" />
    </div>
  );
};

export default ContactAvatar;
