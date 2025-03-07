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

// useStyles is a function that generates styles using Material-UI's theme. It has 2 style classes
const useStyles = makeStyles((theme) => ({      
  root: {
    width: "100%"    // 1) root : Sets the width to "100%", making the component take full width.
  },
  heading: {    // 2) heading : styles the text with fontSize and fontWeight
    fontSize: theme.typography.pxToRem(16),  // Converts 16px to a responsive rem unit.
    fontWeight: theme.typography.fontWeightRegular  // Uses the theme’s default font weight for regular text.
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
          </h2>    {/* Accordion, AccordionSummary,ExpandMoreIcon, Typography and AccordionDetails are from yours truly - materialUI */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}   // <ExpandMoreIcon /> is down arrow icon from material-ui, whch expands things below it.
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What are your hobbies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Oh, I absolutely love diving into blogs on technical topics, psychology, and philosophy—because 
              who doesn't enjoy overthinking everything? When I'm not reading, I spend my free 
              time blogging about the chaos in my mind and gaming (because reality just isn't 
              challenging enough). I also enjoy music, especially the silent genre—nothing quite 
              like pure nothingness to set the mood.
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
              Yes, absolutely. I'm always open to working on innovative projects that push boundaries, 
              as well as creative ventures that actually make sense. Oh, and of course, job 
              opportunities—because who doesn't love those?
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
               Definitely email is the best option. You may Contact me 
               at <a target="_blank" href="mailto:saketkhopkar910@gmail.com">saketkhopkar910@gmail.com</a>.
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
              Ah yes, the ultimate checklist of productivity—crushing deadlines, hitting targets, and achieving 
              goals like it's a competitive sport. Guiding others through mentoring and coaching, 
              because wisdom is best when shared (or at least attempted). Constantly learning new things, 
              because ignorance isn't exactly a flex. And, of course, dreaming up creative solutions to fix what 
              shouldn't have been broken in the first place, all while building something new—because why settle 
              for the ordinary?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
