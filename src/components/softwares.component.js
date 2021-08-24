import React from "react"; 
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    main_container: {
        marginTop: "11rem",
        [theme.breakpoints.down("sm")]: {
        marginTop: 0
        }
    }
}));

const Softwares = () => {
    const classes = useStyles();

    return (
        <main className={classes.main_container}>
            Softwares page here
        </main>
    );
};

export default Softwares;