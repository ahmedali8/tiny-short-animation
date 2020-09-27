import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        marginTop: '30px',
        textAlign: 'center',
        // position: "fixed", 
        // left: "0", 
        // bottom: "0",
    },
    footer: {
        padding: '8px 0',
        paddingTop: '14px',
        
        // padding: theme.spacing(3, 2),
        // backgroundColor:
        //     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    link: {
        color: '#fff',
        width: '25px',
        margin: '0 12px',

    },
    linkContainer: {
        margin: '5px auto',
    }
}));

export default useStyles;