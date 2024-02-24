// src/index.tsx
import { styled } from "@stitches/react";
var Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "red",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "bold",
  color: "$white",
  variants: {
    size: {
      "small": {
        fontSize: 14,
        padding: "$2 $4"
      },
      "big": {
        fontSize: 16,
        padding: "$3 $6"
      }
    }
  },
  defaultVariants: {
    size: "big"
  }
});
export {
  Button
};
