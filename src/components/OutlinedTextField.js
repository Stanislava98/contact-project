import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { forwardRef } from 'react';

const TextFieldContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

const Label = styled('div')({
  fontFamily: 'Poppins, sans-serif',
  fontSize: 12,
  paddingLeft: 6,
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    width: 280,
    height: 46,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7E7C7C',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7E7C7C',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #AAAAAA',
    borderRadius: 8,
  },
  '& .MuiInputBase-input': {
    padding: '11px 14px',
  },
});

const OutlinedTextField = forwardRef(({ label, ...props }, ref) => {
  return (
    <TextFieldContainer>
      <Label>{label}</Label>
      <StyledTextField variant="outlined" {...props} ref={ref} />
    </TextFieldContainer>
  );
});

export default OutlinedTextField;
