import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import cover from "./ProjectImages/funky/first.jpg";
import totcover from "./ProjectImages/total/cover.jpg";
import tjomecover from "./ProjectImages/tjome/IMG_20200427_092936.jpg";
import husoycover from "./ProjectImages/husoy/20210817_094301.jpg";
import ProjectCard from "./projectComponents/projectCard";
import "./project.css";
/*  import InstaFeed from "../InstaFeed"; */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "64px 24px 24px",
    [theme.breakpoints.down("xs")]: {
      padding: "16px",
    },
  },
  projectContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "84px !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: "40px",
    },
  },
  projectImg: {
    width: "442px",
    height: "249px",
    [theme.breakpoints.down("sm")]: {
      width: "320px",
      height: "180px",
    },
  },
  projectButton: {
    paddingTop: " 84px",
    display: "flex",
    justifyContent: "end",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "16px",
      justifyContent: "center",
    },
  },
}));

export default function Project() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Våre prosjekter</Typography>
          <Typography variant="body1" style={{ padding: "24px 0px" }}>
            Her kan du se noen av våre prosjekter. Følg oss på{" "}
            <a
              href="https://www.instagram.com/bmh.as/"
              style={{ color: "black", fontWeight: "600" }}
            >
              Instagram
            </a>{" "}
            for flere videoer og bilder.
          </Typography>
          <hr style={{ color: "#422776", width: "80%" }} />
        </Grid>
        <Grid className={classes.projectContainer} item xs={12}>
          <ProjectCard
            img={cover}
            title="Ny enebolig i funkis stil på Nøtterøy "
            content="Arkitekttegnet bolig med mange spennende løsninger (buet trappeløp) og fine detaljer. Kombinasjon av mur og treverk. Det er benyttet vedlikeholdsfrie vinduer og kledning, listefritt innvendig med slette vegger og vannbåren varme i alle gulv."
            linktoProject="./projectOne"
          />
        </Grid>
        <Grid className={classes.projectContainer} item xs={12}>
          <ProjectCard
            img={husoycover}
            title="Totalrenovering/ny enebolig på Husøy"
            content="Et spennende prosjekt på vinterstid hvor store deler av arbeidet
            ble utført under tak, upåvirket av vær og vind. Rivd mesteparten
            av gammel bygning fra 1800 tallet, og benyttet noe av tømmeret
            innvendig for å bevare historien. Bygd i gammel stil med takstein
            i tegl og renner og nedløp i zink. Dette ble kombinert med nytt og
            moderne stolpeløst glassrekkverk."
            linktoProject="./projectThree"
          />
        </Grid>
        <Grid className={classes.projectContainer} item xs={12}>
          <ProjectCard
            img={totcover}
            title="Tilbygg og totalrenovering av hytte i Drøbak "
            content=" Tilbygg med 2 bad og soverom og totalrenovering av resten av
            hytta. Det ble benyttet vedlikeholdsfri kledning, falsede
            aluminiumsplater på tak med lekre detaljer som pipehatt og
            takrenner i zink. Fliselagt bad med historiske gulvflis og
            rennesluk mot vegg. Glassrekkverk på balkong med fotklemmer i
            syrefast stål."
            linktoProject="./projectTwo"
          />
        </Grid>
        <Grid className={classes.projectContainer} item xs={12}>
          <ProjectCard
            img={tjomecover}
            title="Totalrenovering med tilbygg hytte på Tjøme"
            content="Tilbygg ny stue og inngangsparti og renovering av gammel hytte.
            Tømmermannskledning utvendig, tre panel og panelplater innvendig,
            slett himling av gips og nytt bad med våtromsplater og belegg. Fin
            løsning med hems over utvendig bod i tilknytning til soverom. Ny
            trapp opp til eiendommen."
            linktoProject="./projectFour"
          />
        </Grid>
      </Grid>
    </div>
  );
}
