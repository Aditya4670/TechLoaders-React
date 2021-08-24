import React, { Component } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.id = window.location.pathname.split("/")[1];

        this.state = {
            title: "",
            subtitle: "",
            content: ""
        };
    };

    componentDidMount() {
        axios
            .get("http://localhost:5000/posts/" + this.id)
            .then(res => this.setState({
                title: res.data.title,
                subtitle: res.data.subtitle,
                content: res.data.content
            }));
    };

    render() {
        return (
            <main style={{ marginTop: "5.5rem" }}>
                <Typography variant="h2" color="textPrimary" style={{ textAlign: "center" }}>{this.state.title}</Typography>
                <Typography variant="h5" color="textPrimary" style={{ textAlign: "center", padding: "2% 0" }}>{this.state.subtitle}</Typography>
                <Typography variant="body1" color="textPrimary" style={{ padding: "1% 5%" }}>{this.state.content}</Typography>
            </main>
        );
    }
};