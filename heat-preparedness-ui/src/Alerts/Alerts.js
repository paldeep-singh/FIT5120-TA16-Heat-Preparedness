import React from "react";
import { subscribeUser } from "./subscription";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  quizCard: {
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.tertiary.contrastText,
    marginBottom: "1rem",
    padding: "1rem",
    textAlign: "center",
  },
  hidePage: {
    display: "none",
  },
  buttonStyle: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textTransform: "none",
    marginBottom: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      marginBottom: "1rem",
      textTransform: "none",
    },
  },
  nextQuestionButton: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
  imgContainer: {
    textAlign: "center",
    width: "100%",
    padding: "1rem",
    marginBottom: "1rem",
  },
  imageStyle: {
    maxWidth: 250,
  },
}));

const axios = require("axios").default;

export default function Alerts(suburbInfo) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [suburbId, setSuburbId] = React.useState(
    suburbInfo["suburbInfo"]["suburb_id"]
  );
  const suburbData = suburbInfo["suburbInfo"][1];
  const [oneDay, setOneDay] = React.useState(false);
  const [threeDay, setThreeDay] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [compatible, setCompatible] = React.useState(false);
  const [previousSubscription, setPreviousSubscription] = React.useState(false);
  const [currentSubscription, setCurrentSubscription] = React.useState(null);

  // console.log("current sub", currentSubscription);

  // console.log("prev", previousSubscription);
  // console.log(compatible);

  React.useEffect(() => {
    const fetchCompat = async () => {
      checkCompatibility().then(async function (compat) {
        setCompatible(compat);
      });
    };

    fetchCompat();
  }, []);

  var currentSuburb = suburbData.filter(
    (suburb) => suburb.suburb_id === suburbId
  )[0];

  const handleChangeOne = () => {
    if (oneDay) {
      setOneDay(false);
    } else if (!oneDay) {
      setOneDay(true);
    }
  };

  const handleChangeThree = () => {
    if (threeDay) {
      setThreeDay(false);
    } else if (!threeDay) {
      setThreeDay(true);
    }
  };

  const nextPage = () => {
    setPage(2);
  };

  const prevPage = () => {
    setPage(1);
  };

  const handleSubscribe = () => {
    const subDetails = {
      suburbDetails: suburbData.filter(
        (suburb) => suburb.suburb_id === suburbId
      )[0],
      oneDay: oneDay,
      threeDay: threeDay,
    };
    subscribeUser(subDetails);
    setOpen(false);
  };

  return (
    <Grid container justify="center">
      <Grid container item xs={12} wrap="wrap" justify="center">
        <Grid container item xs={12} justify="center">
          <Grid container wrap="wrap" justify="center">
            <Button
              variant="contained"
              onClick={handleClickOpen}
              className={classes.buttonStyle}
            >
              <Typography variant="h4">
                Subscribe to Heat Wave Alerts!
              </Typography>
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="about-us-dialog-title"
              aria-describedby="about-us-dialog-description"
            >
              <DialogTitle id="subscription-dialog-title">
                Heat Alert Subscription
              </DialogTitle>
              {compatible ? (
                <React.Fragment>
                  <DialogContent className={page !== 1 && classes.hidePage}>
                    <Typography>
                      Subscribe to receive heat wave alerts through your
                      device's browser! The browser will listen for our
                      notifications in the background so you do not have to have
                      our website open!
                    </Typography>
                    <Autocomplete
                      id="combo-box-demo"
                      options={suburbData}
                      getOptionLabel={(option) =>
                        option.suburb + ", " + option.postcode
                      }
                      fullWidth={true}
                      onChange={(event, newValue) => {
                        newValue !== undefined &&
                          setSuburbId(newValue.suburb_id);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Filter by name or postcode"
                          InputLabelProps={{ style: { color: "black" } }}
                          variant="outlined"
                        />
                      )}
                    />
                    <Typography
                      variant="h6"
                      style={{ marginTop: "2rem" }}
                      paragraph
                    >
                      You have selected
                      {currentSuburb !== undefined &&
                        " " +
                          currentSuburb.suburb +
                          " (" +
                          currentSuburb.postcode +
                          ")"}{" "}
                    </Typography>
                    <Typography paragraph variant="body1">
                      When would you like to receive notifications? (you can
                      select multiple)
                    </Typography>
                    <FormGroup row style={{ marginBottom: "2rem" }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={oneDay}
                            onChange={handleChangeOne}
                            name="OneDayBefore"
                          />
                        }
                        label="1 day before"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={threeDay}
                            onChange={handleChangeThree}
                            name="ThreeDaysBefore"
                          />
                        }
                        label="3 days before"
                      />
                    </FormGroup>
                    <Button
                      variant="contained"
                      onClick={nextPage}
                      className={classes.buttonStyle}
                      fullWidth
                    >
                      <Typography variant="h4">Next</Typography>
                    </Button>
                  </DialogContent>
                  <DialogContent className={page !== 2 && classes.hidePage}>
                    <Typography paragraph variant="body1">
                      Please review your subscription details below.
                    </Typography>
                    <Typography paragraph variant="body1">
                      You have selected
                      {currentSuburb !== undefined &&
                        " " +
                          currentSuburb.suburb +
                          " (" +
                          currentSuburb.postcode +
                          ")"}{" "}
                    </Typography>
                    {oneDay ? (
                      <Typography paragraph variant="body1">
                        You will receive notifications 1 day before a heat wave.
                      </Typography>
                    ) : (
                      ""
                    )}
                    {threeDay ? (
                      <Typography paragraph variant="body1">
                        You will receive notifications 3 days before a heat
                        wave.
                      </Typography>
                    ) : (
                      ""
                    )}
                    <Typography>
                      Once you confirm your details, you will have to allow
                      notifications if your browser asks. Once allowed, you will
                      receive a test notification on your device with the
                      details of your subscription. Stay Ready, Stay Safe!
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={handleSubscribe}
                      className={classes.buttonStyle}
                      fullWidth
                    >
                      <Typography variant="h4">Confirm details</Typography>
                    </Button>
                    <Button
                      variant="contained"
                      onClick={prevPage}
                      className={classes.buttonStyle}
                      fullWidth
                    >
                      <Typography variant="h4">Go back</Typography>
                    </Button>
                  </DialogContent>
                </React.Fragment>
              ) : (
                <DialogContent>
                  <Typography paragraph>
                    Unfortunately, our notificiations are not compatible with
                    your device. We're working on making our notifications
                    compatible with as many devices as possible. Thank you for
                    your patience!
                  </Typography>
                </DialogContent>
              )}
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

async function checkCompatibility() {
  return "PushManager" in window;
}

async function getSubscriptionDetails() {}
