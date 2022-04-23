import styled from "styled-components";

export const PaginateContainer = styled.div(
  ({ theme }) => `
    .pagination {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        margin: 5.6rem 0;
        font-family: "Nunito", sans-serif;
      }
      .break {
        padding: 0.8rem;
      }
      .page-item {
        padding: 0.8rem;
        &:first-child {
          padding: 0.8rem 3.3rem 0.8rem 0;
        }
        &:last-child {
          padding: 0.8rem 0 0.8rem 3.3rem;
        }
      }
      .page-link {
        display: block;
        color: ${theme.colors.black};
        font-size: ${theme.fontSize.font_14};
        font-weight: ${theme.fontWeight.bold};
        line-height: 1.6rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      .active-link {
        .page-link {
          color: ${theme.colors.blue};
        }
      }
      .page-item.disabled {
        .page-link {
          color: ${theme.colors.gray};
        }
      }
    `
);
