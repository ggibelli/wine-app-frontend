import { gql } from '@apollo/client';
import {
  AD_DETAILS,
  MESSAGE_DETAILS,
  NEGOTIATION_DETAILS,
  REVIEW_DETAILS,
} from './queries';

export const AD_POSTED_FOLLOWUP = gql`
  subscription AdPostedFollowUp {
    adPostedFollowUp {
      _id
      postedBy {
        _id
      }

      harvest
      abv
      priceFrom
      priceTo
      ... on AdWine {
        wineName
        litersFrom
        litersTo
        metodoProduttivo
      }
      typeAd
      # address {
      #   regione
      #   provincia
      #   comune
      # }
      activeNegotiations
      numberViews
      datePosted
    }
  }
  ${AD_DETAILS}
`;

export const AD_REMOVED = gql`
  subscription AdRemoved {
    adRemoved {
      _id
    }
  }
  ${AD_DETAILS}
`;

export const MESSAGE_SENT = gql`
  subscription MessageSent {
    messageSent {
      ...MessageDetails
    }
  }
  ${MESSAGE_DETAILS}
`;

export const NEGOTIATION_CREATED = gql`
  subscription NegotiationCreated {
    negotiationCreated {
      ...NegotiationDetails
    }
  }
  ${NEGOTIATION_DETAILS}
`;

export const NEGOTIATION_CLOSED = gql`
  subscription NegotiationClosed {
    negotiationClosed {
      _id
      postedBy {
        _id
      }

      harvest
      abv
      priceFrom
      priceTo
      ... on AdWine {
        wineName
        litersFrom
        litersTo
        metodoProduttivo
      }
      typeAd
      # address {
      #   regione
      #   provincia
      #   comune
      # }
      activeNegotiations
      numberViews
      datePosted
    }
  }
  ${AD_DETAILS}
`;

export const REVIEW_CREATED = gql`
  subscription ReviewCreated {
    reviewCreated {
      ...ReviewDetails
    }
  }
  ${REVIEW_DETAILS}
`;
