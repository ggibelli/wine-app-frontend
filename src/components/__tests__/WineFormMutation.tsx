import { WineFormMutation } from '../WineForms/Post/WineFormMutation';
import * as React from 'react';
import {
  renderApollo,
  cleanup,
  fireEvent,
  screen,
  waitFor,
  within,
  act,
} from '../../test-utils';
import { TypeAd, TypeProduct, WinesDocument } from '../../generated/graphql';
import { searchedWine } from '../../cache';

const mocks = [
  {
    request: {
      query: WinesDocument,
    },
    result: {
      data: {
        wines: [
          {
            _id: '12345',
            denominazioneVino: 'Barbera',
            espressioneComunitaria: 'DOP',
            denominazioneZona: 'DOC',
            regione: ['Piemonte'],
            __typename: 'Wine',
          },
        ],
      },
    },
  },
];

describe('Wine form mutation', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it.only('renders Wine form mutation loading state', () => {
    const onSubmit = () => jest.fn();
    renderApollo(<WineFormMutation onSubmit={onSubmit} />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it.only('renders Wine form query success state, shows address field by default', async () => {
    const onSubmit = () => jest.fn();
    renderApollo(<WineFormMutation onSubmit={onSubmit} />, {
      mocks,
      addTypename: true,
      resolvers: {},
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(
      screen.getByRole('spinbutton', { name: /abv/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /harvest/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /price/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /liters/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /vino/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /sottozona/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /content/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /regione/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /provincia/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /comune/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /via/i })).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /address.CAP/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /metodo produttivo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /menzione/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', {
        name: /Aggiornami se nuovi annunci pertinenti/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', {
        name: /Indirizzo uguale a quello usato in registrazione/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it.only('renders Wine form query success state, does not show address field if same address', async () => {
    const onSubmit = () => jest.fn();
    renderApollo(<WineFormMutation onSubmit={onSubmit} />, {
      mocks,
      addTypename: true,
      resolvers: {},
    });
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    expect(
      screen.getByRole('spinbutton', { name: /abv/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /harvest/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /price/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /liters/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /vino/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /sottozona/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /content/i })
    ).toBeInTheDocument();
    await waitFor(() => {
      fireEvent.click(
        screen.getByRole('checkbox', {
          name: /Indirizzo uguale a quello usato in registrazione/i,
        })
      );
    });
    expect(screen.queryByText(/regione/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/provincia/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/comune/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/via/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/cap/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /metodo produttivo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /menzione/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', {
        name: /Aggiornami se nuovi annunci pertinenti/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', {
        name: /Indirizzo uguale a quello usato in registrazione/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it.only('should validate form fields and not submit if fields empty', async () => {
    const onSubmit = jest.fn();
    const { getAllByText } = renderApollo(
      <WineFormMutation onSubmit={onSubmit} />,
      { mocks, addTypename: true, resolvers: {} }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    fireEvent.change(screen.getByRole('spinbutton', { name: /abv/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /harvest/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /price/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /liters/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /vino/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /sottozona/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /content/i }), {
      target: {
        value: '',
      },
    });
    fireEvent.change(
      screen.getByRole('checkbox', {
        name: /Aggiornami se nuovi annunci pertinenti/i,
      }),
      {
        target: {
          value: '',
        },
      }
    );
    fireEvent.change(
      screen.getByRole('checkbox', {
        name: /Indirizzo uguale a quello usato in registrazione/i,
      }),
      {
        target: {
          value: '',
        },
      }
    );
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(0);
      expect(getAllByText('Required')).toHaveLength(6);
    });
  });

  it('should validate form fields and not submit if fields are not valid', async () => {
    const onSubmit = jest.fn();
    const { getByTestId, getByText } = renderApollo(
      <WineFormMutation onSubmit={onSubmit} />,
      { mocks, addTypename: true, resolvers: {} }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    fireEvent.change(screen.getByRole('spinbutton', { name: /abv/i }), {
      target: {
        value: 130.5,
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /harvest/i }), {
      target: {
        value: 2030,
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /price/i }), {
      target: {
        value: 3.5,
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /liters/i }), {
      target: {
        value: 1000,
      },
    });
    const comboboxWines = getByTestId('combobox-wines');
    const inputWines = within(comboboxWines).getByRole('textbox');
    comboboxWines.focus();
    fireEvent.change(inputWines, { target: { value: 'b' } });
    await waitFor(() => {
      //const input = within(combobox).querySelector('input');

      fireEvent.keyDown(inputWines, { key: 'ArrowDown' });
    });
    await waitFor(() => {
      fireEvent.keyDown(inputWines, { key: 'Enter' });
    });
    fireEvent.change(screen.getByRole('textbox', { name: /vino/i }));
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(getByText("L'anno non può essere maggiore di 2021")).toBeVisible();

      expect(
        getByText('La gradazione alcolica non può essere maggiore di 22')
      ).toBeVisible();

      expect(onSubmit).toBeCalledTimes(0);
    });
  }, 10000);

  it.only('should validate form fields and submit if fields are valid using cache', async () => {
    const onSubmit = jest.fn();
    searchedWine({
      wineName: 'Barbera',
      abv: 13.5,
      liters: 1000,
      price: 3.5,
      typeAd: TypeAd.Buy,
      typeProduct: TypeProduct.AdWine,
      harvest: 2012,
      isPost: true,
    });
    const { getByTestId } = renderApollo(
      <WineFormMutation onSubmit={onSubmit} />,
      { mocks, addTypename: true, resolvers: {} }
    );
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    fireEvent.change(screen.getByRole('spinbutton', { name: /abv/i }), {
      target: {
        value: 13.5,
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /harvest/i }), {
      target: {
        value: 2010,
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /price/i }), {
      target: {
        value: 3.5,
      },
    });
    fireEvent.change(screen.getByRole('spinbutton', { name: /liters/i }), {
      target: {
        value: 1000,
      },
    });
    fireEvent.change(screen.getByRole('textbox', { name: /content/i }), {
      target: {
        value: 'vinazzo',
      },
    });
    const comboboxWines = getByTestId('combobox-wines');
    const inputWines = within(comboboxWines).getByRole('textbox');
    comboboxWines.focus();
    fireEvent.change(inputWines, { target: { value: 'b' } });
    await waitFor(() => {
      //const input = within(combobox).querySelector('input');

      fireEvent.keyDown(inputWines, { key: 'ArrowDown' });
    });
    await waitFor(() => {
      fireEvent.keyDown(inputWines, { key: 'Enter' });
    });
    await waitFor(() => {
      fireEvent.click(
        screen.getByRole('checkbox', {
          name: /Aggiornami se nuovi annunci pertinenti/i,
        })
      );
    });
    await waitFor(() => {
      fireEvent.click(
        screen.getByRole('checkbox', {
          name: /Indirizzo uguale a quello usato in registrazione/i,
        })
      );
    });
    fireEvent.change(screen.getByRole('textbox', { name: /vino/i }));
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(1);
    });
  }, 10000);
});
