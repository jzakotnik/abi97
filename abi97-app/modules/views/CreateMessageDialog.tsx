import React, { useState } from "react";
import Button from "@mui/material/Button";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import MenuItem from "@mui/material/MenuItem";

import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

import { DialogContent } from "@mui/material";

export interface CreateMessageDialogProps {
  open: boolean;
  onClose: () => void;
  onSaveAndClose: (value: any) => void;
}

export interface MessageDataDialogProps {
  sender: string;
  email: string;
  text: string;
  willParticipate: boolean;
  willInfo: boolean;
}

export default function CreateMessageDialog(props: CreateMessageDialogProps) {
  const { onClose, onSaveAndClose, open } = props;

  const [messageData, setMessageData] = useState<MessageDataDialogProps>({
    sender: "",
    email: "",
    text: "",
    willParticipate: false,
    willInfo: false,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    //console.log("Input Change", name, value);
    setMessageData({
      ...messageData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    //console.log("Input Change", name, checked);
    setMessageData({
      ...messageData,
      [name]: checked,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSaveAndClose(messageData);
    console.log(messageData);
  };

  return (
    <Dialog fullWidth maxWidth="sm" onClose={onClose} open={open}>
      <DialogTitle>Meine Nachricht..</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="sender-input"
                name="sender"
                label="Name"
                type="text"
                fullWidth
                value={messageData.sender}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email-input"
                name="email"
                label="eMail"
                type="text"
                fullWidth
                value={messageData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="text-input"
                name="text"
                label="Bei Abi97 denke ich an..."
                type="text"
                multiline
                rows={4}
                fullWidth
                value={messageData.text}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="text-input"
                    checked={messageData.willParticipate}
                    name="willParticipate"
                    value={messageData.willParticipate}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Bin physisch dabei"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="text-input"
                    name="willInfo"
                    checked={messageData.willInfo}
                    value={messageData.willInfo}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Haltet mich auf dem Laufenden"
              />
            </Grid>

            <Grid item container justifyContent="flex-end">
              <Button variant="contained" color="primary" type="submit">
                Abschicken
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}
