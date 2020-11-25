import React from 'react';
import * as S from './styles';
import { IProps } from './types';

const DropCard: React.FC<IProps> = ({}: IProps) => {
    return (
        // @ts-ignore
        <S.Wrapper bgImg={'https://via.placeholder.com/1920x1080?text=Lookbook+Hero'}>
            <S.Header>Latest Apparel Drop</S.Header>
            <S.DropLink to={'/lookbook'}>
                View the Lookbook
            </S.DropLink>
        </S.Wrapper>
    )
};

export { DropCard }
