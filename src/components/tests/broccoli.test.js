import React from 'react';
import Broccoli from '../broccoli';
import Registration from '../registration';
import Footer from '../footer';
import { shallow, mount } from 'enzyme';

// Wraps everything so I can target children and mounting in a simpler fashion
describe("Broccoli", () => {
    let screen;
    const broccoli = () => {
        screen = mount(
            <Broccoli />
        );
        return screen;
    };

    beforeEach(() => {
        screen = undefined;
    });

    // Renders the main page
    describe("`Broccoli` renders", () => {
        it('renders as expected', () => {
            const wrapper = shallow(
                <Broccoli />
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    // The footer has 0 props - is always rendered
    describe("rendered `Footer`", () => {
        it("does not receive any props", () => {
            const footer = broccoli().find(Footer);
            expect(Object.keys(footer.props()).length).toBe(0);
        });
    });

    // A footer is always rendered
    it("always renders a `Footer`", () => {
        expect(broccoli().find(Footer).length).toBe(1);
    });

    // When the open prop is false, Registration isn't rendered
    describe("when `open` is false", () => {
        it("does not render `Registration`", () => {
            broccoli().setState({open: false});
            expect(broccoli().find(Registration).length).toBe(0);
        });
    });

    // When the open prop is false, Registration isn't rendered
    describe("when `open` is true", () => {
        it("renders `Registration`", () => {
            broccoli().setState({open: true});
            expect(broccoli().contains(Registration)).toEqual(true);
        });
    });
});
