import { gql } from '@apollo/client';
import {
  AD_DETAILS,
  MESSAGE_DETAILS,
  NEGOTIATION_DETAILS,
  REVIEW_DETAILS,
} from './queries';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      response {
        token
        user {
          _id
          firstName
          address {
            regione
            provincia
            comune
          }
        }
      }
      errors {
        name
        text
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation CreateUser($userInput: UserInput!) {
    createUser(user: $userInput) {
      response {
        token
        user {
          _id
          firstName
        }
      }
      errors {
        name
        text
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($user: UserInputUpdate!) {
    updateUser(user: $user) {
      response {
        _id
        firstName
      }
      errors {
        name
        text
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      response {
        _id
        firstName
      }
      errors {
        name
        text
      }
    }
  }
`;

export const CREATE_ADWINE = gql`
  mutation CreateAdWine($input: AdInput!) {
    createAd(input: $input) {
      response {
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
          wine {
            denominazioneZona
          }
        }
        typeAd
        address {
          regione
          provincia
          comune
        }
        activeNegotiations
        numberViews
        datePosted
      }
      errors {
        name
        text
      }
    }
  }
  ${AD_DETAILS}
`;

export const UPDATE_ADWINE = gql`
  mutation UpdateAdWine($input: AdInputUpdate!) {
    updateAd(input: $input) {
      response {
        _id
      }
      errors {
        name
        text
      }
    }
  }
  ${AD_DETAILS}
`;

export const SAVE_AD = gql`
  mutation SaveAd($id: ID!) {
    saveAd(id: $id) {
      response {
        _id
        harvest
        abv
        priceFrom
        priceTo
        ... on AdWine {
          wineName
          litersFrom
          litersTo
          wine {
            denominazioneZona
          }
        }
        datePosted
      }
      errors {
        name
        text
      }
    }
  }
`;

export const DELETE_AD = gql`
  mutation DeleteAd($id: ID!) {
    deleteAd(id: $id) {
      response {
        _id
      }
      errors {
        name
        text
      }
    }
  }
`;

export const CREATE_NEGOTIATION = gql`
  mutation CreateNegotiation($negotiation: NegotiationInput!) {
    createNegotiation(negotiation: $negotiation) {
      response {
        ...NegotiationDetails
      }
      errors {
        name
        text
      }
    }
  }
  ${NEGOTIATION_DETAILS}
`;

export const UPDATE_NEGOTIATION = gql`
  mutation UpdateNegotiation($negotiation: NegotiationInputUpdate!) {
    updateNegotiation(negotiation: $negotiation) {
      response {
        ...NegotiationDetails
      }
      errors {
        name
        text
      }
    }
  }
  ${NEGOTIATION_DETAILS}
`;

export const DELETE_NEGOTIATION = gql`
  mutation DeleteNegotiation($id: ID!) {
    deleteNegotiation(id: $id) {
      response {
        _id
      }
      errors {
        name
        text
      }
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($message: MessageInput!) {
    createMessage(message: $message) {
      response {
        ...MessageDetails
      }
      errors {
        name
        text
      }
    }
  }
  ${MESSAGE_DETAILS}
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: ReviewInput!) {
    createReview(review: $review) {
      response {
        ...ReviewDetails
      }
      errors {
        name
        text
      }
    }
  }
  ${REVIEW_DETAILS}
`;
