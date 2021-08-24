import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Instagram, Facebook, Twitter, Call, WhatsApp, Home, GitHub, LinkedIn, Reddit, YouTube, Mail } from "@material-ui/icons";
import { Typography, Button, Menu, MenuItem, IconButton, Dialog, DialogTitle, TextField, DialogActions, DialogContent, DialogContentText, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        alignItems: "center"
    },
    navList: {
        listStyleType: "none",
        textAlign: "right",
        width: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "&:hover li a": {
            opacity: 0.3
        },
        "& li a:hover": {
            transform: "scale(1.4)",
            zIndex: 1000,
            opacity: 1
        }
    },
    navLink: {
        textDecoration: "none",
        color: "black",
        fontSize: "2vmax"
    },
    navBarLinks: {
        zIndex: 1,
        "& > button > span.MuiIconButton-label > svg": {
            animation: `$fontSizeEffect 500ms forwards ${theme.transitions.easing.easeInOut}`
        }
    },
    "@keyframes fontSizeEffect": {
        "from": {
            transform: "scale(0.5)"
        },
        "to": {
            transform: "scale(1.5)"
        }
    },
    linkContainer: {
        paddingLeft: "4%",
        minHeight: '10px',
        minWidth: "8vmax",
        textAlign: "center",
        justifyContent: "center"
    },
    toolBar: {
        paddingRight: 0,
        backgroundColor: "white",
        marginTop: "12%",
        marginRight: "2vw",
        position: "fixed",
        width: "80%",
        marginLeft: "8%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "8px"
    },
    header: {
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        backgroundImage: "url(" + process.env.PUBLIC_URL + "/randy-tarampi-U2eUlPEKIgU-unsplash.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100vh"
    },
    titleContainer: {
        position: "absolute",
        top: "45vh",
        left: "5%",
        width: "40vw",
        textAlign: "center",
        color: "white"
    },
    titleContent: {
        fontSize: "4.5em"
    },
    titleTaglineNonMobile: {
        fontSize: "3em"
    },
    titleTagline: {
        fontFamily: "'Dosis', sans-serif",
        fontSize: "1em",
        position: "absolute",
        top: "18%",
        left: "6%",
        color: "white",
        width: "85%",
        textAlign: "center"
    },
    socialMediaContainer: {
        position: "absolute",
        top: "101vh",
        maxWidth: "100%"
    },
    iconsContainer: {
        display: "flex",
        width: "98.9vw",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
        boxShadow: "-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001",
        transition: "box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81)"
    },
    iconButtons: {
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        margin: "10px 0",
        borderRadius: "4px",
        // eslint-disable-next-line
        WebkitTapHighlightColor: "transparent",
        boxShadow: "-7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001",
        transition: "box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81)",
        color: "rgba(42, 52, 84, 1)",
        "&:hover": {
            boxShadow: "4px 4px 6px 0px rgba(255, 255, 255, 0.5), -4px -4px 6px 0px rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0px rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0px rgba(116, 125, 136, 0.3)"
        }
    },
    contactContainer: {
        position: "absolute",
        borderRadius: "50%",
        top: "90vh",
        left: "80vw",
        // eslint-disable-next-line
        position: "fixed"
    },
    featureButtons: {
        position: "absolute",
        top: "112vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center"
    },
    actionsBar: {
        backgroundColor: "#ffffff",
        display: "flex",
        width: "100%",
        alignItems: "center",
        height: "5vh"
    },
    actionLinks: {
        position: "absolute"
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
    const [anchorEl, setAnchorEl] = useState(null);
    const [phoneNum, setPhoneNum] = useState("");
    const [link, setLink] = useState("");
    const [quote, setQuote] = useState("Loading...");
    const [author, setAuthor] = useState("Loading...");
    const [cardState, setCardState] = useState(false);
    const [quoteState, setQuoteState] = useState(false);
    const [linkState, setLinkState] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDialogTextFieldChange = (event) => {
        setPhoneNum(event.target.value);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDialogOpen = () => setCardState(true);

    const handleDialogClose = () => setCardState(false);

    const handleLinkDialogOpen = () => setLinkState(true);

    const handleLinkDialogClose = () => setLinkState(false);

    const handleLinkDialogTextFieldChange = (e) => {
        fetch(`https://shrinkme.io/api?api=f0a29634ece48620732f03a2874768ed9faa20a2&url=${e.target.value}`)
            .then(res => {
                res.json()
                    .then(data => {
                        setLink(data["shortenedUrl"]);
                    })
            })
            .catch(err => console.log(err));
        setLink(e.target.value);
    };

    const handleQuoteDialogOpen = () => {
        fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
            .then(res => {
                res.json()
                    .then(data => {
                        data = data["quotes"][0];
                        setQuote(data.text);
                        setAuthor(data.author)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        setQuoteState(true);
    };

    const handleQuoteDialogClose = () => setQuoteState(false);

    const handleMouseEvent = (id, content) => {
        document.getElementById(id).innerHTML = content;
    };
    
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("navbar").style.width = "100%";
            document.getElementById("navbar").style.marginLeft = "0";
            document.getElementById("navbar").style.marginTop = "0";
            document.getElementById("navbar").style.borderRadius = "0";
        } else if ((document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) && notMobile) {
            document.getElementById("call-button").style.color = "black";
            document.getElementById("chat-button").style.color = "black";
        } else {
            document.getElementById("navbar").style.width = "80%";
            document.getElementById("navbar").style.marginLeft = "8%";
            document.getElementById("navbar").style.marginTop = "12%";
            document.getElementById("navbar").style.borderRadius = "8px";
            if (notMobile) {
                document.getElementById("call-button").style.color = "white";
                document.getElementById("chat-button").style.color = "white";
            }
        }
    }
    
    window.onload = function() {
        window.onscroll = function() { scrollFunction() }
        if (!notMobile) {
            document.getElementById("header").style.backgroundSize = "100% 60vh";
            document.getElementById("header").style.minHeight = "60vh";
            // document.getElementById("socialMediaContainer").style
        } else {
            document.getElementById("call-button").style.color = "white";
            document.getElementById("chat-button").style.color = "white";
        }
    };

    return (
        <header className={classes.header} id="header">
            <Dialog open={cardState}>
                <DialogTitle>Request A Call</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please enter your phone number with international code so that we can reach you.</DialogContentText>
                    <TextField autoFocus margin="dense" onChange={handleDialogTextFieldChange} label="phoneNumber" type="text" fullWidth variant="standard" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        handleDialogClose();
                        setPhoneNum("");
                    }}>Cancel</Button>
                    <Button onClick={handleDialogClose}>Request Call</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={linkState}>
                <DialogTitle>Shorten your link</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" onChange={handleLinkDialogTextFieldChange} label="Enter your link" type="text" fullWidth variant="standard" />
                    <DialogContentText>{link}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLinkDialogClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={quoteState}>
                <DialogTitle>Get a Quote</DialogTitle>
                <DialogContent>
                    <DialogContentText>{quote}</DialogContentText>
                    <DialogContentText>- {author}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleQuoteDialogClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <nav id="navbar" className={classes.toolBar}>
                <Typography variant="h3" color="textPrimary" style={{ lineHeight: 0 }}><Link id="logo" to="/" className={classes.title}><img src={`${process.env.PUBLIC_URL}/white.png`} alt="Tech Loaders" width={100} /></Link></Typography>
                {notMobile
                    ? (<ul className={classes.navList}>
                        <IconButton color="primary"><Search /></IconButton>
                        <li className={classes.linkContainer} onMouseEnter={() => handleMouseEvent("about", '<button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg></span><span class="MuiTouchRipple-root"></span></button>')} onMouseLeave={() => handleMouseEvent("about", "About Us")}><Link to="/about" id="about" className={`${classes.navLink} ${classes.navBarLinks} navLinks`}>About Us</Link></li>
                        <li className={classes.linkContainer} onMouseEnter={() => handleMouseEvent("contact", '<button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"></path></svg></span><span class="MuiTouchRipple-root"></span></button>')} onMouseLeave={() => handleMouseEvent("contact", "Contact Us")}><Link to="/contact" id="contact" className={`${classes.navLink} ${classes.navBarLinks} navLinks`}>Contact Us</Link></li>
                        <li className={classes.linkContainer} onMouseEnter={() => handleMouseEvent("services", '<button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-bnlyqp-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="MiscellaneousServicesIcon"><path d="m14.17 13.71 1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85c-.03-.16-.18-.29-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13.11 7.67-.96-.74c.02-.14.04-.29.04-.44 0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18c-.01-.12-.11-.2-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45c-.1-.04-.22 0-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74c-.02.14-.03.29-.03.44 0 .15.01.3.03.44l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16c-.74 0-1.35-.6-1.35-1.35s.6-1.35 1.35-1.35 1.35.6 1.35 1.35-.61 1.35-1.35 1.35z"></path></svg></span><span class="MuiTouchRipple-root"></span></button>')} onMouseLeave={() => handleMouseEvent("services", "Services")}><Link to="/services" id="services" className={`${classes.navLink} ${classes.navBarLinks} navLinks`}>Sevices</Link></li>
                        <li className={classes.linkContainer} onMouseEnter={() => handleMouseEvent("softwares", '<button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></svg></span><span class="MuiTouchRipple-root"></span></button>')} onMouseLeave={() => handleMouseEvent("softwares", "Softwares")}><Link to="/softwares" id="softwares" className={`${classes.navLink} ${classes.navBarLinks} navLinks`}>Softwares</Link></li>
                        <li className={classes.linkContainer} onMouseEnter={() => handleMouseEvent("blog", '<button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg></span><span class="MuiTouchRipple-root"></span></button>')} onMouseLeave={() => handleMouseEvent("blog", "Blog")}><Link to="/blog" id="blog" className={`${classes.navLink} ${classes.navBarLinks} navLinks`}>Blog</Link></li>
                    </ul>)
                    : (<div>
                        <Button aria-controls="nav-menu" className={`${classes.navLink} navLinks`} aria-haspopup="true" onClick={handleClick}>
                            Menu
                        </Button>
                        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>About US</MenuItem>
                            <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                            <MenuItem onClick={handleClose}>Services</MenuItem>
                            <MenuItem onClick={handleClose}>Softwares</MenuItem>
                            <MenuItem onClick={handleClose}>Blog</MenuItem>
                        </Menu>
                    </div>)}
            </nav>
            <div className={classes.actionsBar}>
                <Link to="/register" style={{ left: "70%" }} className={`${classes.navLink} ${classes.actionLinks}`}>Register</Link>
                <Link to="/login" style={{ left: "90%" }} className={`${classes.navLink} ${classes.actionLinks}`}>Login</Link>
                <hr />
            </div>
            {notMobile
                ? (<div className={classes.titleContainer}>
                    <h1 className={classes.titleContent}>Tech Loaders</h1>
                    <h3 className={classes.titleTaglineNonMobile}>Tech solutions to every single problem</h3>
                </div>)
                : (<h3 className={classes.titleTagline}>Tech solutions to every single problem</h3>)}
            {notMobile && (<div className={classes.socialMediaContainer} id="socialMediaContainer">
                <div className={classes.iconsContainer}>
                    <IconButton aria-label="instagram-button" className={classes.iconButtons}>
                        <Instagram />
                    </IconButton>
                    <IconButton aria-label="facebook-button" className={classes.iconButtons}>
                        <Facebook />
                    </IconButton>
                    <IconButton aria-label="twitter-button" className={classes.iconButtons}>
                        <Twitter />
                    </IconButton>
                    <IconButton aria-label="github-button" className={classes.iconButtons}>
                        <GitHub />
                    </IconButton>
                    <IconButton aria-label="linkedin-button" className={classes.iconButtons}>
                        <LinkedIn />
                    </IconButton>
                    <IconButton aria-label="reddit-button" className={classes.iconButtons}>
                        <Reddit />
                    </IconButton>
                    <IconButton aria-label="youtube-button" className={classes.iconButtons}>
                        <YouTube />
                    </IconButton>
                    <IconButton aria-label="gmail-button" className={classes.iconButtons}>
                        <Mail />
                    </IconButton>
                    <IconButton aria-label="medium-button" className={classes.iconButtons}>
                        <img src={`${process.env.PUBLIC_URL}/download.png`} width={25} alt="medium.com" />
                    </IconButton>
                    <IconButton aria-label="stackoverflow-button" className={classes.iconButtons}>
                        <img src={`${process.env.PUBLIC_URL}/stackoverflow.png`} width={25} alt="stackoverflow.com" />
                    </IconButton>
                </div>
            </div>)}
            {notMobile && (<div className={classes.contactContainer}>
                <IconButton aria-label="request-a-call" id="call-button" onClick={handleDialogOpen}>
                    <Call />
                </IconButton>
                <IconButton aria-label="live-chat">
                    <a href="https://wa.me/916263682856" id="chat-button" target="_blank" rel="noreferrer" className={classes.navLink}><WhatsApp /></a>
                </IconButton>
            </div>)}
            {notMobile && (<div className={`${classes.featureButtons} ${classes.iconsContainer}`}>
                <Button className={classes.iconButtons} onClick={handleQuoteDialogOpen}>Get a Quote</Button>
                <Button className={classes.iconButtons}>Get a Badge</Button>
                <Button className={classes.iconButtons} onClick={handleLinkDialogOpen}>Shorten your Link</Button>
            </div>)}
        </header>
    );
};

export default Navbar;