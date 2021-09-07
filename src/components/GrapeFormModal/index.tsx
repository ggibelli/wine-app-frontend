/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { GrapeForm } from './GrapeForm';
import { WineOption } from '../../utils/wineList';
import { compositionWine } from '../../cache';

export const GrapeFormModal: React.FC<{
  handleClose: () => void;
  open: boolean;
  grapes?: WineOption;
}> = ({ handleClose, open, grapes }) => {
  if (!grapes) return null;
  const submitGrapes = (values: Record<string, number>) => {
    compositionWine({ name: grapes?.d, compisition: values });
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby='grape-form'>
      <DialogContent>
        <GrapeForm onSubmit={submitGrapes} grapes={grapes} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
