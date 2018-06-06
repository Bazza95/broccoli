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
    let props;
    let dialog;
    const registration = () => {
        dialog = mount(
            <Registration {...props} />
        );
        return dialog;
    };

    beforeEach(() => {
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
        it("renders `CircularProgress`", () => {
            registration().setState({pending: true});
            expect(registration().find(CircularProgress));
        });
    });

    // When the validation prop is false, the form should render - containing 3 text fields
    describe("when `validation` is false", () => {
        it("renders `Text`", () => {
            registration().setState({validation: false});
            expect(registration().find(Text).length).toBe(3);
        });
    });

    // When the pending and validation states are undefined, the button text should be "Send"
    describe("when `validation` and 'pending' are undefined", () => {
        it("renders Send", () => {
            registration().setState({validation: undefined});
            registration().setState({pending: undefined});
            expect(registration().find(Button).text()).toEqual("Send");
        });
    });

    // When the validationError state is not an empty string and validation state is false,
    // a Typography component should render
    describe("when `validationError` is not empty string and validation is false", () => {
        it("renders 'Typography'", () => {
            registration().setState({validationError: "Failed"});
            registration().setState({validation: false});
            expect(registration().find(Typography).length).toBe(1);
        });
    });

    // When the validation state is true, a Typography component with component 'p' should render
    describe("when `validation` is true", () => {
        it("renders 'Typography' with a p component prop", () => {
            registration().setState({validation: true});
            const typography = registration().find(Typography);
            expect(typography.props().component).toEqual("p");
        });
    });

    // Always renders DialogActions
    it("renders `DialogActions`", () => {
        expect(registration().find(DialogActions).length).toBe(1);
    });

});