import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {

    let unMount: () => void = () => { };

    beforeEach(() => {
        const { unmount } = render(<App />);

        unMount = unmount;
    });

    it("renders about section", () => {
        expect(screen.getByTestId("about").textContent).toBe('AYUSHMAN CHHABRA');
    });

    it("renders projects section", () => {
        expect(screen.getByTestId("projects").textContent).toBe('Projects');
    });

    it("renders books section", () => {
        expect(screen.getByTestId("books").textContent).toBe('Books');
    });

    it("renders videos section", () => {
        expect(screen.getByTestId("videos").textContent).toBe('Videos');
    });

    it("renders blogs section", () => {
        expect(screen.getByTestId("blogs").textContent).toBe('Blogs');
    });

    afterEach(() => {
        unMount();
    });

});
