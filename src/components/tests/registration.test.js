import React from 'react';
import Registration from '../registration';
import Text from '../shared/text';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { shallow } from 'enzyme';
import {mount} from "enzyme/build/index";


describe("Registration", () => {
    let state;
    let props;
    let dialog;
    const registration = () => {
        dialog = mount(
            <Registration
                {...props}
                pending={state.pending}
                validation={state.validation}
                validationError={state.validationError}
            />
        );
        return dialog;
    };

    beforeEach(() => {
        state = {
            pending: undefined,
            validation: undefined,
            validationError: undefined
        };
        props = {
            open: true
        };
        dialog = undefined;
    });

    describe("`Registration` renders", () => {
        it('renders as expected', () => {
            const wrapper = shallow(
                <Registration open={true}/>
            );
            expect(wrapper).toMatchSnapshot();
        });
    });

    // When the pending prop is true, CircularProgress is rendered
    describe("when `pending` is true", () => {
        beforeEach(() => {
            state.pending = true;
        });

        it("renders `CircularProgress`", () => {
            expect(registration().find(CircularProgress));
        });
    });

    // When the validation prop is false, the form should render - containing 3 text fields
    describe("when `validation` is false", () => {
        beforeEach(() => {
            state.validation = false;
        });

        it("renders `Text`", () => {
            expect(registration().find(Text).length).toBe(3);
        });
    });

    // When the pending and validation states are undefined, the button text should be "Send"
    describe("when `validation` and 'pending' are undefined", () => {
        beforeEach(() => {
            state.validation = undefined;
            state.pending = undefined;
        });

        it("renders Send", () => {
            expect(registration().find(Button).text()).toEqual("Send");
        });
    });

    // When the validationError state is not an empty string and validation state is false,
    // a Typography component should render
    describe("when `validationError` is not empty string and validation is false", () => {
        beforeEach(() => {
            state.validationError = "Failed";
            state.validation = false;
        });

        it("renders 'Typography'", () => {
            expect(registration().find(Typography).length).toBe(1);
        });
    });

    // When the validation state is true, a Typography component with component 'p' should render
    describe("when `validation` is true", () => {
        beforeEach(() => {
            state.validation = true;
        });

        it("renders 'Typography' with a p component prop", () => {
            const typography = registration().find(Typography);
            expect(typography.props().component).toEqual("p");
        });
    });

    it("renders `DialogActions`", () => {
        expect(registration().find(DialogActions).length).toBe(1);
    });

});