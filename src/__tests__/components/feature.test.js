import React from "react";
import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
    it("renders the <Feature /> with populated data", () => {
        const { container, queryByText, getByText } = render(
            <Feature>
                <Feature.Title>Unlimited films, TV programms and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere, Cancel at anytime.</Feature.SubTitle>
            </Feature>
        );

        expect(getByText("Unlimited films, TV programms and more.")).toBeTruthy();
        expect(queryByText("Watch anywhere, Cancel at anytime.")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders the <Feature /> with just a title", () => {
        const { container, queryByText, getByText } = render(
            <Feature>
                <Feature.Title>Unlimited films, TV programms and more.</Feature.Title>
            </Feature>
        );

        expect(getByText("Unlimited films, TV programms and more.")).toBeTruthy();
        expect(queryByText("Watch anywhere, Cancel at anytime.")).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("renders the <Feature /> with just a subtitle", () => {
        const { container, queryByText, getByText } = render(
            <Feature>
                <Feature.SubTitle>Watch anywhere. Cancel at anytime.</Feature.SubTitle>
            </Feature>
        );

        expect(queryByText("Unlimited films, TV programms and more.")).toBeFalsy();
        expect(getByText("Watch anywhere. Cancel at anytime.")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});