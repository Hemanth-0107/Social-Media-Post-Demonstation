import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    appBar: {
        display: "flex",
        borderRadius:15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin:theme.spacing(1),
    },
    image: {
        marginLeft: '10px',
        marginTop: '5px',
      },
    heading:{
        marginLeft: '10px',
        marginTop: '5px',
        color:'blue'
    }
}));