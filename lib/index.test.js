import React from 'react';
import { shallow } from 'enzyme';
import Select from './index';

// Converts a DOM NodeList or other iterable to a JS array.
const toArray = iterable => Array.prototype.slice.call(iterable);

const options = [
  { value: 'es', label: 'Spanish' },
  { value: 'cs', label: 'Czech' },
  { value: 'en', label: 'English' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr', label: 'French' },
];

const optgroups = [
  {
    title: 'North Island',
    id: 'ni',
    options: [
      { value: 'wgtn', label: 'Wellington' },
      { value: 'gsb', label: 'Gisbourne' },
      { value: 'oh', label: 'Ohakune' },
    ],
  },
  {
    title: 'South Island',
    id: 'si',
    options: [
      { value: 'ch', label: 'Christchurch' },
      { value: 'qt', label: 'Queenstown' },
      { value: 'te', label: 'lake Tekapo' },
    ],
  },
];

describe('Select', () => {
  it('renders', () => {
    expect(shallow((
      <Select
        name="decision"
        id="decision-selector"
        className="field-select"
        placeholder="Your decision"
        options={[]}
        required
      />
    ))).toMatchSnapshot();
  });

  it('#options', () => {
    expect(shallow((
      <Select
        options={options}
        value="en"
      />
    ))).toMatchSnapshot();
  });

  it('#onChange', () => {
    const handleChange = jest.fn();
    const wrapper = shallow((
      <Select
        options={options}
        onChange={handleChange}
        value="en"
      />
    ));

    wrapper.find('select').simulate('change', {
      target: { value: 'fi' }
    });

    expect(handleChange).toHaveBeenCalledWith('fi');
  });
});
