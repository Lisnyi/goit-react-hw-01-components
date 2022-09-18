import styled from 'styled-components'
import PropTypes from 'prop-types'

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

export const TableItem = styled.tr`
    background-color: ${p => p.index%2 ? p.theme.colors.white : p.theme.colors.secondary};
    color: ${p => p.index%2 ? p.theme.colors.secondary : p.theme.colors.white};
    td {
        text-transform: capitalize;
        padding: ${p => p.theme.space[3]}px;
    }
`

TableItem.propTypes = {
    index: PropTypes.number.isRequired,
}