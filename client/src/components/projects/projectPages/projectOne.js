import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { funkyData } from "../data/funkyData";
import BackButton from "../projectComponents/backButton";
import { SRLWrapper } from "simple-react-lightbox";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "64px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      justifyContent: "center",
    },
  },
  imageList: {
    width: "900px",
    [theme.breakpoints.down("sm")]: {
      width: "700px",
      gridTemplateColumns: "repeat(1, 1fr) !important",
      gap: "0px",
    },
  },
  imgItem: {
    [theme.breakpoints.down("sm")]: {
      padding: "1rem !important",
    },
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "50% !important",
    },
  },
}));

export default function BasicImageList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SRLWrapper>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Funkis enebolig på Nøtterøy</Typography>
            <Typography variant="body1" style={{ padding: "24px 0px" }}>
              Trykk på et bilde for galleri-modus
            </Typography>
            <hr style={{ color: "#422776", width: "80%" }} />
          </Grid>
        </Grid>
        <ImageList className={classes.imageList} gap={64} cols={4}>
          {funkyData.map((item) => (
            <ImageListItem
              className={classes.imgItem}
              key={item.img}
              cols={item.cols}
            >
              <img className={classes.img} src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
          <div>
            <BackButton />
          </div>
        </ImageList>
      </SRLWrapper>
    </div>
  );
}
