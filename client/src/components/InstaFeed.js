import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import dotenv from "dotenv";

dotenv.config();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    height: "50%",
    width: "50%",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%",
    },
  },
  showBtn: {
    cursor: "pointer",
    color: "#383838",
    textDecoration: "none",
    border: "solid 2px #383838",
    margin: "1rem",
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: "#383838",
      color: "#fff",
      textDecoration: "none",
    },
  },
  a: {
    display: "block",
    height: "100%",
    "&:hover": {
      backgroundColor: "#383838",
      opacity: "1",
      "& $caption": {
        display: "inline",
        color: "#fff",
      },
      "& $img": { opacity: "0.3" },
    },
  },
  caption: {
    display: "none",
    position: "absolute",
    lineHeight: "normal",
    textOverflow: "ellipsis",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  imgList: {
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "4px",
    },
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      height: "80%",
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "60%",
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40%",
      width: "40%",
    },
  },
}));

export default function InstaFeed() {
  const [IGdata, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const getIt = async () => {
      const apiToken = process.env.REACT_APP_INSTA_KEY;
      let response = await fetch(process.env.REACT_APP_INSTA_URL + apiToken);
      response = await response.json();
      setData(response);
      setLoading(false);
    };
    getIt();
  }, []);

  const classes = useStyles();

  const numberOfItems = showMore ? IGdata.data.length : 6;

  return (
    <div className={classes.root}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Grid>
            {IGdata.data.slice(0, numberOfItems).map((item) => (
              <Container>
                <a className={classes.a} href={item.media_url}>
                  <img
                    className={classes.img}
                    srcSet={item.media_url}
                    loading="lazy"
                    alt="Ansatt bilde"
                  />
                  <p className={classes.caption}>{item.caption}</p>
                </a>
              </Container>
            ))}
          </Grid>

          {/*          <ImageList
            sx={{
              width: "100%",
              height: "auto",
            }}
            className={classes.imgList}
            cols={3}
            rowHeight={264}
            gap={8}
          >
            {IGdata.data.slice(0, numberOfItems).map((item) => (
              <ImageListItem key={item.id}>
                <a className={classes.a} href={item.media_url}>
                  <img
                    className={classes.img}
                    srcSet={item.media_url}
                    loading="lazy"
                    alt="Ansatt bilde"
                  />
                  <p className={classes.caption}>{item.caption}</p>
                </a>
              </ImageListItem>
            ))}
          </ImageList> */}

          {showMore ? (
            <a className={classes.showBtn} onClick={() => setShowMore(false)}>
              Vis mindre
            </a>
          ) : (
            <a className={classes.showBtn} onClick={() => setShowMore(true)}>
              Vis mer
            </a>
          )}
        </>
      )}
    </div>
  );
}
