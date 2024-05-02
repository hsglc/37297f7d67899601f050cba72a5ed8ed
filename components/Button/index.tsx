import { Button as DefaulButton } from "./styled";
import type { Props } from "./types";

export const Button = (props: Props) => {
  return <DefaulButton {...props}>{props.children}</DefaulButton>;
};
