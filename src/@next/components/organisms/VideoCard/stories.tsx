import { storiesOf } from "@storybook/react";
import React from "react";

import { VideoCard } from ".";

storiesOf("@components/organisms/VideoCard", module)
.addParameters({ component: VideoCard })
.add("default", () =>
<VideoCard />);