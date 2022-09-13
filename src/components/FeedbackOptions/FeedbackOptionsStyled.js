import styled from 'styled-components';

export const ButtonFeedback = styled.button`

    display: inline-block;
    min-width: 50px;
    border: 0;
    padding: 10px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    color: #2a2a2a;
    
    font-weight: 700;
    font-size: 16px;
    line-height: 1.88;
    letter-spacing: 0.06em;
    text-transform: capitalize;

    background-color: #ded4ef;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :not(:last-child) {
        margin-right: 15px;
    }

    :hover, :focus {
        background-color: #9883bb;
        color: #ffffff;
    }
`