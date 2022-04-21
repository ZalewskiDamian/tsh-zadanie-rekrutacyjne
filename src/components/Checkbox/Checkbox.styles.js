import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.colors.white};
  stroke-width: 0.2rem;
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const CheckboxInner = styled.div(
  ({ theme, props, checked }) => `
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  background: ${checked ? theme.colors.blue : theme.colors.white};
  border: 1px solid ${checked ? theme.colors.blue : theme.colors.grayLight};
  border-radius: 0.4rem;
  transition: all 150ms;
  margin-right: 0.8rem;

  ${Icon} {
    visibility: ${checked ? "visible" : "hidden"};
  }
  `
);
export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.font_14};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 3.2rem;
  }
`;
