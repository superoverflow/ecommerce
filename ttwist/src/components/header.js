import React from "react"
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
    },
    link: {
        textDecoration: 'none'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <header className={classes.root}>
            <Button size="large"><Link to="/" className={classes.link}>Store</Link></Button>
            <Button size="large"><Link to="/cart" className={classes.link}>Cart</Link></Button>
        </header >

    )
}

export default Header;