import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import style from "./btn.module.css";

const Btn = ({ title, button }) => {
  return (
    <header className={style.head}>
      <h1 className={style.title}>{title}</h1>
      <Button
        className={style.button}
        href="https://github.com/2F4S7/goit-react-hw-02-phonebook"
        target="_blank"
        variant="dark"
        key={button}
      >
        Github Repository
      </Button>{" "}
    </header>
  );
};

export default Btn;
