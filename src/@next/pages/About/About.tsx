import { IProfileProps, IProps } from '@app/pages/About/types';
import React from 'react';

import tekkugai from '../../../images/about/tekkugai.jpg';
import placeholderPlayer from '../../../images/placeholders/player.jpg';

import './index.scss';

const About: React.FC<IProps> = ({}: IProps) => {
    return (
        <>
            <div className="about-sadboys">
                <svg className="about-banner" version="1.1" id="about-title" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="305px" height="140px" viewBox="0 0 305 140" enableBackground="new 0 0 300 125"
                     xmlSpace="preserve">
                    <polygon fill="#9BF4FF" className="title-banner"
                             points="0.25,-0.105 83.904,84 299.869,84 255.714,125 63.076,125 0.25,62.381 "/>
                    <text transform="matrix(1 0 0 1 88.5176 118.9238)" fontSize="39.8518">About</text>
                </svg>
                <p>SADBOYS is a content and lifestyle brand founded on the inseparable bond of five high school friends
                    in small town Indiana. Through the intent to maintain their closeness and be there for each other
                    through personal struggles, the group was created in 2018. Lives changed and friendships came and
                    gone, but the goal to reach people who related to their emotions and create positive change in the
                    process had remained. In 2020, SADBOYS went public and transformed into not only a brand, but also
                    an embodiment of the emotional connection the five original members shared.</p>
            </div>
            <div className="about-team">
                <svg className="about-banner" version="1.1" id="team-title" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="305px" height="140px" viewBox="0 0 305 140" enableBackground="new 0 0 300 125"
                     xmlSpace="preserve">
                    <polygon fill="#9BF4FF" className="title-banner"
                             points="0.25,-0.105 83.904,84 299.869,84 255.714,125 63.076,125 0.25,62.381 "
                             transform="scale(-1,1) translate(-300, 0)"/>
                    <text transform="matrix(1 0 0 1 88.5176 118.9238)" fontSize="39.8518">Team</text>
                </svg>
                <div className="about-team-list">
                    <PlayerProfile
                        name="Mike"
                        tag="@tekkugai"
                        image={tekkugai}
                    />
                    <PlayerProfile
                        name="David"
                        tag="@Dave89rr"
                    />
                </div>
            </div>
        </>
    );
}

const PlayerProfile: React.FC<IProfileProps> = (props: IProfileProps) => {
    const {
        image, tag,
    } = props;
    return (
        <>
            <svg className="player-profile" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                 y="0px" viewBox="0 0 353 274.042" xmlSpace="preserve">
                <g id="info_panel">
                    <polygon id="panel" className="info-panel" points="56.563,251.062 78.563,272.563 296.563,272.563 351.563,212.563 351.563,19.563
		56.563,19.563 	"/>
                    <g id="tag">
                        <path d="M85.187,267.084c-1.266-0.229-2.291-1.154-2.674-2.414c-0.096-0.319-0.108-0.42-0.108-0.933
			c0-0.511,0.012-0.614,0.106-0.925c0.059-0.191,0.152-0.44,0.209-0.552c0.152-0.299,3.063-5.069,3.093-5.069
			s2.94,4.771,3.092,5.069c0.057,0.111,0.152,0.36,0.21,0.552c0.094,0.311,0.106,0.414,0.106,0.925c0,0.513-0.012,0.613-0.108,0.933
			C88.595,266.377,86.931,267.399,85.187,267.084z"/>
                        <text transform="matrix(1 0 0 1 96.396 265.3955)">{tag}</text>
                    </g>
                </g>
                <g id="player">
                    <g>
                        <defs>
                            <polygon id="SVGID_1_"
                                     points="288.563,252.063 1.063,252.063 1.063,65.563 68.563,2.063 351.063,2.063 351.063,183.563 			"/>
                        </defs>
                        <clipPath id="SVGID_2_">
                            <use xlinkHref="#SVGID_1_" style={{overflow: 'visible'}}/>
                        </clipPath>
                        <g style={{clipPath: 'url(#SVGID_2_)'}}>
                            <image href={image || placeholderPlayer} style={{overflow: 'visible'}} width="612"
                                   height="612" transform="matrix(0.5719 0 0 0.5719 1.5605 -48.4395)">
                            </image>
                        </g>
                    </g>
                </g>
                <g id="border">
                    <polygon className="image-border"
                             points="288.563,251.563 1.563,251.563 1.563,65.563 68.563,1.563 351.563,1.563 351.563,183.563 	"/>
                </g>
            </svg>
        </>
    );
}

export { About };
