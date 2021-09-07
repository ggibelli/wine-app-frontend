import { UserForm } from '../UserForm';
import * as React from 'react';
import {
  renderApolloNoRouter,
  cleanup,
  fireEvent,
  screen,
  waitFor,
  within,
} from '../../test-utils/test-utils';

describe('User form', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders User form', () => {
    const onSubmit = () => jest.fn();
    renderApolloNoRouter(<UserForm onSubmit={onSubmit} />);
    expect(screen.getByRole('textbox', { name: /email/ })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /reEmail/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /firstName/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /lastName/ })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /pIva/ })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /phoneNumber/ })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /via/ })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /comune/i })
    ).toBeInTheDocument();

    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('hideContact')).toBeInTheDocument();
    expect(screen.getByTestId('rePassword')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should validate form fields and not submit if fields empty', async () => {
    const onSubmit = jest.fn();
    const { getAllByText } = renderApolloNoRouter(
      <UserForm onSubmit={onSubmit} />
    );
    fireEvent.input(screen.getByRole('textbox', { name: /email/ }), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /reemail/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('rePassword'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /firstname/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /lastname/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /via/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /comune/i }), {
      target: {
        value: '',
      },
    });

    fireEvent.input(screen.getByRole('textbox', { name: /piva/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /phonenumber/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.change(screen.getByTestId('hideContact'), {
      target: {
        checked: true,
      },
    });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(0);
      expect(getAllByText('Required')).toHaveLength(10);
    });
  }, 10000);

  it('should validate form fields and not submit if fields are not valid', async () => {
    const onSubmit = jest.fn();
    const { getByText } = renderApolloNoRouter(
      <UserForm onSubmit={onSubmit} />
    );

    fireEvent.input(screen.getByRole('textbox', { name: /email/ }), {
      target: {
        value: 'gioprova.it',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /reemail/i }), {
      target: {
        value: 'gio@2.it',
      },
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'gioVa',
      },
    });
    fireEvent.input(screen.getByTestId('rePassword'), {
      target: {
        value: '21!234',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /firstname/i }), {
      target: {
        value: 'proprova',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /lastname/i }), {
      target: {
        value: 'aprov',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /via/i }), {
      target: {
        value: 'via della prova 1',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /comune/i }), {
      target: {
        value: 'Canelli',
      },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /piva/i }), {
      target: {
        value: '123456789',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /phonenumber/i }), {
      target: {
        value: '1234223',
      },
    });
    fireEvent.change(screen.getByTestId('hideContact'), {
      target: {
        checked: true,
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(0);
      expect(getByText('Invalid email address')).toBeVisible();
      expect(getByText('Email does not match')).toBeVisible();
      expect(getByText('Password not safe')).toBeVisible();
      expect(getByText('Il numero di telefono non e valido')).toBeVisible();
      expect(getByText(/La partita iva /i)).toBeVisible();
    });
  }, 15000);

  it('should validate form fields and submit if fields are valid', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = renderApolloNoRouter(
      <UserForm onSubmit={onSubmit} />
    );

    fireEvent.input(screen.getByRole('textbox', { name: /email/ }), {
      target: {
        value: 'gio@prova.it',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /reemail/i }), {
      target: {
        value: 'gio@prova.it',
      },
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'gioVann!234',
      },
    });
    fireEvent.input(screen.getByTestId('rePassword'), {
      target: {
        value: 'gioVann!234',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /firstname/i }), {
      target: {
        value: 'proprova',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /lastname/i }), {
      target: {
        value: 'aprov',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /via/i }), {
      target: {
        value: 'via della prova 1',
      },
    });

    const comboboxComuni = getByTestId('combobox-comuni');
    const inputComuni = within(comboboxComuni).getByRole('textbox');
    comboboxComuni.focus();
    fireEvent.change(inputComuni, { target: { value: 'a' } });
    await waitFor(() => {
      //const input = within(combobox).querySelector('input');

      fireEvent.keyDown(comboboxComuni, { key: 'ArrowDown' });
    });
    await waitFor(() => {
      fireEvent.keyDown(comboboxComuni, { key: 'Enter' });
    });

    fireEvent.change(screen.getByRole('textbox', { name: /piva/i }), {
      target: {
        value: '26264321204',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /phonenumber/i }), {
      target: {
        value: '3201234567',
      },
    });
    fireEvent.change(screen.getByTestId('hideContact'), {
      target: {
        checked: true,
      },
    });
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(1);
    });
  }, 10000);
});
