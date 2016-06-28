import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../../lib/index';

const optgroups = [
  {
    title: 'North Island',
    id: 'north-island',
    options: [
      { value: 'auckland-region', label: 'Auckland Region' },
      { value: 'bay-of-plenty', label: 'Bay of Plenty' },
      { value: 'gisborne', label: 'Gisborne' },
      { value: 'hawkes-bay', label: 'Hawke\'s Bay' },
      { value: 'manawatu-whanganui', label: 'Manawatu / Whanganui' },
      { value: 'northland', label: 'Northland' },
      { value: 'taranaki', label: 'Taranaki' },
      { value: 'waikato', label: 'Waikato' },
      { value: 'wairarapa', label: 'Wairarapa' },
      { value: 'wellington-region', label: 'Wellington Region' },
    ],
  },
  {
    title: 'South Island',
    id: 'south-island',
    options: [
      { value: 'central-otago', label: 'Central Otago' },
      { value: 'marlborough', label: 'Marlborough' },
      { value: 'nelson', label: 'Nelson' },
      { value: 'north-canterbury', label: 'North Canterbury' },
      { value: 'otago', label: 'Otago' },
      { value: 'south-canterbury', label: 'South Canterbury' },
      { value: 'southland', label: 'Southland' },
      { value: 'tasman-golden-bay', label: 'Tasman / Golden Bay' },
      { value: 'west-coast', label: 'West Coast' },
    ],
  },
];

const onChange = console.log.bind(console);

const select = (
  <Select
    name="cities"
    placeholder="Choose your region"
    options={optgroups}
    required
    onChange={onChange}
  />
);

const mount = document.querySelector('[data-optgroups-example]');

ReactDOM.render(select, mount);
