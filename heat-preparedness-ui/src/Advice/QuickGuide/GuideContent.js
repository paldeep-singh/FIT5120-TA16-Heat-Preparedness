import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  CardMedia,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import noCoffeeAlcohol from "./images/nocoffeealcohol.png";
import noExercise from "./images/no-exercise.png";
import fan from "./images/fan.png";
import airConditioner from "./images/airConditioner.png";
import closethedoor from "./images/close_the_door.png";
import drawyourblinds from "./images/Draw_your_blinds.png";
import openwindow from "./images/open_window.png";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import water from "./images/water.png";

const useStyles = makeStyles((theme) => ({
  cardContentStyle: {
    minHeight: "450px",
    padding: "1rem",
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.tertiary.contrastText,
  },
  mediaWater: {
    height: 200,
    maxWidth: "95%",
  },
  mediaCoffee: {
    height: 200,
    maxWidth: "95%",
  },
  mediaExercise: {
    height: 200,
    maxWidth: "95%",
  },
  mediaFan: {
    height: 200,
    maxWidth: 200,
  },
  mediaAirConditioner: {
    height: 200,
    maxWidth: 200,
  },
  crossStyle: {
    color: theme.palette.cross.main,
  },
  tickStyle: {
    color: theme.palette.tick.main,
  },
}));

export function StayHydrated() {
  const classes = useStyles();
  return (
    <Card raised={true}>
      <CardContent className={classes.cardContentStyle}>
        <Grid container alignItems="flex-start" justify="center">
          <Grid item xs={12}>
            <Typography variant="h5" paragraph align="center">
              Stay Hydrated and avoid strenuous activity
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={10}
            lg={10}
            alignItems="flex-start"
            justify="space-evenly"
            spacing={3}
          >
            <Grid item xs={12} md={6}>
              <Typography align="center">
                Keep a full drink bottle with you and take small sips of water
                frequently.
              </Typography>
              <div className={classes.imgContainer}>
                <img
                  src={water}
                  alt="Water bottle"
                  className={classes.mediaWater}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography align="center">
                Avoid Caffeine and alcohol.
              </Typography>
              <div className={classes.noCoffeeAlcohol}>
                <img
                  src={noCoffeeAlcohol}
                  alt="No caffeine and alcohol"
                  className={classes.mediaCoffee}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography align="center">
                Avoid heavy activity like sport, renovating and gardening.
              </Typography>
              <div className={classes.imgContainer}>
                <img
                  src={noExercise}
                  alt="Minimise physical activity"
                  className={classes.mediaExercise}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-start">
          <Grid item xs={12}>
            <Typography variant="h5">{content[0]["title"]}</Typography>
            <List>
              {content[0]["content"].map((item, index) => (
                <React.Fragment>
                  <ListItem id={index}>
                    <ListItemIcon>
                      {content[0]["icons"][index] === "Do" ? (
                        <CheckIcon className={classes.tickStyle} />
                      ) : (
                        <ClearIcon className={classes.crossStyle} />
                      )}
                    </ListItemIcon>
                    <Typography variant="body1">{item}</Typography>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <CardMedia
              image={noCoffeeAlcohol}
              className={classes.mediaCoffee}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardMedia image={noExercise} className={classes.mediaExercise} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function CoolEnvironment() {
  const classes = useStyles();

  return (
    <Card raised={true}>
      <CardContent className={classes.cardContentStyle}>
        <Grid container alignItems="flex-start" justify="center">
          <Grid item xs={12}>
            <Typography variant="h5" paragraph align="center">
              Keep your environment cool
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={10}
            lg={10}
            alignItems="flex-start"
            justify="space-evenly"
            spacing={3}
          >
            <Grid item xs={12} md={6}>
              <Typography align="center">Draw your blinds</Typography>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "100%",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={drawyourblinds}
                  style={{
                    height: 200,
                    maxWidth: 200,
                  }}
                  alt="coolblinds"
                ></img>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography align="center">
                Close-off any rooms that you are not using
              </Typography>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "100%",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={closethedoor}
                  style={{
                    height: 200,
                    maxWidth: 200,
                  }}
                  alt="coolclsdoor"
                ></img>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography align="center">
                Open the windows when there is a cool breeze or when the
                temperature inside rises above the outside temperature
              </Typography>
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "100%",
                  padding: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={openwindow}
                  style={{
                    height: 200,
                    maxWidth: 200,
                  }}
                  alt="coolwin"
                ></img>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function FanAirconUse() {
  const classes = useStyles();
  const content = [
    {
      title: "Fan / Air Conditioner usage",
      content: [
        "If using a fan, ensure there is adequate ventilation and that it is set-up to bring cooler air in from the outside.",
        "If using an air conditioner, make sure it is on the right setting (snowflake symbol)",
      ],
    },
  ];

  return (
    <Card raised={true}>
      <CardContent className={classes.cardContentStyle}>
        <Grid container alignItems="flex-start">
          <Grid item xs={12}>
            <Typography variant="h5">{content[0]["title"]}</Typography>
            <List>
              {content[0]["content"].map((item, index) => (
                <React.Fragment>
                  <ListItem id={index}>
                    <Typography variant="body1">{item}</Typography>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <CardMedia image={fan} className={classes.mediaFan} />
          </Grid>
          <Grid item xs={12} md={3}>
            <CardMedia
              image={airConditioner}
              className={classes.mediaAirConditioner}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function FinalTips() {
  const classes = useStyles();
  const content = [
    {
      title: "Final Tips",
      content: [
        "Stay out of the sun! Especially during the hottest part of the day! (usually 11am-3pm)",
        "If you cannot stay cool in your home, make arrangements to visit a friend or spend time in air-conditioned public spaces!",
      ],
    },
  ];

  return (
    <Card raised={true}>
      <CardContent className={classes.cardContentStyle}>
        <Typography variant="h5">{content[0]["title"]}</Typography>
        <List>
          {content[0]["content"].map((item, index) => (
            <React.Fragment>
              <ListItem id={index}>
                <Typography variant="body1">{item}</Typography>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
