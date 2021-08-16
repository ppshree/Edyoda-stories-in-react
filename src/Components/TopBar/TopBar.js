import React from "react";
import classes from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.leftDiv}>
        <div className={classes.logoWrapper}>
          <div>EDYODA</div>
          <p>Stories</p>
        </div>
        <div className={classes.exploreCategoriesWrapper}>
          <p>
            Explore Categories <i class="fas fa-caret-down"></i>
          </p>
        </div>
      </div>
      <div className={classes.rightDiv}>
        <div className={classes.paraWrapper}>
          EdYoda is free learning and knowledge
          <br />
          sharing platform for techies.
        </div>
        <div className={classes.btnWrapper}>
          <button>Go To Main Website</button>
        </div>
      </div>
      <div className={classes.hamburgerWrapper}>
        <i class="fas fa-bars"></i>
      </div>
    </div>
  );
}
