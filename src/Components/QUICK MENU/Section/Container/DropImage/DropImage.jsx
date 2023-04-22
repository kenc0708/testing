import './dropimage.css'
import UploadForm from '../../../Community Page/Gallery Page/UploadForm'


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DropImage = ({ setPhoto }) => {
  return (
    <Stack className='BoxContainer'  spacing={2}>
        <Stack className="a" >
          <span className='title'>Add Image Here</span>
          </Stack>
          
        <Stack className="b" >
        
        <UploadForm setPhoto={setPhoto} />  
          
          </Stack>
        
    </Stack>
  )
}

export default DropImage
