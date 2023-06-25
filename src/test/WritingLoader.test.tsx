import React from "react";
import { render, screen } from "@testing-library/react";
import { WritingLoader } from "./WritingLoader";

describe("WritingLoader", () => {
    it("should render activity indicator", () => {
        render(<WritingLoader />);
        expect(screen.getByTestId("vscp-writing-loader")).toBeInTheDocument();
    });
});
