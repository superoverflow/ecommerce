import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductCard from './productCard';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    subHeader: {
        textAlign: 'center',
        padding: theme.spacing(5),
    }
}));

const Store = () => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <div className={classes.subHeader}>
                <Typography gutterBottom variant="h3">
                    TTWIST STUDIO
                </Typography>
                <Typography gutterBottom variant="p">
                    Twist with no sense
                </Typography>
            </div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={2} />
                    <Grid item xs={2}>
                        <ProductCard image="/unicorn.png" price="£44.99" description="Unicorn" title="unicorn" />
                    </Grid>
                    <Grid item xs={2}>
                        <ProductCard image="/sausage_dog.png" price="£44.99" description="Sausage Dog" title="sausage_dog" />
                    </Grid>
                    <Grid item xs={2}>
                        <ProductCard image="/beep.png" price="£44.99" description="Beep" title="beep" />
                    </Grid>
                    <Grid item xs={2}>
                        <ProductCard image="/meow.png" price="£44.99" description="Meow" title="meow" />
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={2} />
                    <Grid item xs={2}>
                        <ProductCard image="/ttwist.png" price="£44.99" description="Ttwist" title="ttwsit" />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    );
};

export default Store;
