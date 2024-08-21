import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContactAvatar from 'pages/main/ContactAvatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import OutlinedButton from 'components/OutlinedButton';
import useAddTag from 'hooks/useAddTag';
import { useState } from 'react';
import TagList from './TagList';
import useLoadContactProfile from 'hooks/useLoadContactProfile';

const Root = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  minWidth: 400,
  fontFamily: 'Poppins, sans-serif',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 22,
  position: 'relative',
  fontWeight: 500,
  fontSize: 16,
  '@media(min-width: 900px)': {
    paddingTop: 32,
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: 1280,
  },
});

const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '68%',
  '@media(min-width: 900px)': {
    maxWidth: '80%',
  },
});

const ButtonContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase',
  gap: 5,
  cursor: 'pointer',
  fontSize: 12,
  fontWeight: 700,
  position: 'absolute',
  right: 15,
  top: 15,
  '@media(min-width: 900px)': {
    maxWidth: '80%',
    left: 0,
  },
});

const ContactContainer = styled('div')({
  display: 'flex',
  minWidth: 400,
  gap: 15,
  '@media(min-width: 900px)': {
    minWidth: 500,
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderRadius: 8,
  },
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

const ContactProfile = () => {
  const navigate = useNavigate();
  const { contact, updateContact } = useLoadContactProfile();
  const { addTag } = useAddTag(contact && contact.id);
  const [newTag, setNewTag] = useState('');

  const handleClick = () => {
    navigate(`/`);
  };

  const handleAddTag = () => {
    const currentTags = contact.tags.map((tag) => tag.tag);
    const tagsToAdd = newTag
      .split(',')
      .map((tag) => tag.trim())
      .filter((tag) => tag !== '');
    const updatedTags = [...currentTags, ...tagsToAdd];

    const tag = tagsToAdd.map((tag) => ({
      id: `${contact.id}/${tag}`,
      tag,
    }));

    if (tagsToAdd.length > 0) {
      addTag(updatedTags)
        .then((response) => {
          if (response && response.data) {
            setNewTag('');
            updateContact(tag);
          }
        })
        .catch((err) => {
          console.error('err', err);
        });
    }
  };

  if (!contact) {
    return null;
  }

  return (
    <Root>
      <ButtonContainer onClick={handleClick}>
        <ArrowBackIcon />
        <div>back list</div>
      </ButtonContainer>
      <div className="flex gap-8 flex-col max-w-[500px]">
        <ContactContainer>
          <ContactAvatar avatar={contact.avatarUrl} size={76} />
          <TextContainer>
            <TitleContainer>
              <Title>{contact.firstName}</Title>
              <Title>{contact.lastName}</Title>
            </TitleContainer>
            <Email className="contact-text">{contact.email}</Email>
          </TextContainer>
        </ContactContainer>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div>Tags</div>
            {contact.tags.length > 0 && <TagList tags={contact.tags} />}
          </div>
          <StyledTextField
            id="outlined-basic"
            label="Add new tag"
            variant="outlined"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
          <OutlinedButton text="Add tag" onClick={handleAddTag} />
        </div>
      </div>
    </Root>
  );
};

export default ContactProfile;
