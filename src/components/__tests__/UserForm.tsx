import { UserForm } from '../UserForm';
import * as React from 'react';
import {
  renderApollo,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from '../../test-utils';
import { Regioni } from '../../generated/graphql';

describe('User form', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders User form', () => {
    const onSubmit = () => jest.fn();
    renderApollo(<UserForm onSubmit={onSubmit} />);
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
      screen.getByRole('combobox', { name: /address.comune/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /provincia/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /address.regione/ })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /CAP/ })).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('hideContact')).toBeInTheDocument();
    expect(screen.getByTestId('rePassword')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should validate form fields and not submit if fields empty', async () => {
    const onSubmit = jest.fn();
    const { getAllByText } = renderApollo(<UserForm onSubmit={onSubmit} />);
    fireEvent.input(screen.getByTestId('email'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('reEmail'), {
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
    fireEvent.input(screen.getByTestId('firstName'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('lastName'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('address.via'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('address.comune'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('address.provincia'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('address.regione'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('address.CAP'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('pIva'), {
      target: {
        value: '',
      },
    });
    fireEvent.input(screen.getByTestId('phoneNumber'), {
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
      expect(getAllByText('Required')).toHaveLength(12);
    });
  });

  it('should validate form fields and not submit if fields are not valid', async () => {
    const onSubmit = jest.fn();
    const { getByText } = renderApollo(<UserForm onSubmit={onSubmit} />);

    fireEvent.input(screen.getByTestId('email'), {
      target: {
        value: 'ciaociao',
      },
    });
    fireEvent.input(screen.getByTestId('reEmail'), {
      target: {
        value: 'provaprova@prova.it',
      },
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'ciao123',
      },
    });
    fireEvent.input(screen.getByTestId('rePassword'), {
      target: {
        value: 'ciao123',
      },
    });
    fireEvent.input(screen.getByTestId('firstName'), {
      target: {
        value: 'giovanni',
      },
    });
    fireEvent.input(screen.getByTestId('lastName'), {
      target: {
        value: 'prova',
      },
    });
    fireEvent.input(screen.getByTestId('address.via'), {
      target: {
        value: 'via della prova 123',
      },
    });
    fireEvent.input(screen.getByTestId('address.comune'), {
      target: {
        value: 'Canelli',
      },
    });
    fireEvent.input(screen.getByTestId('address.provincia'), {
      target: {
        value: 'AT',
      },
    });
    fireEvent.input(screen.getByTestId('address.regione'), {
      target: {
        value: 'Piemonte',
      },
    });
    fireEvent.input(screen.getByTestId('address.CAP'), {
      target: {
        value: '111111',
      },
    });
    fireEvent.input(screen.getByTestId('pIva'), {
      target: {
        value: '1234567890',
      },
    });
    fireEvent.input(screen.getByTestId('phoneNumber'), {
      target: {
        value: '1111111111',
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
      expect(getByText('La partita iva non e valida')).toBeVisible();
      expect(getByText('Must be exactly 5 characters')).toBeVisible();
    });
  });

  it.only('should validate form fields and submit if fields are valid', async () => {
    const onSubmit = jest.fn();
    renderApollo(<UserForm onSubmit={onSubmit} />);

    fireEvent.input(screen.getByTestId('email'), {
      target: {
        value: 'prova@prova.it',
      },
    });
    fireEvent.input(screen.getByTestId('reEmail'), {
      target: {
        value: 'prova@prova.it',
      },
    });
    fireEvent.input(screen.getByTestId('password'), {
      target: {
        value: 'Ciao!!ciao123',
      },
    });
    fireEvent.input(screen.getByTestId('rePassword'), {
      target: {
        value: 'Ciao!!ciao123',
      },
    });
    fireEvent.input(screen.getByTestId('firstName'), {
      target: {
        value: 'giovanni',
      },
    });
    fireEvent.input(screen.getByTestId('lastName'), {
      target: {
        value: 'prova',
      },
    });
    fireEvent.input(screen.getByTestId('address.via'), {
      target: {
        value: 'via della prova 123',
      },
    });
    fireEvent.change(screen.getByTestId('address.regione'), {
      target: {
        value: Regioni.Piemonte,
      },
    });
    await waitFor(() => {
      fireEvent.change(screen.getByTestId('address.provincia'), {
        target: {
          value: 'AT',
        },
      });
    });
    await waitFor(() => {
      fireEvent.change(screen.getByTestId('address.comune'), {
        target: {
          value: 'Canelli',
        },
      });
    });
    fireEvent.input(screen.getByTestId('address.CAP'), {
      target: {
        value: '12345',
      },
    });
    fireEvent.input(screen.getByTestId('pIva'), {
      target: {
        value: '63477230385',
      },
    });
    fireEvent.input(screen.getByTestId('phoneNumber'), {
      target: {
        value: '3477984716',
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
  });
});
