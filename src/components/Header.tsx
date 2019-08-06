import React, { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { colors, SMALL_SCREEN_MEDIA_QUERY } from "../styles";

const useStyles = makeStyles({
  header: {
    padding: "0 20px",
    height: 80,
    backgroundColor: colors.dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    display: "inline-block",
    height: 60,
    width: "auto"
  },
  donate: {
    color: colors.white,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(/wcs-logo.png)",
    backgroundSize: "auto 30px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    padding: "12px 10px 12px 60px",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: colors.white,
    borderWidth: 1,
    "&:hover": {
      color: colors.mediumGray,
      borderColor: colors.mediumGray
    }
  },
  [SMALL_SCREEN_MEDIA_QUERY]: {
    donate: {
      display: "none"
    }
  }
});

const Header: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <a href="/#">
        <img className={classes.logo} src="/logo.png" alt="logo" />
      </a>
      <a
        className={classes.donate}
        href="https://secure.wcs.org/donate/donate-and-help-save-wildlife"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Donate to WCS</span>
      </a>
    </header>
  );
};

export default Header;
