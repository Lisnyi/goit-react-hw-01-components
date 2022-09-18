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