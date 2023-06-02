import { createTheme } from '@mui/material/styles';
import { green, 
         purple, 
         blue, 
         yellow, 
         grey} from '@mui/material/colors';
import changeMode from './utils';

const theme = createTheme({
    palette: {
        mode: 'dark',
        default:{
            main: grey[900],
        },
        dark:{
            main: "#122121"
        },
        white:{ 
            main: "#f5f5f5"
        },
        primary: {
            main: blue[900],
            soft: blue[400]
    },
    secondary: {
        main: yellow[500],
    }
    },
    typography: {
        fontFamily: 'DM Sans',
      },
});

export default theme;