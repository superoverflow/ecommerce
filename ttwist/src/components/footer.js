import React from "react"
import { Instagram, MailOutline } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: 50,
        padding: 10
    },
    link: {
        textDecoration: 'none'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Typography variant="subtitle1">
                2021 &copy; Ttwist Limited. All Rights Reserved
            </Typography>
            <Button href="https://www.instagram.com/ttwiststudio/" target="blank">
                <Instagram />
            </Button>
            <Button href="mailto:info@ttwist.co.uk">
                <MailOutline />
            </Button>
        </footer >

    )
}

export default Header;