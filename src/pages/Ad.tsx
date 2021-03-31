import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useParams } from '@reach/router';
import {
  TypeAd,
  useAdQuery,
  useCreateNegotiationMutation,
  NegotiationInput,
  useNegotiationsForAdLazyQuery,
  MeQuery,
  NegotiationInputUpdate,
  AdQuery,
  NegotiationsForAdQuery,
} from '../generated/graphql';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { notification } from '../cache';
import { CardWineDetail } from '../components/CardWineDetail';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { BackButton } from '../components/BackButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import { updateCacheNegotiations } from '../utils/updateCache';
import { OpenNegotiations } from '../components/OpenNegotiations';

export interface ICachedNegotiations {
  negotiations: Array<NegotiationsForAdQuery['negotiationsForAd']>;
  pageCount: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  })
);

export const Ad: React.FC<
  RouteComponentProps & {
    meData: MeQuery['me'] | undefined;
    handleCloseNeg: (negotiation: NegotiationInputUpdate) => Promise<void>;
  }
> = ({ meData, handleCloseNeg }) => {
  const [ad, setAd] = React.useState<AdQuery['ad'] | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { id }: { id: string } = useParams();
  const { data, loading, error } = useAdQuery({
    variables: {
      id: id,
    },
    onCompleted: (data) => (data?.ad ? setAd(data?.ad) : null),
  });

  React.useEffect(() => {
    if (data?.ad) {
      setAd(data?.ad);
    }
  }, [data?.ad?.activeNegotiations]);

  const [createNegotiation] = useCreateNegotiationMutation({
    onCompleted: (createdNegotiation) => {
      notification({
        message: 'trattativa creata con successo',
        type: 'success',
      });
      if (createdNegotiation.createNegotiation?.errors?.length) {
        const errorMessages = createdNegotiation.createNegotiation?.errors.map(
          (error) => error?.text
        );
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      }
    },
    onError: (error) =>
      notification({
        type: 'error',
        message: `errore durante creazione trattativa: ${error.message}`,
      }),
    update: (cache, response) => {
      updateCacheNegotiations(
        cache,
        response.data?.createNegotiation?.response
      );
    },
  });
  const [lazyNegotiations, lazyNegResult] = useNegotiationsForAdLazyQuery();
  const [open, setOpen] = React.useState<boolean>(false);
  const handleShowNegotiations = () => {
    if (!open) {
      lazyNegotiations({ variables: { ad: id } });
    }
    setOpen(!open);
  };

  const openNegotiation = () => {
    const newNegotiation: NegotiationInput = {
      forUserAd: ad?.postedBy._id,
      ad: ad?._id,
      type: ad?.typeAd,
    } as NegotiationInput;
    void createNegotiation({ variables: { negotiation: newNegotiation } });
  };
  const classes = useStyles();
  if (error && !loading) {
    notification({
      type: 'error',
      message: `${error.message}`,
    });
    return <div>Errore</div>;
  }
  const buyerOrSeller =
    ad?.typeAd === TypeAd.Buy ? "L'acquirente" : 'Il venditore';
  if (ad?._id && meData) {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <BackButton />
        <div className={classes.paper}>
          <Typography color='primary' component='h3' variant='h5'>
            Contatta {buyerOrSeller}
          </Typography>
          <Typography color='secondary' variant='body1'>
            Questo è uno degli annunci che abbiamo selezionato per te: verifica
            anche tu i parametri e decidi se procedere.
          </Typography>
        </div>
        <CardWineDetail
          ad={ad}
          me={meData}
          createNegotiation={openNegotiation}
        />
        {meData?._id === ad.postedBy._id && ad.activeNegotiations ? (
          <>
            <IconButton onClick={handleShowNegotiations}>
              {!open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
            <Collapse in={open}>
              <OpenNegotiations
                data={lazyNegResult}
                closeNegotiation={handleCloseNeg}
              />
            </Collapse>
          </>
        ) : null}
      </Container>
    );
  }
  return (
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  );
};
