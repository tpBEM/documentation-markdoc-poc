import { useState } from "react";
import { Toggle } from "@trustpilot/constellation-components";

export default function ToggleButton({ content }) {
    const [checked, setChecked] = useState(false);
    const toggle = () => setChecked(!checked);

    return <Toggle checked={checked} onChange={toggle} size="l">{content}</Toggle>
}