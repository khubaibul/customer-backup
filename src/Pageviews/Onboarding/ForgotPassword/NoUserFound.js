import React from "react";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import messageIcon from "../../../Assets/Onboarding/Login/linksentModalTopIcon.svg";

const NoUserFound = ({ noUserFoundModal, setNoUserFoundModal }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={noUserFoundModal}
    >
      <Container
        sx={{
          width: "30%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginTop: "-80px" }}>
          <img src={messageIcon} alt="" style={{}} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            marginTop: "16px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "700",
              color: "#E77824",
            }}
          >
            No user found
          </Typography>
          <Typography
            sx={{ color: "#6B7280", fontSize: "14px", textAlign: "center" }}
          >
            Please type a valid email address which is registered in Showa
            system
          </Typography>
          <Button
            onClick={() => setNoUserFoundModal(!noUserFoundModal)}
            sx={{
              width: "100%",
              borderRadius: "8px",
              padding: "8px 10px",
              background: "#24459C",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#24459C",
              },
            }}
          >
            Okay
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default NoUserFound;
