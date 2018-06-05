import React from 'react';
import Broccoli from '../broccoli';
import Registration from '../registration';
import Footer from '../footer';
import { shallow, mount } from 'enzyme';

// Wraps everything so I can target children and mounting in a simpler fashion
describe("Broccoli", () => {
    let state;
    let screen;
    const broccoli = () => {
        screen = mount(
            <Broccoli {...state}/>
        );
        return screen;
    };

    beforeEach(() => {
        state = {
            open: undefined
        };
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

    // The footer has 0 props
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
        beforeEach(() => {
            state.open = false;
        });

        it("sets the rendered `Registration`'s `open` prop to undefined'", () => {
            expect(broccoli().find(Registration).length).toBe(0);
        });
    });
});
