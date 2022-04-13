import { StyledButton } from "./Button.styles"

const Button = ({children, disabled}) => {
  return (
    <StyledButton disabled={disabled}>
        {children}
    </StyledButton>
  )
};

export default Button;