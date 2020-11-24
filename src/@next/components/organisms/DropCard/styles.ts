import { styled } from "@styles";
import { sadboysBlue, sadboysPink } from '@styles/constants';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: calc(100vw / 3 * 2);
    max-height: 500px;
    // @ts-ignore
    background-image: url(${({bgImg}) => bgImg || 'https://via.placeholder.com/1920x1080?text=Sadboys+Drop'});
    background-position: center;
    background-size: cover;
`;

export const Header = styled.h3`
    color: ${sadboysBlue};
    position: relative;
    top: 30px;
    left: 35px;
`;

export const DropLink = styled(Link)`
    color: #fff;
    position: absolute;
    bottom: 30px;
    right: 35px;
    background-color: ${sadboysPink};
    padding: 10px 15px;
`;
