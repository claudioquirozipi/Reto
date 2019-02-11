import styled from 'styled-components';
import { colors, shadow} from '../../config/style/resources'

export const TableContainer = styled.table`
    border-radius: 4px;
    overflow: hidden;
    box-shadow: ${shadow};
    thead {
        background: ${colors.black};
        th {
            color: ${colors.white};
            padding: 5px 11px;
        }
    }
    tbody{
        tr {
            background: ${colors.blueDark};
            :nth-child(2n){
                background: ${colors.blue};
            }
        }
        td {
            color: ${colors.blueLight};
            padding: 5px 11px;
            border-top: 1px solid ${colors.blueLight};
            font-weight: 400;
            transition: transform .3s;
            :hover {
                background: ${colors.blueLight};
                color: ${colors.blueDark};
                transform: translate(-4px,-4px);
                box-shadow: ${shadow};
            }
        }
    }
`;