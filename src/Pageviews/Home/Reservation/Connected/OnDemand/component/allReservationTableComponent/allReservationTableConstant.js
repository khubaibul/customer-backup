import { Typography } from "@mui/material";
import ActionComponent from "./ActionComponent";
import CustomerNamePhoneComponent from "./CustomerNamePhoneComponent";
import IssuesComponent from "./IssuesComponent";
import LocationComponent from "./LocationComponent";
import StatusComponent from "./StatusComponent";
import RequestIdComponent from "./RequestIdComponent";
import MachineTypeComponent from "./MachineTypeComponent";
import InvoiceComponent from "./InvoiceComponent";
import AssignServiceProviderComponent from "../../../../commonComponent/AssignServiceProviderComponent";

export const columns = [
  {
    field: "customer_name",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        CUSTOMER NAME
      </Typography>
    ),
    renderCell: (props) => <CustomerNamePhoneComponent props={props} />,
    width: 200,
  },
  {
    field: "reservation_id",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        REQUEST ID
      </Typography>
    ),
    renderCell: (props) => <RequestIdComponent props={props} />,
    width: 120,
  },
  {
    field: "status",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        STATUS
      </Typography>
    ),
    renderCell: (props) => <StatusComponent props={props} />,
    width: 160,
  },
  {
    field: "machine_status",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        MACHINE STATUS
      </Typography>
    ),
    renderCell: (props) => (
      <Typography
        sx={{ color: "#25213B", fontWeight: "600", fontSize: "14px" }}
      >
        No Data
      </Typography>
    ),
    width: 160,
  },
  {
    field: "machineType",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        MACHINE TYPE
      </Typography>
    ),
    renderCell: (props) => <MachineTypeComponent props={props} />,
    width: 150,
  },
  {
    field: "location",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        LOCATION
      </Typography>
    ),
    renderCell: (props) => <LocationComponent props={props} />,
    width: 120,
  },
  {
    field: "invoice",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        INVOICE
      </Typography>
    ),
    renderCell: (props) => <InvoiceComponent props={props} />,
    width: 120,
  },
  {
    field: "problems",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        PROBLEMS
      </Typography>
    ),
    renderCell: (props) => <IssuesComponent props={props} />,
    width: 160,
  },
  {
    field: "assign",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        ASSIGN
      </Typography>
    ),
    renderCell: (props) => <AssignServiceProviderComponent props={props} />,
    width: 180,
  },
  {
    field: "action",
    headerName: (
      <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
        ACTION
      </Typography>
    ),
    renderCell: (props) => <ActionComponent props={props} />,
    width: 100,
  },
];
