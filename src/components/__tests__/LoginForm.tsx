import { LoginForm } from '../LoginModal/LoginForm';
import * as React from 'react';
import {
  renderApollo,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from '../../test-utils';

describe('Login form', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders Login form', () => {
    const onSubmit = () => jest.fn();
    renderApollo(<LoginForm onSubmit={onSubmit} />);
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should validate form fields and not submit if fields empty', async () => {
    const onSubmit = jest.fn();
    const { getByText } = renderApollo(<LoginForm onSubmit={onSubmit} />);

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: '',
      },
    });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(0);
      expect(getByText('Required')).toBeVisible();
      expect(getByText('Required')).toBeVisible();
    });
  });

  it('should validate form fields and submit', async () => {
    const onSubmit = jest.fn();
    renderApollo(<LoginForm onSubmit={onSubmit} />);

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'gio@prova.it',
      },
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'giovanni123',
      },
    });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        {
          email: 'gio@prova.it',
          password: 'giovanni123',
        },
        expect.anything()
      );
    });
  });
});
