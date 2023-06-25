import * as React from "react";
import { Shimmer, Stack } from "@fluentui/react";
import { LineWidthPercentages, getShimmerStyles, styles as s, shimmerElements } from "./WritingLoader.styles";
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const WritingLoader = () => {
    const [numLinesToRender, setNumLinesToRender] = React.useState(0);
    const [lastLineWidthIndex, setLastLineWidthIndex] = React.useState(0);

    React.useEffect(() => {
        if (numLinesToRender <= s.writingLine.widths.length) {
            setTimeout(() => {
                if (lastLineWidthIndex === LineWidthPercentages.length - 1) {
                    setNumLinesToRender(numLinesToRender + 1);
                }
                setLastLineWidthIndex((lastLineWidthIndex + 1) % LineWidthPercentages.length);
            }, 10);
        }
    }, [numLinesToRender, lastLineWidthIndex]);

    return (
        <Stack tokens={s.containerTokens} data-testid="vscp-writing-loader">
            {s.writingLine.widths.slice(0, numLinesToRender).map((width, index) => {
                const isLastLine = index === numLinesToRender - 1;
                const lineWidthPercentage = isLastLine ? LineWidthPercentages[lastLineWidthIndex] : 1;
                return (
                    <Shimmer
                        key={getRandomInt(0, 10000000)}
                        shimmerElements={shimmerElements(width ? width * lineWidthPercentage : width)}
                        styles={getShimmerStyles()}
                    />
                );
            })}
        </Stack>
    );
};
