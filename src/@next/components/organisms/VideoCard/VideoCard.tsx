import React from 'react';

import * as S from './styles';
import { IProps } from './types';

const VideoCard: React.FC<IProps> = ({url}: IProps) => {
    return (
        <S.Video src={url} frameBorder="0"
                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen/>
    )
};

export { VideoCard }
