import { GrapeFormModal } from '../../components/GrapeFormModal';
import * as React from 'react';
import {
  renderApolloNoRouter,
  cleanup,
  screen,
} from '../../test-utils/test-utils';
import { fireEvent, waitFor } from '@testing-library/react';
import { compositionWine } from '../../cache';

const wineGrape = {
  d: 'Abruzzo DOC bianco',

  v: ['Trebbiano Abruzzese', 'Trebbiano Toscano'],
};

describe('CreateReview Component', () => {
  afterEach(cleanup);

  it('renders the GrapeFormModal modal', () => {
    const { getByText } = renderApolloNoRouter(
      <GrapeFormModal handleClose={jest.fn} open={true} grapes={wineGrape} />,
      {
        mocks: [],
        addTypename: false,
      },
    );
    expect(getByText('Trebbiano Abruzzese'));
    expect(getByText('Trebbiano Toscano'));
  });

  it('renders the GrapeFormModal modal, it shows the error if not 100', async () => {
    const { getByText, getByRole } = renderApolloNoRouter(
      <GrapeFormModal handleClose={jest.fn} open={true} grapes={wineGrape} />,
      {
        mocks: [],
        addTypename: false,
      },
    );
    const wine1 = getByRole('spinbutton', { name: 'Trebbiano Abruzzese' });
    const wine2 = getByRole('spinbutton', { name: 'Trebbiano Toscano' });
    // act(() => {
    await waitFor(() => {
      fireEvent.change(wine1, { target: { value: 80 } });
      fireEvent.change(wine2, { target: { value: 80 } });
      fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    });
    expect(getByText('The percentage should be 100'));
    // fireEvent.change(wine2, { target: { value: 80 } });
    // });

    expect(compositionWine()).toBeUndefined();
  });

  it('renders the GrapeFormModal modal, it saves grapes to cache', async () => {
    const closeMock = jest.fn();
    const { queryByText, getByRole } = renderApolloNoRouter(
      <GrapeFormModal handleClose={closeMock} open={true} grapes={wineGrape} />,
      {
        mocks: [],
        addTypename: false,
      },
    );
    const wine1 = getByRole('spinbutton', { name: 'Trebbiano Abruzzese' });
    const wine2 = getByRole('spinbutton', { name: 'Trebbiano Toscano' });
    // act(() => {
    await waitFor(() => {
      fireEvent.change(wine1, { target: { value: 20 } });
      fireEvent.change(wine2, { target: { value: 80 } });
    });
    await waitFor(() => {
      fireEvent.submit(screen.getByRole('button', { name: /submit/i }));
    });
    expect(queryByText('The percentage should be 100')).toBeFalsy();
    // fireEvent.change(wine2, { target: { value: 80 } });
    // });

    expect(compositionWine()).toEqual({
      compisition: { 'Trebbiano Abruzzese': 20, 'Trebbiano Toscano': 80 },
      name: 'Abruzzo DOC bianco',
    });
    expect(closeMock).toHaveBeenCalledTimes(1);
  });
});
