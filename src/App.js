import React, { Component } from "react";
import styled, {injectGlobal, keyframes, css, ThemeProvider} from "styled-components";
import theme from "./theme";

injectGlobal`
    body {
        padding: 0;
        margin: 0;
    }
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Button>Hello</Button>
                    <Button danger>Hello</Button>
                    <Anchor href="http://google.com">Go to Google</Anchor>
                    <Input placeholder="hello" />

                    <Form />
                </Container>
            </ThemeProvider>
        );
    }
}

const Card = styled.div`
  background-color: red;
`;

const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
)

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: pink;
    ${Card} {
        background-color: blue;
    }
`;

const awesomeCard = css`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: white;
    border-radius: 10px;
    padding: 20px;
`;

const Input = styled.input.attrs({
    required: true
})`
    border: none;
    ${awesomeCard};
`;

const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    }
    background-color: ${props => (props.danger ? props.theme.dangerColor : props.theme.successColor)};
    ${props => {
        if (props.danger) {
            return `animation: ${rotation} 2s linear infinite`;
        }
    }};
`;

const Anchor = Button.withComponent("a").extend`
    text-decoration: none;
`;

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export default App;