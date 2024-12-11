import { Typography } from "@trustpilot/constellation-components";

export default function ShowTypographyExamples() {

    return <>
        <Typography variant="heading-m">None</Typography>
        <Typography variant="heading-m" appearance="default">
            {`Default`}
        </Typography>
        <Typography variant="heading-m" appearance="subtle">
            {`Subtle`}
        </Typography>
        <Typography variant="heading-m" appearance="disabled">
            {`Disabled`}
        </Typography>
        <Typography variant="heading-m" appearance="action">
            {`Action`}
        </Typography>
        <Typography variant="heading-m" appearance="critical">
            {`Critical`}
        </Typography>
        <Typography variant="heading-m" appearance="positive">
            {`Positive`}
        </Typography>
    </>
}