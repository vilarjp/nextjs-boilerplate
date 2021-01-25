import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /next.js boilerplate/i }),
    ).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', {
        name: `TypeScript, ReactJS, NextJS, Styled Components, Jest & React Testing Library`,
      }),
    ).toBeInTheDocument();
  });

  it('should render the background-color correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });

  it('should render the logo', () => {
    render(<Main />);

    expect(screen.getByAltText(/nextjs boilerplate logo/i)).toBeInTheDocument();
  });

  it('should render the illustration', () => {
    render(<Main />);

    expect(
      screen.getByAltText(/developer making some code/i),
    ).toBeInTheDocument();
  });
});
