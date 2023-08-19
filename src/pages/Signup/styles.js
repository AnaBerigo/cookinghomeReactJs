import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    width: 100vw;
    background-image: url("https://github.com/AnaBerigo/SistemaLogin/assets/74029212/fe034995-eb2f-4051-b246-d846d2022d08") ;
    background-size: cover;
`;

export const ContentRow = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: #ffffff;
    max-width: 1000px;
    padding: 20px;
    border-radius: 5px;
`;

export const Content = styled.div`
    gap: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    padding: 20px;
    border-radius: 5px;
`;

export const Image = styled.div`
    height: 400px;
    width: 100%;
    max-width: 700px;
    background-image: url("https://github.com/AnaBerigo/SistemaLogin/assets/74029212/04e20d90-7f81-4490-8c7a-45ae76393f46") ;
    background-size: cover;
`

export const Label = styled.label` 
    font-size: 18px;
    font-weight: 600;
    color: #676767;
`;

export const LabelSignin = styled.label` 
    font-size: 16px;
    color:#676767;
`

export const LabelError = styled.label` 
    font-size: 14px;
    color: red;
`

export const Strong = styled.strong` 
    cursor: pointer;

    a{
        text-decoration: none;
        color: #676767
    }
`
