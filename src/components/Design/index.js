import { Paper, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import Popper from "@mui/material/Popper";
const DesignCard = ({ image }) => {
  const date = new Date();
  const options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const [isCopiedTrackingid, setIsCopiedTracingId] = useState(false);
  const copyTrackingIdToClipboard = () => {
    const textToCopy = document.getElementById("trackingID").textContent;
    navigator.clipboard.writeText(textToCopy);
    setIsCopiedTracingId(true);
    setTimeout(() => setIsCopiedTracingId(false), 1000);
  };
  return (
    <>
      <Paper
        elevation={10}
        sx={{
          width: "250px",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          borderRadius: 2,
        }}
      >
        <img
          src={image}
          height={"120px"}
          width={"100%"}
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
        <Box sx={{ p: 1 }}>
          <Box
            sx={{
              backgroundColor: "green",
              p: 0.5,
              borderRadius: 2,
              textAlign: "center",
              color: "#fff",
              width: 100,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Product
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{ mt: 2, fontWeight: "bold", wordWrap: "break-word" }}
          >
            Lorem Ipsum Dolor sit amet
          </Typography>
          <Typography variant="h6">Claimed : {formattedDate}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Tracking Number : </Typography>
            <p id="trackingID">123456</p>
          </Box>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%", textTransform: "none" }}
            onClick={copyTrackingIdToClipboard}
          >
            <Typography variant="h6">Copy Tracking #</Typography>
          </Button>
          <Popper
            sx={{
              ml: "45%",
              mt: 10,
            }}
            open={isCopiedTrackingid}
          >
            Tracking ID is Copied!
          </Popper>
        </Box>
      </Paper>
    </>
  );
};

export default DesignCard;
