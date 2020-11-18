import React from 'react';

import { sadboysPink } from '@styles/constants';
import { Icon } from '../Icon';
import { Tile } from '../Tile';
import * as S from './styles';
import { IProps } from './types';

export const AddNewTile: React.FC<IProps> = ({type, ...props}: IProps) => {
    return (
        <Tile tileType="addNew" {...props}>
            <S.Content>
                <p>
                    <Icon size={24} name="plus" color={sadboysPink}/>
                </p>
                <p>Add new {type}</p>
            </S.Content>
        </Tile>
    );
};
