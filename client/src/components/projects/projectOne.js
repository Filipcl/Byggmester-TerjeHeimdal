import { React, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    padding: "1rem",
  },
}));

export default function ProjectOne() {
  const classes = useStyles();
  const [cmsData, setData] = useState([]);

  const getCmsWithAxios = async () => {
    const response = await axios.get("/api/cms/");
    setData(response.data);
  };

  useEffect(() => {
    getCmsWithAxios();
  }, []);

  return (
    <>
      <div className={classes.root}>
        {cmsData.length > 0 &&
          cmsData.map((e) => (
            <div key={e.id}>
              <h1>{e.title}</h1>
              <p>{e.content}</p>
            </div>
          ))}
      </div>
    </>
  );
}
