import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const RowItem = styled(Grid)({
  float: "left",
});

export const ToggleRow = styled(Grid)({
  width: "90%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: "5px",
  paddingBottom: "5px",
});

export const Row = styled(Grid)({
  width: "100%",
  margin: "5px 0px",
  border: "solid 1px rgba(0, 0, 0, 0.1)",
  padding: "0px 10px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
});

export const Text = styled.span({
  fontFamily: "sfpro",
  fontWeight: 500,
  color: "#000",
  fontSize: 18,
  marginRight: 5,
  wordWrap: "break-word",
  width: "100%",
});

export const useStyles = makeStyles({
  editIcon: {
    width: 25,
    height: 25,
    color: "#007bff",
  },
  deleteIcon: {
    width: 25,
    height: 25,
    color: "#dc3545",
  },
  strike: {
    textDecoration: "line-through",
  },
  Input: {
    fontFamily: "sfpro !important",
    fontSize: "18px !important",
    width: "100%",
    "& .MuiFormLabel-root": {
      color: "#000",
    },
  },
});
