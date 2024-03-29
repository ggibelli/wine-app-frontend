import { WineFormMutation } from '../WineForms/Post/WineFormMutation';
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
import { TypeAd } from '../../generated/graphql';
import { WineOption } from '../../utils/wineList';

// Fix test loading status and mock apollo not needed
const wines: WineOption[] = [
  {
    d: 'Abruzzo DOC bianco',

    v: ['Trebbiano Abruzzese, Trebbiano Toscano'],
  },
  {
    d: 'Abruzzo DOC Cococciola',

    v: ['Cococciola'],
  },
  {
    d: 'Abruzzo DOC Cococciola superiore',

    v: ['Cococciola'],
  },
  {
    d: 'Abruzzo DOC Malvasia',

    v: ['Malvasia'],
  },
];

describe('Wine form mutation', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders Wine form query success state, shows address field by default', () => {
    const onSubmit = () => jest.fn();
    renderApolloNoRouter(
      <WineFormMutation
        wines={wines}
        onSubmit={onSubmit}
        adType={TypeAd.Buy}
      />,
    );

    expect(
      screen.getByRole('spinbutton', { name: /abv/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /harvest/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /price/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /liters/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /vino/i })).toBeInTheDocument();

    expect(
      screen.getByRole('textbox', { name: /content/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('combobox', { name: /metodo produttivo/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should validate form fields and not submit if fields empty', async () => {
    const onSubmit = jest.fn();
    const { getAllByText } = renderApolloNoRouter(
      <WineFormMutation
        wines={wines}
        onSubmit={onSubmit}
        adType={TypeAd.Buy}
      />,
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

    fireEvent.change(screen.getByRole('textbox', { name: /content/i }), {
      target: {
        value: '',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(0);
      expect(getAllByText('Required')).toHaveLength(5);
    });
  }, 10000);

  it('should validate form fields and not submit if fields are not valid', async () => {
    const onSubmit = jest.fn();

    const { getByTestId, getByText, queryByRole, getByRole } =
      renderApolloNoRouter(
        <WineFormMutation
          wines={wines}
          onSubmit={onSubmit}
          adType={TypeAd.Buy}
        />,
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
    expect(queryByRole('button', { name: 'Seleziona i vitigni' })).toBeFalsy();
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
    expect(getByRole('button', { name: 'Seleziona i vitigni' }));

    fireEvent.change(screen.getByRole('textbox', { name: /vino/i }));
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(getByText("L'anno non può essere maggiore di 2021")).toBeVisible();

      expect(
        getByText('La gradazione alcolica non può essere maggiore di 22'),
      ).toBeVisible();

      expect(onSubmit).toBeCalledTimes(0);
    });
  }, 10000);

  it('should validate form fields and submit if fields are valid', async () => {
    const onSubmit = jest.fn();

    const { getByTestId } = renderApolloNoRouter(
      <WineFormMutation
        wines={wines}
        onSubmit={onSubmit}
        adType={TypeAd.Buy}
      />,
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

    fireEvent.change(screen.getByRole('textbox', { name: /vino/i }));
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(1);
    });
  }, 10000);
});
