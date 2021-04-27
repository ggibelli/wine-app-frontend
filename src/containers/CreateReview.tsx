import Button from '@material-ui/core/Button';
import * as React from 'react';
import { notification } from '../cache';
import { useCreateReviewMutation, ReviewInput } from '../generated/graphql';

export const CreateReview: React.FC<{
  review: ReviewInput;
  disabled: boolean;
  closeModal?: () => void;
}> = ({ review, disabled, closeModal }) => {
  const [createReview, { loading }] = useCreateReviewMutation({
    onCompleted: (createdReview) => {
      if (createdReview.createReview?.errors?.length) {
        const errorMessages = createdReview.createReview?.errors.map(
          (error) => error?.text
        );
        notification({
          type: 'error',
          message: `${errorMessages.toString()}`,
        });
      } else {
        notification({
          type: 'success',
          message: 'Recensione creata con successo',
        });
      }
    },

    onError: (error) => notification({ type: 'error', message: error.message }),
  });

  const handleCreateReview = () => {
    closeModal && closeModal();
    void createReview({
      variables: {
        review,
      },
    });
  };

  return (
    <Button
      disabled={disabled || loading}
      aria-label='review'
      onClick={handleCreateReview}
      color='primary'
    >
      Recensisci
    </Button>
  );
};
