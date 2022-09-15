import styled from 'styled-components';

export const StatisticsFeedback = styled.ul`
    padding: 0;


li {
    list-style: none;
    font-size: 22px;
    font-weight: 500;

    :not(:last-child) {
        margin-bottom: 10px;
    }
}
`