import styled from 'styled-components'
import PropTypes from 'prop-types'


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