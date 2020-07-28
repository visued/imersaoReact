import styled from 'styled-components';
import LogoSued from '../../components/LogoSued';

const FooterSued = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    padding: 20rem 0;
    border-top: 4px solid var(--color-primary-medium);

    & > ${LogoSued} {
        margin-bottom: 20rem;
    }
`;

export default FooterSued;