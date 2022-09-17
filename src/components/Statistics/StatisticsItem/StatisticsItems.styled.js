import styled from 'styled-components'

export const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 92px;
    padding: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes[4]}px;
    color: ${p => p.theme.colors.white};

    span:first-child {
        font-size: ${p => p.theme.fontSizes[3]}px;
        margin-bottom: ${p => p.theme.space[2]}px;
    }
`