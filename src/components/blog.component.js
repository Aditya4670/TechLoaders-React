import React, { Component } from "react"; 
import { Typography, Card, CardContent, CardActions, Button, makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
    card: {
        marginTop: "2rem",
        margin: "0 19%"
    },
    subtitle: {
        fontSize: "1.2rem"
    },
    content: {
        padding: "1% 5%"
    },
    actions: {
        paddingTop: "1%",
        paddingLeft: "5%"
    }
});

const Post = props => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <Typography variant="h3">{props.post.title}</Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>{props.post.subtitle}</Typography>
                <Typography variant="body2">{props.post.content.length > 50
                ? props.post.content.slice(0, 300) + "..."
                : props.post.content}</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button variant="contained" color="primary" href={"/" + props.post._id}>
                    Read Now
                </Button>
            </CardActions>
        </Card>
    );
};

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/posts")
            .then(res => {
                this.setState({ posts: res.data });
            })
            .catch(err => console.log(err));
    };

    postList() {
        return this.state.posts.map(current => {
            return <Post post={current} key={current._id} />
        });
    }

    render() {
        return (
            <div style={{ margin: "12rem 0 2rem" }}>
                {this.postList()}
            </div>
        );
    };
};