import { Close, Delete, RotateLeft } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

const ResetPasswordModal = ({ resetPasswordModal, setResetPasswordModal }) => {
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={resetPasswordModal}
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
              setResetPasswordModal(!resetPasswordModal);
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
              border: "2px solid #6169AE",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
            }}
          >
            <RotateLeft sx={{ color: "#6169AE", fontSize: "36px" }} />
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
              Do you really want to reset the password? This process <br />{" "}
              can’t be undone!{" "}
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
              setResetPasswordModal(!resetPasswordModal);
            }}
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              textTransform: "none",
              padding: "8px 10px",
              background: "#F6F6F6",
              fontSize: "14px",
              color: "#959596",
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: "160px",
              height: "36px",
              borderRadius: "20px",
              textTransform: "none",
              padding: "8px 10px",
              background: "#6169AE",
              fontSize: "14px",
              fontWeight: "600",
              color: "#FFFFFF",
              "&:hover": {
                background: "#6169AE",
              },
            }}
          >
            Delete
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default ResetPasswordModal;
