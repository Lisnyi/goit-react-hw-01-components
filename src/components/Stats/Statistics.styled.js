import styled from 'styled-components'

export const StatisticsTitle = styled.h2`
    text-align: center;
    margin: ${p => p.theme.space[0]}px;
    color: ${p => p.theme.colors.secondary};
    text-transform: uppercase;
    padding: ${p => p.theme.space[4]}px;
`

export const StatisticsList = styled.ul`
    margin: ${p => p.theme.space[0]}px;
    padding: ${p => p.theme.space[0]}px;
    list-style: none;
    display: flex;
    justify-content: center;
`

export const StatsItem = styled.li`
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