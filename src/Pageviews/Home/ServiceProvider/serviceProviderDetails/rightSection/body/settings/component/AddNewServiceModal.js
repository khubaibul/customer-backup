import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

const AddNewServiceModal = ({
  addNewServiceModal,
  setAddNewServiceModal,
  services,
  setServices,
}) => {
  const addNewService = (e) => {
    e.preventDefault();
    setServices((prevServices) => [
      e.target?.new_service?.value,
      ...prevServices,
    ]);
    e.target.reset();
  };
  return (
    <Modal
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={addNewServiceModal}
    >
      <Container
        sx={{
          width: "30%",
          background: "white",
          borderRadius: "20px",
          padding: "24px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#24459C",
              textAlign: "center",
            }}
          >
            Add New Service
          </Typography>
          <Button
            sx={{
              color: "#D1D5DB",
              cursor: "pointer",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={() => {
              setAddNewServiceModal(!addNewServiceModal);
            }}
          >
            <Close />
          </Button>
        </Box>
        <Box sx={{ padding: "8px" }}>
          <Box sx={{ padding: "8px 0px 16px 0px" }}>
            {services?.map((service) => (
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                }}
              >
                *{service}
              </Typography>
            ))}
          </Box>
          <form onSubmit={addNewService}>
            <TextField
              name="new_service"
              id="outlined-basic"
              label="Add New Service"
              variant="outlined"
              size="small"
              sx={{
                fontWeight: "700",
                color: "#111827",
                fontSize: "14px",
                width: "100%",
              }}
            />
            <Button
              type="submit"
              sx={{
                marginTop: "10px",
                textTransform: "none",
                fontWeight: "600",
                color: "white",
                background: "#24459C",
                "&:hover": {
                  background: "#24459C",
                  opacity: "75%",
                },
                padding: "2px 32px",
              }}
            >
              Add
            </Button>
          </form>
        </Box>
      </Container>
    </Modal>
  );
};

export default AddNewServiceModal;
