import React from 'react';
import Footer from '../footer';
import { shallow } from 'enzyme';

describe("`Footer` renders", () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <Footer />
        );
        expect(wrapper).toMatchSnapshot();
    });
});