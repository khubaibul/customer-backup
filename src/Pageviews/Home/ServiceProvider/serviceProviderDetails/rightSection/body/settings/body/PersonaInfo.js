import { Cancel, EditOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import editIcon from "../../../../../../../../Assets/Home/customer/customer_edit.png";
import addPhoto from "../../../../../../../../Assets/Home/marketplace/add_photo_box.png";
import AddNewServiceModal from "../component/AddNewServiceModal";
import ProgressingLoader from "../../../../../../../../Utils/ProgressingLoader";

const PersonaInfo = ({
  serviceProviderData,
  editServiceProviderInfo,
  editLoading,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [uploadedProfileImage, setUploadedProfileImage] = useState(
    serviceProviderData?.photoUrl
  );
  const [docImages, setDocImages] = useState([]);
  const [registrationDocumentState, setRegistrationDocumentState] = useState(
    serviceProviderData?.registrationDocument || []
  );
  const [addNewServiceModal, setAddNewServiceModal] = useState(false);
  const [services, setServices] = useState(serviceProviderData?.services);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const imageUploadFunc = async (e) => {
    if (e.target.files && e.target.files[0]?.name) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);

      const res = await fetch(
        `http://localhost:5000/api/v2/extra-data/upload-photo?folder=files`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setUploadedProfileImage(data?.data?.url);

      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const removeImageFromRegistrationDoc = (indexToRemove) => {
    const newImages = registrationDocumentState?.filter(
      (photo, i) => i !== indexToRemove
    );
    setRegistrationDocumentState(newImages);
  };

  const onImageChange = async (e) => {
    if (e.target.files && e.target.files[0]?.name) {
      const files = e.target.files;
      const fileName = files[0].name;
      const fileType = files[0].type;
      if (e.target.files && e.target.files[0]?.name) {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        const res = await fetch(
          `http://localhost:5000/api/v2/extra-data/upload-photo?folder=files`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        const uploadedImage = {
          photoUrl: data?.data?.url,
          title: fileName,
        };
        setRegistrationDocumentState((prevServices) => [
          ...prevServices,
          uploadedImage,
        ]);
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  };
  const onSubmit = (data) => {
    editServiceProviderInfo({
      data: {
        photoUrl: uploadedProfileImage,
        companyName: data?.companyName,
        invoiceRegistrationNo: data?.invoiceRegistrationNo,
        services,
        capital: Number(data?.capital) || serviceProviderData?.capital,
        registrationDocument: registrationDocumentState,
      },
      _id: serviceProviderData?._id,
    });
  };
  return (
    <>
      {addNewServiceModal && (
        <AddNewServiceModal
          addNewServiceModal={addNewServiceModal}
          setAddNewServiceModal={setAddNewServiceModal}
          services={services}
          setServices={setServices}
        />
      )}
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
              Personal Info
            </Typography>

            <Button onClick={() => setEditOpen(!editOpen)}>
              <img src={editIcon} alt="" />
            </Button>
          </Box>
          {/* View Start */}
          {!editOpen && (
            <Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={serviceProviderData?.photoUrl}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  alt=""
                />
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
                    width: "25%",
                  }}
                >
                  Company Name
                </Typography>

                <Typography
                  variant="p"
                  sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
                >
                  {serviceProviderData?.companyName}
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
                    width: "25%",
                  }}
                >
                  Company Reg No.
                </Typography>

                <Typography
                  variant="p"
                  sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
                >
                  {serviceProviderData?.invoiceRegistrationNo}
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
                    width: "25%",
                  }}
                >
                  Email
                </Typography>

                <Typography
                  variant="p"
                  sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
                >
                  {serviceProviderData?.emergencyContact?.email}
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
                    width: "25%",
                  }}
                >
                  Select Type of Service
                </Typography>

                {services?.map((service) => (
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "600",
                      color: "#6B7280",
                      fontSize: "14px",
                      marginRight: "4px",
                    }}
                  >
                    {service},
                  </Typography>
                ))}
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
                    width: "25%",
                  }}
                >
                  Company’s Capital Size{" "}
                </Typography>

                <Typography
                  variant="p"
                  sx={{ fontWeight: "600", color: "#6B7280", fontSize: "14px" }}
                >
                  ¥{serviceProviderData?.capital}
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
                    width: "25%",
                  }}
                >
                  Documents
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "24px",
                  }}
                >
                  {serviceProviderData?.registrationDocument?.map((doc) => (
                    <Box
                      sx={{
                        background: "white",
                        boxShadow: "5px 5px 10px 0 rgba(33, 43, 54, 0.08)",
                        padding: "2px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={doc?.photoUrl}
                        alt=""
                        style={{
                          width: "162px",
                          height: "118px",
                          borderRadius: "2px",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            </Box>
          )}
          {/* View End */}
          {/* Edit Start */}
          {editOpen && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
              {uploadedProfileImage ? (
                <Box
                  sx={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <button
                    onClick={() => setUploadedProfileImage(null)}
                    style={{
                      position: "absolute",
                      background: "#D7E0E7",
                      width: "24px",
                      height: "24px",
                      borderRadius: "100%",
                      padding: "0px",
                      right: 1,
                      top: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "0px",
                      cursor: "pointer",
                    }}
                  >
                    <Cancel sx={{ color: "red", fontSize: "18px" }} />
                  </button>
                  <img
                    style={{
                      border: "1px solid #D7E0E7",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height: "100px",
                    }}
                    src={uploadedProfileImage}
                    alt=""
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <label
                    style={{
                      border: "1px solid #D7E0E7",
                      borderRadius: "5px",
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={imageUploadFunc}
                    />
                    <img src={addPhoto} alt="" />
                  </label>
                  <Typography
                    sx={{
                      color: "#868DAA",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Edit Image
                  </Typography>
                </Box>
              )}
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
                  {...register("companyName")}
                  id="outlined-basic"
                  label="Company Name"
                  placeholder={serviceProviderData?.companyName}
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
                  {...register("invoiceRegistrationNo")}
                  id="outlined-basic"
                  label="Company Reg No."
                  placeholder={serviceProviderData?.invoiceRegistrationNo}
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
                <FormControl size="small" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Service Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Service Type"
                  >
                    <MenuItem value={"add_new"}>
                      <Button
                        sx={{ textTransform: "none", fontWeight: "600" }}
                        onClick={() =>
                          setAddNewServiceModal(!addNewServiceModal)
                        }
                      >
                        Add New
                      </Button>
                    </MenuItem>
                    {services?.map((service) => (
                      <MenuItem value={service}>{service}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  {...register("capital")}
                  id="outlined-basic"
                  label="Company’s Capital Size"
                  placeholder={serviceProviderData?.capital}
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    fontWeight: "700",
                    color: "#111827",
                    fontSize: "14px",
                  }}
                />
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
                    width: "25%",
                  }}
                >
                  Update Documents
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "24px",
                  }}
                >
                  {registrationDocumentState?.map((doc, i) => (
                    <Box sx={{ position: "relative" }}>
                      <button
                        onClick={() => removeImageFromRegistrationDoc(i)}
                        style={{
                          position: "absolute",
                          background: "#D7E0E7",
                          width: "32px",
                          height: "32px",
                          borderRadius: "100%",
                          padding: "0px",
                          right: 4,
                          top: 4,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "0px",
                          cursor: "pointer",
                        }}
                      >
                        <Cancel sx={{ color: "red" }} />
                      </button>
                      <img
                        style={{
                          border: "1px solid #D7E0E7",
                          borderRadius: "5px",
                          width: "150px",
                          height: "150px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        src={doc?.photoUrl}
                        alt=""
                      />
                    </Box>
                  ))}

                  {(registrationDocumentState?.length <= 2 ||
                    !registrationDocumentState?.length) && (
                    <label
                      style={{
                        border: "1px solid #D7E0E7",
                        borderRadius: "5px",
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={onImageChange}
                      />
                      <img src={addPhoto} alt="" />
                    </label>
                  )}
                </Box>
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
              <hr style={{ background: "#E6E8F0", opacity: "20%" }} />
            </form>
          )}
          {/* Edit End */}
        </Box>
      </Box>
    </>
  );
};

export default PersonaInfo;
