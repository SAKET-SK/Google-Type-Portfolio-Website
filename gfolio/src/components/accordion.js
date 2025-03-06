// Expandable additional information for the section : "People also asked" from Google search results.
import React, { useState } from "react";
import "./accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// useStyles is a function that generates styles using Material-UI's theme.
const useStyles = makeStyles((theme) => ({      
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const AccordionComponent = () => {
  const classes = useStyles();

  return (
    <div className="accordion-container">
      <div className="accordion-sub-container">
        <div className={classes.root}>
          <h2 style={{ fontWeight: "normal", color: "#333" }}>
            People also ask
          </h2>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What are your hobbies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I enjoy reading technical blogs and philosophy. 
                When I'm not reading for leisure, I spend my free time 
                writing about random stuff and gaming. I also like listening to music,
                especially silent ones. 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Are you open for work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes. I am always open to work on innovate projects with 
                creative projects as well as job opportunities.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                What's the fastest way to reach you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               Definitely email. You may Contact me at <a target="_blank" href="mailto:saketkhopkar910@gmail.com">saketkhopkar910@gmail.com</a>.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography className={classes.heading}>
                What motivates you?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Meeting deadlines, targets or goals. Mentoring and coaching others, Learning new things, 
              coming up with creative ideas to improve something, and making something new.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
