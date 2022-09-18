import styled from 'styled-components'

export const FriendsBlockItem = styled.li`
    padding: ${p => p.theme.space[3]}px;
    display: flex;
    align-items: center;
    margin-bottom: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal};
`

export const Chip = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: ${p => p.theme.space[3]}px;
    background-color: ${p => p.isOnline ? p.theme.colors.green : p.theme.colors.red};
`

export const FriendAvatar = styled.img`
    width: 64px;
    border: ${p => p.theme.borders.normal};
    border-radius: 5px;
    margin-right: ${p => p.theme.space[3]}px;
`

export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: bold;
    margin: ${p => p.theme.space[0]}px;
`