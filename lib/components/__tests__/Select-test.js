import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Select from '../../index';

const options = [
  { value: 'cs', label: 'Czech' },
  { value: 'en', label: 'English' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr', label: 'French' },
];

/* eslint func-names:0 */
describe('Select', () => {
  let item;
  let select;

  describe('#options', () => {
    beforeEach(() => {
      item = TestUtils.renderIntoDocument(
        <Select
          options={options}
          value="en"
        />
      );
      select = ReactDOM.findDOMNode(item);
    });

    it('should have 4 <options>', () => {
      expect(select.options.length).to.equal(4);
    });

    it('first one should be Czech', () => {
      expect(select.options[0].innerHTML).to.equal('Czech');
    });

    it('current value should be en (English)', () => {
      expect(select.value).to.equal('en');
    });

    it('should change the value', (done) => {
      const handleChange = (value) => {
        expect(value).to.equal('fi');
        done();
      };

      item = TestUtils.renderIntoDocument(
        <Select
          options={options}
          value="en"
          onChange={handleChange}
        />
      );
      select = ReactDOM.findDOMNode(item);

      expect(select.value).to.equal('en');
      TestUtils.Simulate.change(select, {target: {value: 'fi'}});
      expect(select.value).to.equal('en');
    });
  });

  describe('props', () => {
    beforeEach(() => {
      item = TestUtils.renderIntoDocument(
        <Select
          name="decision"
          id="decision-selector"
          className="field-select"
          placeholder="Your decision"
          required
        />
      );
      select = ReactDOM.findDOMNode(item);
    });

    // onChange: React.PropTypes.func.isRequired,
    // id: React.PropTypes.string,
    // name: React.PropTypes.string,
    // className: React.PropTypes.string,
    // placeholder: React.PropTypes.string,
    // required: React.PropTypes.bool,
    // // TODO ?
    // value: React.PropTypes.any,
    // groups: React.PropTypes.array,
    // options: React.PropTypes.array,

    it('#id', () => {
      expect(select.id).to.equal('decision-selector');
    });

    it('#name', () => {
      expect(select.name).to.equal('decision');
    });

    it('#className', () => {
      expect(select.className).to.equal('field-select');
    });

    it('#placeholder', () => {
      expect(select[0].innerHTML).to.equal('Your decision');
    });

    it('#options (empty)', () => {
      expect(select.options.length).to.equal(1);
    });

    it('#required', () => {
      expect(select.required).to.equal(true);
    });
  });

  describe('#optgroups', () => {
    beforeEach(() => {
      item = TestUtils.renderIntoDocument(
        <Select name="rocket" />
      );
      select = ReactDOM.findDOMNode(item);
    });
  });
});
