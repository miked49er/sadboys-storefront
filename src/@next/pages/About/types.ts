import * as H from "history";

export interface IProps {
    history: H.History;
}

export interface IProfileProps {
    name: string;
    image?: string;
    tag: string;
}
