
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon, StyledLabel } from './Checkbox.styles';

const Checkbox = ({ labelText, className, checked, ...props }) => {
    
    return (
    <StyledLabel>
        <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
        </CheckboxContainer>
        {labelText}
    </StyledLabel>
  )
}
export default Checkbox;