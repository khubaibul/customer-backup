import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button, Tooltip } from "@mui/material";

import { useState } from "react";

const ProductListContainer = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(false);

  //   const products = useSelector((state) => state.products.products);
  //   const dispatch = useDispatch();
  //   const handleOpen = (id) => {
  //     const productFounded = products.find((value) => value.id === id);
  //     setProduct(productFounded);
  //     setOpen(true);
  //   };
  const handleClose = () => setOpen(false);

  const products = [
    {
      id: 1,
      title: "AAA",
      description: "toi ai kittam",
      category: "FHSA",
      regularPrice: 500,
      extraPrice: 500,
      taxAmount: 20,
      weight: 20,
      height: 20,
      length: 20,
      width: 20,
      stock: 20,
    },
  ];
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Title",
    },
    {
      field: "description",
      headerName: "Description",
    },
    {
      field: "category",
      headerName: "Category",
    },
    {
      field: "regularPrice",
      headerName: "Regular Price",
    },
    {
      field: "extraPrice",
      headerName: "Extra Price",
    },
    {
      field: "taxAmount",
      headerName: "Tax Amount",
    },
    {
      field: "weight",
      headerName: "Weight",
    },
    {
      field: "height",
      headerName: "Height",
    },
    {
      field: "length",
      headerName: "Length",
    },
    {
      field: "width",
      headerName: "Width",
    },
    {
      field: "totalStock",
      headerName: "Total Stock",
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Tooltip title="Edit">
            <Button
              variant="contained"
              color="secondary"
              //   onClick={() => handleOpen(params.id)}
            >
              View
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              variant="contained"
              color="error"
              //   onClick={() => dispatch(deleteProduct(params.id))}
            >
              Delete
            </Button>
          </Tooltip>
        </div>
      ),
      width: 180,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "80vw", margin: "50px auto" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      {/* <ModalContainer handleClose={handleClose} product={product} open={open}/> */}
    </Box>
  );
};

export default ProductListContainer;
