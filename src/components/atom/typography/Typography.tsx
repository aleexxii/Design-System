import React from "react";
import TypographyPropsType from "./type";

const Typography = ({
  tag = "p",
  name = "Name is not provided",
  classes,
  children,
}: TypographyPropsType) => {
  return React.createElement(
    tag,
    {
      className: classes,
    },
    name,
    children
  );
};

export default Typography;
