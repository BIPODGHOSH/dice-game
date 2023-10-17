import React from "react";
import { Button, Dialog, DialogContent } from "@mui/material";

const ShowRule = ({ setShowRules, showRules }) => {
  const handleClose = () => {
    setShowRules(!showRules);
  };
  return (
    <Dialog open={showRules} onClose={handleClose}>
      <DialogContent dividers>
        <div>
          <p>You need to select a number before clicking on dice</p>
          <p>
            After click on dice if your selected number equal to dice number
            then you get 6 point
          </p>
          <p>
            if your selected number isn't equal to dice number then 1 point will
            be deducted from your current score
          </p>
        </div>
        <div>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowRule;
