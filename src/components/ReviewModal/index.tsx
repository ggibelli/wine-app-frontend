import Button from '@material-ui/core/Button';
import * as React from 'react';
import { TypeAd } from '../../generated/graphql';
import {
  StyledRating,
  useStyles as useStylesHook,
  useStylesForms,
  useStyleRating,
} from '../../utils/styleHook';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CreateReview } from '../../containers/CreateReview';
const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export const CreateReviewModal: React.FC<{
  idNegotiation: string;
  idUser: string;
  type: TypeAd;
}> = ({ idUser, idNegotiation, type }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState<number>(-1);
  const [review, setReview] = React.useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };
  const classes = useStylesHook();
  const classesTextField = useStylesForms();
  const classesStars = useStyleRating();
  const handleModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        aria-label='review'
        className={type === TypeAd.Buy ? classes.buyButton : classes.sellButton}
        onClick={handleModal}
      >
        Lascia una recensione
      </Button>
      <div style={{ display: 'none' }}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Recensisci la trattativa
          </DialogTitle>

          <DialogContent>
            <div className={classesStars.root}>
              <StyledRating
                name='hover-feedback'
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </div>
            <TextField
              color='primary'
              multiline
              rows={4}
              value={review}
              error={review.length > 0 && review.length <= 5}
              helperText='Lunghezza minima 5 caratteri'
              onChange={handleChange}
              InputLabelProps={{
                style: { color: '#6d1331' },
              }}
              InputProps={{
                className: classesTextField.inputSell,
                classes: {
                  underline: classesTextField.underlineSell,
                },
              }}
              id='outlined-multiline-flexible'
              label='Recensione'
              placeholder='Ottima persona con cui....'
            />
          </DialogContent>
          <DialogActions>
            <Button
              aria-label='close-modal'
              onClick={handleClose}
              color='primary'
            >
              Cancel
            </Button>
            <CreateReview
              disabled={review.length <= 5}
              review={{
                forUser: idUser,
                rating: value as number,
                negotiation: idNegotiation,
                content: review,
                type: type,
              }}
              closeModal={handleClose}
            />
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
