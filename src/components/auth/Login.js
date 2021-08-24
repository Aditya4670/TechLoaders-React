import React, { useState, useEffect } from 'react';
import commerce from '../../lib/commerce';
import { Grid, Button, TextField, makeStyles } from '@material-ui/core';
import { FormProvider, Controller, useForm, useFormContext } from "react-hook-form";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    main_container: {
        margin: "11rem 0 2rem",
        [theme.breakpoints.down("sm")]: {
          marginTop: 0
        },
        display: "flex",
        justifyContent: "center"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    signUpButton: {
        marginTop: "5%",
        width: "8vw"
    }
}));

const CustomInput = ({ name, label, type, required, handleChange }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                control={control}
                render={() => <TextField type={type} id={name} label={label} onChange={handleChange} fullWidth required={required} />}
            />
        </Grid>
    );
};

const Login = () => {
    const methods = useForm();
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();

        return commerce.customer.login(email, `${window.location.origin}/login?token={token}`)
            .then(() => console.log("Please check your email."))
            .catch(err => console.log(err.data.error.errors.email));
    };

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handlePasswordChange = (e) => setPassword(e.target.value);

    useEffect(() => {
        try{
            const token = window.location.href.split("?")[1].split("=")[1];
            if (!token) return;

            const setCustomer = () => dispatch => {
                const isLoggedIn = commerce.customer.isLoggedIn();
    
                if (!isLoggedIn || isLoggedIn === false) {
                    dispatch({ type: "CLEAR_CUSTOMER" });
                    return Promise.resolve(null);
                }
    
                return commerce.customer.about()
                    .then(customer => dispatch({ type: "SET_CUSTOMER", payload: customer }))
                    .catch(() => {
                        commerce.customer.logout();
                        dispatch({ type: "CLEAR_CUSTOMER" })
                    })
            };
    
            commerce.customer.getToken(token)
                .then(() => setCustomer().then(() => Redirect("/dashboard")))
                .catch(() => console.log("Link has expired."));
        } catch(err) {
            return;
        }
    }, []);

    return (
        <main className={classes.main_container}>
            <FormProvider {...methods}>
                <form className={classes.form} onSubmit={onSubmit}>
                    <Grid container spacing={3}>
                        <CustomInput name="email" label="Email" type="email" handleChange={handleEmailChange} required={true} />
                        <CustomInput name="password" label="Password" type="password" handleChange={handlePasswordChange} required={true} />
                    </Grid>
                    <Button variant="contained" type="submit" color="primary" className={classes.signUpButton}>Login</Button>
                </form>
            </FormProvider>
        </main>
    );
};

export default Login;