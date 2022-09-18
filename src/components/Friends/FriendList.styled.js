import styled from 'styled-components'

export const FriendsBlock = styled.ul`
    width: 250px;
    list-style: none;
    padding: ${p => p.theme.space[0]}px;
    margin: auto;
`

export const FriendsBlockItem = styled.li`
    padding: ${p => p.theme.space[3]}px;
    display: flex;
    align-items: center;
    margin-bottom: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal};
`