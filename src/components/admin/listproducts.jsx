"use client";
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box } from "@mui/material";
import Image from "next/image";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from "react-bootstrap/Button";
import { deleteArticle } from "@/services/ArticleService";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Link from "next/link";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const Listproducts = ({ produits }) => {
  const router = useRouter();
  const deletearticle = (id) => {
    if (window.confirm("supprimer le produit O/N")) {
      deleteArticle(id)
        .then((res) => {
          console.log(res);
          router.refresh();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "imageart", //access nested data with dot notation
        header: "Image",
        Cell: ({ cell }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Image
              src={cell.getValue()}
              alt="product anme"
              height="20"
              width="80"
            />
          </Box>
        ),
      },

      {
        accessorKey: "designation",
        header: "Désignation",
        size: 80,
      },

      {
        accessorKey: "prix",
        header: "Prix",
        size: 80,
      },
      {
        accessorKey: "qtestock",
        header: "Stock",
        size: 80,
      },
      {
        accessorKey: "_id",
        header: "actions",
        size: 80,
        Cell: ({ cell, row }) => (
          <div>
            <Button size="md" className="text-primary btn-link edit">
              <Link
                href={`/admin/products/updateProduct/${cell.row.original._id}`}
              >
                <EditOutlinedIcon />
              </Link>
            </Button>
            <Button
              onClick={(e) => {
                deletearticle(cell.row.original._id, e);
              }}
              variant="danger"
              size="md"
              className="text-danger btn-link delete"
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        ),
      },
    ],
    [produits]
  );

  const theme = createTheme({
    components: {
      MuiTable: {
        styleOverrides: {
          root: {
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
          },
        },
      },
      MuiTableHeadCell: {
        styleOverrides: {
          root: {
            backgroundColor: "#3f51b5",
            color: "#fff",
          },
        },
      },
      MuiTableBodyCell: {
        styleOverrides: {
          root: {
            padding: "8px",
            fontSize: "14px",
          },
        },
      },
    },
  });
  return (
    <div className="container">
      <Button variant="dark" size="s">
        <Link
          href="/admin/products/newProduct"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: 14,
          }}
        >
          <AddCircleOutlineIcon /> Nouveau
        </Link>
      </Button>
      <ThemeProvider theme={theme}>
        <MaterialReactTable
          columns={columns}
          data={produits}
          initialState={{ pagination: { pageSize: 5, pageIndex: 0 } }}
        />
      </ThemeProvider>
    </div>
  );
};
export default Listproducts;
