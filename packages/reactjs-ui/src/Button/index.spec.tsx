import { render } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('should render children successfully', () => {
    const { baseElement } = render(<Button children={'Test'} />);
    expect(baseElement.textContent).toBe('Test');
  });
});
