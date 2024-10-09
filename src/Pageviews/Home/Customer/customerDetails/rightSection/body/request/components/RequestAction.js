import { Delete, Equalizer, MoreVert, Stop } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { StyledMenu } from "../../../../../styleComponents";
import viewIcon from "../../../../../../../../Assets/Home/customer/view.png";
import editIcon from "../../../../../../../../Assets/Home/customer/edit.png";
import closeIcon from "../../../../../../../../Assets/Home/customer/Machine_Status/suspended.png";
import deleteIcon from "../../../../../../../../Assets/Home/customer/delete.png";
import { Link } from "react-router-dom";
import EditModal from "../modal/EditModal";
import DeleteModal from "../modal/DeleteModal";
import ViewModal from "../modal/ViewModal";

const RequestAction = ({ props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [closeOpen, setCloseOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const openEl = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {viewOpen && (
        <ViewModal
          viewOpen={viewOpen}
          setViewOpen={setViewOpen}
          props={props}
        />
      )}
      {editOpen && (
        <EditModal
          editOpen={editOpen}
          setEditOpen={setEditOpen}
          props={props}
        />
      )}
      {deleteOpen && (
        <DeleteModal
          deleteOpen={deleteOpen}
          setDeleteOpen={setDeleteOpen}
          props={props}
        />
      )}
      <Box>
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>

        <StyledMenu anchorEl={anchorEl} open={openEl} onClose={handleClose}>
          <Box sx={{ background: "#F4F2FF" }}>
            <MenuItem
              onClick={() => {
                setViewOpen(!viewOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={viewIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                View
              </Typography>
            </MenuItem>

            <MenuItem
              onClick={() => {
                setEditOpen(!editOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={editIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Edit
              </Typography>
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: "0 6px" }}>
              <img src={closeIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Close
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setDeleteOpen(!deleteOpen);
              }}
              sx={{ display: "flex", gap: "0 6px" }}
            >
              <img src={deleteIcon} alt="" />
              <Typography sx={{ color: "#6E6893", fontSize: "14px" }}>
                Delete
              </Typography>
            </MenuItem>
          </Box>
        </StyledMenu>
      </Box>
    </>
  );
};

export default RequestAction;
