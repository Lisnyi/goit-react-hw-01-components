import styled from 'styled-components'

export const Table = styled.table`
    margin: auto;
    width: 700px;
    text-align: center;
    border: ${p => p.theme.borders.normal};
`

export const TableHeader = styled.thead`
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.green};

    th {
        width: calc(100%/3);
        text-transform: uppercase;
        padding: ${p => p.theme.space[3]}px;
    }
`