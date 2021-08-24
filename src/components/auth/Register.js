import React, { useState } from "react";
import { Grid, Button, TextField, makeStyles } from "@material-ui/core";
import { FormProvider, Controller, useForm, useFormContext } from "react-hook-form";

const useStyles = makeStyles(theme => ({
    main_container: {
        margin: "12rem 0 2rem",
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

const Register = () => {
    const methods = useForm();
    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const url = new URL(
            "https://api.chec.io/v1/customers"
        );
        
        let headers = {
            "X-Authorization": "sk_test_32347e9e839a1c8cb968822af8f318ec78d28a846bb1c",
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        
        let body = {
            "email": email,
            "firstname": firstName,
            "lastname": lastName
        }
        
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(json => console.log(json));
    };

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);

    return (
        <main className={classes.main_container}>
            <FormProvider {...methods}>
                <form className={classes.form} onSubmit={onSubmit}>
                    <Grid container spacing={3}>
                        <CustomInput name="firstname" label="First Name" type="text" handleChange={handleFirstNameChange} required={true} />
                        <CustomInput name="lastname" label="Last Name" type="text" handleChange={handleLastNameChange} required={true} />
                        <CustomInput name="email" label="Email" type="email" handleChange={handleEmailChange} required={true} />
                    </Grid>
                    <Button variant="contained" type="submit" color="primary" className={classes.signUpButton}>SignUp</Button>
                </form>
            </FormProvider>
        </main>
    );
};

export default Register;