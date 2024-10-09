import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import PersonaInfo from "./body/PersonaInfo";
import Address from "./body/Address";
import BankInfo from "./body/BankInfo";
import AccountSetting from "./body/AccountSetting";
import { useOutletContext, useParams } from "react-router-dom";
import {
  useEditServiceProviderInfoByIdMutation,
  useGetServiceProviderInfoByIdQuery,
} from "../../../../../../../features/serviceProvider/serviceProviderSlice";
import Loader from "../../../../../../../Utils/Loader";
import { toast } from "react-toastify";

const Settings = () => {
  const [value, setValue] = useState("personal_info");
  const { _id } = useParams();
  const {
    data: serviceProviderData,
    isLoading,
    refetch: settingRefetch,
  } = useGetServiceProviderInfoByIdQuery(_id);
  const { serviceProviderDetailsRefetch } = useOutletContext();
  // console.log(serviceProviderData?.data);

  const [
    editServiceProviderInfo,
    { data, isError, error, isLoading: editLoading, isSuccess },
  ] = useEditServiceProviderInfoByIdMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      settingRefetch();
      serviceProviderDetailsRefetch();
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isSuccess, isError]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Box
      sx={{
        margin: "auto",
        padding: "0 20px",
      }}
    >
      <Header value={value} setValue={setValue} />
      {value === "personal_info" && (
        <PersonaInfo
          serviceProviderData={serviceProviderData?.data}
          settingRefetch={settingRefetch}
          serviceProviderDetailsRefetch={serviceProviderDetailsRefetch}
          editServiceProviderInfo={editServiceProviderInfo}
          editLoading={editLoading}
        />
      )}
      {value === "address" && (
        <Address
          serviceProviderData={serviceProviderData?.data}
          settingRefetch={settingRefetch}
          serviceProviderDetailsRefetch={serviceProviderDetailsRefetch}
          editServiceProviderInfo={editServiceProviderInfo}
          editLoading={editLoading}
        />
      )}
      {value === "bank_info" && (
        <BankInfo
          serviceProviderData={serviceProviderData?.data}
          settingRefetch={settingRefetch}
          serviceProviderDetailsRefetch={serviceProviderDetailsRefetch}
          editServiceProviderInfo={editServiceProviderInfo}
          editLoading={editLoading}
        />
      )}
      {value === "account_setting" && <AccountSetting />}
    </Box>
  );
};

export default Settings;
