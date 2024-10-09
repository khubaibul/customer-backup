import { Close } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InvitationModal from "./InvitationModal";
import { useInviteMemberMutation } from "../../../../features/extraData/extraDataSlice";
import { toast } from "react-toastify";

const AddServiceProviderModal = ({
  addServiceProviderModalOpen,
  setAddServiceProviderModalOpen,
}) => {
  const [invitationModal, setInvitationModal] = useState(false);
  const [invitationData, setInvitationData] = useState({});
  const { register, handleSubmit } = useForm();

  const [postMember, { data, isError, error, isLoading, isSuccess }] =
    useInviteMemberMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      setAddServiceProviderModalOpen(false);
      setInvitationModal(false);
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  const onSubmit = (formData, e) => {
    e.preventDefault();
    const data = {
      type: "serviceProviderAdmin",
      serviceProviderAdmin: {
        email: formData?.email,
        phone: formData?.phone,
        companyName: formData?.company_name,
      },
    };
    setInvitationData(data);
  };
  return (
    <>
      {invitationModal && (
        <InvitationModal
          invitationModal={invitationModal}
          setInvitationModal={setInvitationModal}
          postMember={postMember}
          invitationData={invitationData}
          isLoading={isLoading}
        />
      )}
      <Modal
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={addServiceProviderModalOpen}
      >
        <Container
          sx={{
            width: "35%",
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
              Add Service Provider
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
                setAddServiceProviderModalOpen(!addServiceProviderModalOpen);
                //   setCsvFile(null);
              }}
            >
              <Close />
            </Button>
          </Box>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                mb: "8px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F6F6F6",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <Typography sx={{ color: "#C7CCD8", fontWeight: "400" }}>
                  Company Name
                </Typography>
                <input
                  {...register("company_name")}
                  style={{
                    background: "#F6F6F6",
                    color: "#65748B",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                  className="no-outline-on-input-focus"
                  size="medium"
                  name="company_name"
                  placeholder="ANTT Robotics Ltd."
                  label="company_name"
                />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F6F6F6",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <Typography sx={{ color: "#C7CCD8", fontWeight: "400" }}>
                  Email Address
                </Typography>
                <input
                  {...register("email")}
                  style={{
                    background: "#F6F6F6",
                    color: "#65748B",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                  className="no-outline-on-input-focus"
                  size="medium"
                  name="email"
                  placeholder="antt@gmail.com"
                  label="Email Address"
                />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#F6F6F6",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  color: "#65748B",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <Typography sx={{ color: "#C7CCD8", fontWeight: "400" }}>
                  Phone
                </Typography>
                <input
                  {...register("phone")}
                  style={{
                    color: "#65748B",
                    fontSize: "16px",
                    fontWeight: "700",
                    background: "#F6F6F6",
                  }}
                  className="no-outline-on-input-focus"
                  name="phone"
                  label="Phone"
                  placeholder="+880123544847"
                />
              </label>
            </Box>

            {/* {isError && <Typography>{error?.message}</Typography>} */}
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
                  setAddServiceProviderModalOpen(!addServiceProviderModalOpen);
                  //   setCsvFile(null);
                }}
                sx={{
                  width: "160px",
                  height: "36px",
                  borderRadius: "20px",
                  padding: "8px 10px",
                  background: "white",
                  fontSize: "14px",
                  color: "#959596",
                }}
              >
                Cancel
              </Button>
              <button
                onClick={() => setInvitationModal(!invitationModal)}
                type="submit"
                //   disabled={isLoading}
                style={{
                  width: "160px",
                  height: "36px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
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
                Save
                {/* {isLoading ? "Saving..." : "Save"} */}
              </button>
            </Box>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default AddServiceProviderModal;
