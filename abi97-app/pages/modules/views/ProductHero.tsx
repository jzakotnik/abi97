import React, { useState } from "react";

import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import CreateMessageDialog from "./CreateMessageDialog";

const backgroundImage = "background.jpg";

async function addMessage({
  sender,
  text,
  email,
  willParticipate,
  willInfo,
}: any) {
  console.log(
    "Adding message, ",
    sender,
    text,
    email,
    willParticipate,
    willInfo
  );

  const res = await fetch("/api/post", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      sender: sender,
      text: text,
      email: email,
      willParticipate: willParticipate,
      willInfo: willInfo,
    }),
  });
}

export default function ProductHero({ refresh }: any) {
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);

  const handleSubmit = (event: any) => {
    setMessageDialogOpen(true);
  };

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        25-jähriges Abi 97
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        10. September 2022, Marktschänke Rahden
      </Typography>

      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        onClick={() => handleSubmit()}
        sx={{ minWidth: 200 }}
      >
        Nachricht schreiben..
      </Button>
      <CreateMessageDialog
        open={messageDialogOpen}
        onClose={() => setMessageDialogOpen(false)}
        onSaveAndClose={async (payload) => {
          await addMessage(payload);
          setMessageDialogOpen(false);
          refresh();
        }}
      />
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Ja, ich will euch eine Nachricht auf der Pinnwand hinterlassen..
      </Typography>
    </ProductHeroLayout>
  );
}
