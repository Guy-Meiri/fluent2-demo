import { IShimmerElement, IShimmerStyles, IStackTokens, ShimmerElementType } from "@fluentui/react";

export const LineWidthPercentages = Array.from({ length: 30 }, (_, i) => i / 30);

const containerTokens: IStackTokens = {
    childrenGap: "8px",
};

const writingLine = {
    widths: [
        25,
        35,
        undefined,
        100,
        100,
        100,
        100,
        67,
        undefined,
        17,
        27,
        25,
        35,
        undefined,
        100,
        100,
        100,
        100,
        67,
        undefined,
        17,
        27,
        25,
        35,
        undefined,
        100,
        100,
        100,
        100,
        67,
        undefined,
        17,
        27,
        25,
        35,
        undefined,
        100,
        100,
        100,
        100,
        67,
    ],
    lineHeight: 8,
    gapHeight: 4,
};

export const getShimmerStyles = (): IShimmerStyles => {
    return {
        shimmerWrapper: [
            {
                backgroundColor: "#deecf9",
            },
        ],
        shimmerGradient: [
            {
                backgroundColor: "#deecf9",
                backgroundImage:
                    "linear-gradient(90deg, rgba(74, 206, 251, 0.15) 3%, rgba(71, 80, 236, 0.4) 49.12%, rgba(181, 125, 249, 0.15) 94.7%)",
            },
        ],
    };
};

export const shimmerElements = (width?: number): IShimmerElement[] => {
    if (!width || width < 0 || width > 100) {
        return [
            {
                type: ShimmerElementType.gap,
                height: writingLine.gapHeight,
                width: "100%",
            },
        ];
    }

    return [
        {
            type: ShimmerElementType.line,
            height: writingLine.lineHeight,
            width: `${width}%`,
        },
        {
            type: ShimmerElementType.gap,
            height: writingLine.lineHeight,
            width: `${100 - width}%`,
        },
    ];
};

export const styles = {
    containerTokens,
    writingLine,
};
