import styled from 'styled-components';
import logo from '../../assets/img/ImersaoReact.svg';

const LogoImersao = styled.img.attrs({src: logo, alt: 'Logo da Imersão React do Sued'})`
    height: 30px;
    vertical-align: middle;
    cursor: pointer;
`;

export default LogoImersao;