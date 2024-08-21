import { styled } from '@mui/material';

const Root = styled('div')({
  backgroundColor: '#A6A6A6',
  color: '#000000',
  fontSize: 13,
  fontWeight: 500,
  fontFamily: 'Poppins, sans-serif',
  borderRadius: 4,
  padding: '0 12px',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const TagListItem = ({ tag }) => {
  return <Root>{tag}</Root>;
};

export default TagListItem;
