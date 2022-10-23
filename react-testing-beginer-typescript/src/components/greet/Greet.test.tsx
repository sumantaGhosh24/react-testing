import { render, screen } from "@testing-library/react";

import { Greet } from "./Greet";

describe('Greet', () => {
    test('render a guest', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello Guest')
        expect(textElement).toBeInTheDocument()
    })

    test('render a user', () => {
        render(<Greet name="John" />)
        const textElement = screen.getByText('Hello John')
        expect(textElement).toBeInTheDocument()
    })
})

