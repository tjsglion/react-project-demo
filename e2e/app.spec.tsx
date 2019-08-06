import * as React from 'react';
import { render } from '@testing-library/react';
import App from '../../src/web/components/TestApp';

describe('jest e2e test', () => {
  test('test', () => {
    const { getByTestId } = render(<App />);
    const [h2, ul] = [getByTestId('js-h2'), getByTestId('js-ul')];
    expect(ul.children.length).toBe(3);
    expect(h2.textContent).toContain('Jest e2e test');
  });
});