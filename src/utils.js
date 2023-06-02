import theme from "./Theme";


function changeMode(theme){
    switch (theme.palette.mode) {
        case 'light':
            localStorage.removeItem('modeTheme');
            theme.palette.mode = 'dark';
            localStorage.setItem('modeTheme', theme.palette.mode);
            break;
        case 'dark':
            localStorage.removeItem('modeTheme');
            theme.palette.mode = 'light';
            localStorage.setItem('modeTheme', theme.palette.mode);
        break;
    }
};

export default changeMode;