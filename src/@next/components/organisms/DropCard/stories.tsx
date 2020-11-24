import { storiesOf } from "@storybook/react";
import React from "react";

import { DropCard } from ".";

storiesOf("@components/organisms/DropCard", module)
.addParameters({ component: DropCard })
.add("default", () =>
<DropCard />);