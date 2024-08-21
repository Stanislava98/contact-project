import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)({
  height: 44,
  border: '1px solid #AAAAAA',
  fontFamily: 'Poppins, sans-serif',
  color: '#000000',
  fontWeight: 500,
  fontSize: 16,
  borderRadius: 4,
  '&:hover': {
    borderColor: '#7E7C7C',
    backgroundColor: '#F1F1F1',
  },
});

const OutlinedButton = ({ text, onClick }) => {
  return (
    <StyledButton variant="outlined" type="submit" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default OutlinedButton;
