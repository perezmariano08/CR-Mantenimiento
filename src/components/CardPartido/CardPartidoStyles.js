import styled from "styled-components";

export const CardPartidoWrapper = styled.div`
    background-color: ${({ suspendido }) => (suspendido ? 'black' : 'var(--gray-300)')};
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    border-radius: 20px;
    max-width: 500px;
    width: 100%;
`
export const CardPartidoTitles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: center;

    h3 {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
    }

    p {
        font-size: 10px;
        font-weight: 300;
        color: var(--green)
    }
`

export const CardPartidoTeams = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`
export const CardPartidoTeam = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    min-width: 90px;
    max-width: 90px;
    min-height: 80px;

    img {
        width: 50px;
    }

    h4 {
        font-size: 12px;
        font-weight: 300;
        min-height: 24px;
        text-align: center;
    }
`
export const CardPartidoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    h5 {
        font-size: 18px;
        font-weight: 800;
    }

    p {
        font-size: 10px;
        font-weight: 300; 
    }

    h4 {
        font-size: 36px;
        line-height: 36px;
        font-weight: 800;
    }

    span {
        font-size: 14px;
        line-height: 14px;
        font-weight: 800;
    }
`

export const CardPartidoDivider = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--gray-200);
`

export const CardPartidoStats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    
    a {
        font-size: 12px;
        font-weight: 600;
        color: var(--gray-200);
    }
`
export const CardPartidoGoalsContainer= styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: start;
    gap: 25px;
    padding: 15px;

    & svg, i {
        color: var(--gray-200)
    }
`
export const CardPartidoGoalsColumn = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    gap: 2px;
    width: 50%;

    h5 {
        font-size: 10;
        font-weight: 300;
        width:100%;
    }

    &.visita {
        text-align: start;
    }
`

