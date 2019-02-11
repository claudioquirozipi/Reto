import styled from 'styled-components';
import { MQ } from './config/style/resources';

export const ContainerHomeView = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media ${MQ.md} {
        padding-left: 230px;
    }
`;