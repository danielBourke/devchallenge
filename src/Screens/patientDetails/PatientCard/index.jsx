import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginLeft: "auto",
    margnRight: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PatientCard = ({ selected }) => {
  const classes = useStyles();
  console.log(selected);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
          Patient card
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {selected.name}
        </Typography>
        <Typography variant="h5" component="h2">
          Date of Birth
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {moment(selected.doB).format("MMM Do YYYY")}
        </Typography>
        <Typography variant="body2" component="p">
          Phone number
          {selected.phoneNumber}
        </Typography>

        <Typography variant="h5" component="h2">
          Joined
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {moment(selected.patientJoined, "YYYYMMDD").fromNow()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PatientCard;
