import { WineFormQuery } from '../WineForms/Search/WineFormQuery';
import * as React from 'react';
import {
  renderApolloNoRouter,
  cleanup,
  fireEvent,
  screen,
  waitFor,
  within,
  act,
} from '../../test-utils/test-utils';
import { TypeAd, WinesDocument } from '../../generated/graphql';

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

const loadingData = {
  data: undefined,
  loading: true,
  error: undefined,
};

describe('Wine form query', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders Wine form query loading state', () => {
    const onSubmit = () => jest.fn();
    renderApolloNoRouter(
      <WineFormQuery
        wines={loadingData}
        onSubmit={onSubmit}
        adType={TypeAd.Buy}
      />
    );
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    // expect(
    //   screen.getByRole('textbox', { name: /gradazione/i })
    // ).toBeInTheDocument();
    // expect(
    //   screen.getByRole('textbox', { name: /prezzo/i })
    // ).toBeInTheDocument();
    // expect(screen.getByRole('textbox', { name: /litri/i })).toBeInTheDocument();
    // expect(screen.getByRole('textbox', { name: /vino/i })).toBeInTheDocument();

    // expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('renders Wine form query success state', async () => {
    const onSubmit = () => jest.fn();
    renderApolloNoRouter(
      <WineFormQuery
        wines={mocks[0].result}
        onSubmit={onSubmit}
        adType={TypeAd.Buy}
      />,
      {
        mocks,
        addTypename: true,
        resolvers: {},
      }
    );
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

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should validate form fields and not submit if fields empty', async () => {
    const onSubmit = jest.fn();
    const { getAllByText } = renderApolloNoRouter(
      <WineFormQuery
        wines={mocks[0].result}
        onSubmit={onSubmit}
        adType={TypeAd.Buy}
      />,
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
    fireEvent.change(screen.getByRole('textbox', { name: /vino/i }));
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(0);
      expect(getAllByText('Required')).toHaveLength(5);
    });
  });

  it('should validate form fields and not submit if fields are not valid', async () => {
    const onSubmit = jest.fn();
    const { getByTestId, getByText } = renderApolloNoRouter(
      <WineFormQuery
        wines={mocks[0].result}
        onSubmit={onSubmit}
        adType={TypeAd.Buy}
      />,
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

  it('should validate form fields and submit if fields are valid', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = renderApolloNoRouter(
      <WineFormQuery
        wines={mocks[0].result}
        onSubmit={onSubmit}
        adType={TypeAd.Buy}
      />,
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
      expect(onSubmit).toBeCalledTimes(1);
    });
  }, 10000);
});
