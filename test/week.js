/**
 * Created by sam on 7/29/15.
 */
import React from 'react/addons';
import {expect} from 'chai';
import Week from '../src/week';

describe('Week component', function() {
	let {TestUtils} = React.addons;
	let shallowRenderer = TestUtils.createRenderer();
	shallowRenderer.render(<Week days={[undefined, undefined, 1, 2, 3, 4, 5]} selectDay={function(){}} highlight={true} day={1}/>);
	let week;
	before('return Week component', () => {
		week = shallowRenderer.getRenderOutput();
	});
	it('should have tr as container', () => {
		expect(week.type).to.equal('tr');
	});
	it('should have 7 td children', () => {
		expect(week.props.children.length).to.equal(7);
	});
	it('children should have td as container', () => {
		expect(week.props.children[0].type).to.equal('td');
	});
	it('children should have class "datePicker__day"', () => {
		expect(week.props.children[0].props.className).to.contain('datePicker__day');
	});

	it('children without date data should have class "datePicker__day--disabled"', () => {
		expect(week.props.children[0].props.className).to.contain('datePicker__day--disabled');
	});
	it('chidlren of default date should have class "datePicker__day--today"', () => {
		expect(week.props.children[2].props.className).to.contain('datePicker__day--today');
	});
	it('chidlren besides default date should not have class "datePicker__day--today"', () => {
		expect(week.props.children[3].props.className).to.not.contain('datePicker__day--today');
	});
});
