import React from "react";
import { Close, Delete, MailOutline } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import ProgressingLoader from "../../../../Utils/ProgressingLoader";

const InvitationModal = ({
  invitationModal,
  setInvitationModal,
  postMember,
  invitationData,
  isLoading,
}) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={invitationModal}
    >
      <Container
        sx={{
          width: "30%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
            }}
            onClick={() => {
              setInvitationModal(!invitationModal);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box
          sx={{
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "20px 0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "2px solid #14B8A6",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
            }}
          >
            <MailOutline sx={{ color: "#14B8A6", fontSize: "36px" }} />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "12px 0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "24px", color: "#646565", fontWeight: "700" }}
            >
              Are you sure?
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#9BA1AD", fontWeight: "400" }}
            >
              Check your mail for invitation to complete profile.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "12px 28px",
            display: "flex",
            justifyContent: "end",
            gap: "24px",
          }}
        >
          <Button
            onClick={() => {
              setInvitationModal(!invitationModal);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#F6F6F6",
              fontSize: "14px",
              color: "#959596",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => postMember(invitationData)}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              padding: "8px 10px",
              background: "#14B8A6",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#14B8A6",
              },
            }}
          >
            {isLoading ? <ProgressingLoader /> : "Send Email"}
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default InvitationModal;
