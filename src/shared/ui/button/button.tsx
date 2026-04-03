import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components";

export const Button = (props: AriaButtonProps) => {
  return (
    <AriaButton {...props}>
      {composeRenderProps(
        props.children,
        (children) => (
          <>{children}</>
        ),
      )}
    </AriaButton>
  );
};
