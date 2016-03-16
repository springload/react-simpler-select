import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Select from '../../index';

/* eslint func-names:0 */
describe('Select', () => {
  let item;
  let svg;

  beforeEach(() => {
    item = TestUtils.renderIntoDocument(
      <Select name="rocket" className="i--red" />
    );
    svg = ReactDOM.findDOMNode(item);
  });

  it('should have class name', () => {
    expect(svg.className.baseVal).to.equal('i i--red');
  });

  it('should have use tag', () => {
    expect(svg.childNodes).to.have.length(1);
    expect(svg.children[0].tagName.toLowerCase()).to.equal('use');
  });

  it('should have class for use tag', () => {
    expect(svg.children[0].attributes['xlink:href'].value).to.equal('#i-rocket');
  });
});

describe('Select no class', () => {
  let item;
  let svg;

  beforeEach(() => {
    item = TestUtils.renderIntoDocument(
      <Select name="rocket" />
    );
    svg = ReactDOM.findDOMNode(item);
  });

  it('should have just "i" class', () => {
    expect(svg.className.baseVal).to.equal('i');
  });

  it('should have use tag', () => {
    expect(svg.childNodes).to.have.length(1);
    expect(svg.children[0].tagName.toLowerCase()).to.equal('use');
  });

  it('should have class for use tag', () => {
    expect(svg.children[0].attributes['xlink:href'].value).to.equal('#i-rocket');
  });
});
