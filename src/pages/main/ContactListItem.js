import { styled } from '@mui/material';
import CancelOutlinedIcon from 'components/icons/CancelOutlinedIcon';
import ContactAvatar from './ContactAvatar';
import { useNavigate } from 'react-router-dom';
import useDeleteContact from 'hooks/useDeleteContact';
import TagList from 'pages/contact-profile/TagList';

const Root = styled('div')({
  backgroundColor: '#EDEDED',
  fontFamily: 'Poppins, sans-serif',
  borderRadius: 4,
  width: 328,
  padding: 12,
  position: 'relative',
  fontWeight: 500,
  fontSize: 16,
  ':hover': {
    backgroundColor: '#e3e2e2',
    cursor: 'pointer',
  },
  '@media(min-width: 900px)': {
    padding: 18,
    maxHeight: 700,
    width: 558,
  },
});

const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '68%',
  gap: 15,
  '@media(min-width: 900px)': {
    maxWidth: '80%',
  },
});

const CancelButtonContainer = styled('div')({
  position: 'absolute',
  cursor: 'pointer',
  zIndex: 40,
  right: 15,
  top: 9,
});

const ContactInfo = styled('div')({
  display: 'flex',
  gap: 15,
});

const TitleContainer = styled('div')({
  display: 'flex',
  gap: 5,
  flexWrap: 'wrap',
});

const Title = styled('p')({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '45%',
  gap: 5,
  '@media(min-width: 900px)': {
    maxWidth: '40%',
  },
});

const Email = styled('div')({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const ContactListItem = ({ contact }) => {
  const navigate = useNavigate();
  const { deleteContact } = useDeleteContact();

  const handleOpen = () => {
    navigate(`/contact/${contact.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteContact(contact.id);
  };

  return (
    <Root onClick={handleOpen}>
      <ContactInfo>
        <ContactAvatar avatar={contact.avatarUrl} size={54} />
        <TextContainer>
          <div>
            <TitleContainer>
              <Title>{contact.firstName}</Title>
              <Title>{contact.lastName}</Title>
            </TitleContainer>
            <Email key={contact.email.id} className="contact-text">
              {contact.email}
            </Email>
          </div>
          <TagList tags={contact.tags} />
        </TextContainer>
      </ContactInfo>
      <CancelButtonContainer onClick={handleDelete}>
        <CancelOutlinedIcon size="24" />
      </CancelButtonContainer>
    </Root>
  );
};

export default ContactListItem;
