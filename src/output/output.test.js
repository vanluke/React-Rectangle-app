import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
} from 'react-addons-test-utils';
import Output from 'output/output';

describe('Output', () => {
  const styles = {
    background: '#fff',
    width: '189px',
    height: '289px',
    borderRadius: '15px',
  };
  const onClick = () => {};
  const props = {
    onClick,
    styles,
    title: 'title name',
  };

  it('renders', () => {
    const component = renderIntoDocument(wrap(Output, props));
    const output = scryRenderedDOMComponentsWithClass(component, 'c-rectangle');

    // eslint-disable-next-line no-unused-expressions
    expect(output).to.be.ok;
  });

  it('has a title', () => {
    const component = renderIntoDocument(wrap(Output, props));
    const output = scryRenderedDOMComponentsWithClass(component, 'c-rectangle');
    const rectangle = output[0];
    expect(rectangle.title).to.be.equal('title name');
  });

  it('has a style attribute defined', () => {
    const component = renderIntoDocument(wrap(Output, props));
    const output = scryRenderedDOMComponentsWithClass(component, 'c-rectangle');
    const rectangle = output[0];
    // eslint-disable-next-line no-unused-expressions
    expect(rectangle.style).to.be.ok;
  });
});
