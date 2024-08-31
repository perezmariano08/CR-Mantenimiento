import styled from "styled-components";

export const LayoutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 20px;
    gap: 20px;
    width: 100%;

    .logo {
        width: 150px;
    }
`

export const SelectWrapper = styled.select`
    background-color: var(--gray-300);
    color: var(--white);
    padding: 6px 12px;
    border-radius: 20px;
    border: none;
`