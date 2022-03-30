import styled from "@emotion/styled";
import { makeStyles } from "@mui/styles";

export const Text = styled.span({
  fontFamily: "sfpro",
  fontWeight: 500,
  fontSize: 20,
  color: "#000",
});

export const useStyles = makeStyles({
  addIcon: {
    width: 25,
    height: 25,
    cursor: "pointer",
    color: "#28a745",
    paddingLeft: 8,
  },
});
