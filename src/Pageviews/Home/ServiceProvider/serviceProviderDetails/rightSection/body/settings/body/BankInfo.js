import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import editIcon from "../../../../../../../../Assets/Home/customer/customer_edit.png";
import { useForm } from "react-hook-form";
import ProgressingLoader from "../../../../../../../../Utils/ProgressingLoader";

const BankInfo = ({
  serviceProviderData,
  editServiceProviderInfo,
  editLoading,
}) => {
  const [editOpen, setEditOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    editServiceProviderInfo({
      data: {
        bank: {
          bankName: data?.bankName,
          branchName: data?.branchName,
          accountNo: Number(data?.accountNo),
        },
      },
      _id: serviceProviderData?._id,
    });
  };

  return (
    <Box sx={{ padding: "12px 60px" }}>
      <Box sx={{ paddingY: "12px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "16px 24px",
          }}
        >
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}
          >
            Bank Info
          </Typography>

          <Button onClick={() => setEditOpen(!editOpen)}>
            <img src={editIcon} alt="" />
          </Button>
        </Box>
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
        {!editOpen && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                padding: "16px 24px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "15%",
                }}
              >
                Bank Name
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {serviceProviderData?.bank?.bankName}
              </Typography>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                padding: "16px 24px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "15%",
                }}
              >
                Bank Branch
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {serviceProviderData?.bank?.branchName}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                padding: "16px 24px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "15%",
                }}
              >
                Account Type
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {/* Business Account */}...
              </Typography>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                padding: "16px 24px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "15%",
                }}
              >
                Account Number
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {serviceProviderData?.bank?.accountNo}
              </Typography>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                padding: "16px 24px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "15%",
                }}
              >
                Routing Number
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {/* DSFHKJHDFH454FSD */} ...
              </Typography>
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                padding: "16px 24px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "15%",
                }}
              >
                Swift Code
              </Typography>

              <Typography
                variant="p"
                sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
              >
                {/* DSFHKJHDFH454FSD */} ...
              </Typography>
            </Box>
          </>
        )}
        {editOpen && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <TextField
                {...register("bankName")}
                id="outlined-basic"
                label="Bank Name"
                variant="outlined"
                size="small"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "50%",
                }}
              />
              <TextField
                {...register("branchName")}
                id="outlined-basic"
                label="Bank Branch"
                variant="outlined"
                size="small"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "50%",
                }}
              />
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Account Type"
                variant="outlined"
                size="small"
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "50%",
                }}
              />
              <TextField
                {...register("accountNo")}
                id="outlined-basic"
                label="Account Number"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "50%",
                }}
              />
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                padding: "16px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Routing Number"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "50%",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Swift Code"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  fontWeight: "700",
                  color: "#111827",
                  fontSize: "14px",
                  width: "50%",
                }}
              />
            </Box>
            <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "16px 24px",
              }}
            >
              <Button
                type="submit"
                sx={{
                  background: "#24459C",
                  color: "white",
                  fontWeight: "600",
                  padding: "6px 36px",
                  textTransform: "none",
                  "&:hover": {
                    background: "#24459C",
                    opacity: "75%",
                  },
                }}
              >
                {editLoading ? <ProgressingLoader /> : "Update"}
              </Button>
            </Box>
          </form>
        )}
        <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
      </Box>
    </Box>
  );
};

export default BankInfo;
