import { createMuiTheme } from '@material-ui/core/styles';

// Custom theme for app
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4dabf5',
            // main: '#2196f3',
            main: '#fff',
            dark: '#1769aa',
            whiteText: '#fff',
            blackText: '#000',
        },
        secondary: {
            light: '#ffcf33',
            // main: '#ffc400',
            main: '#000',
            dark: '#b28900',
            whiteText: '#fff',
            blackText: '#000',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
        },
        warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
        },
        success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
        },
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

export default theme;