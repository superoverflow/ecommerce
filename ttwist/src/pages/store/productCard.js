import React from "react";
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
    cardButton: {
        display: "flow"

    }
});

const ProductCard = ({ image, title, description, price }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.classButton}>
                <Button size="small" color="primary">
                    Details
                </Button>
                <Button size="small" color="primary">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard