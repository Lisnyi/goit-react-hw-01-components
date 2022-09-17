import styled from 'styled-components'

export const ProfileAvatar = styled.img`
    width: 100px;
    border-radius: 50%;
    margin-bottom: ${p => p.theme.space[3]}px;
`

export const UserName = styled.p`
    font-size: ${p => p.theme.fontSizes[4]}px;
    font-weight: bold;
    margin: ${p => p.theme.space[0]};
    margin-bottom: ${p => p.theme.space[3]}px;
`

export const UserTag = styled.p`
    color: ${p => p.theme.colors.secondary};
    margin: ${p => p.theme.space[0]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
`

export const UserLocation = styled.p`
    color: ${p => p.theme.colors.secondary};
    margin: ${p => p.theme.space[0]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
`

export const StatsList = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    margin: ${p => p.theme.space[0]}px;
    padding: ${p => p.theme.space[0]}px;
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100%/3);
    min-height: 60px;
    background-color: ${p => p.theme.colors.random};
    border: ${p => p.theme.borders.normal};
`