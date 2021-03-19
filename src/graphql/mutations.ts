import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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

export const CREATE_ADWINE = gql`
  mutation CreateAdWine($input: AdInput!) {
    createAd(input: $input) {
      response {
        _id
        postedBy {
          _id
          firstName
          lastName
        }

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

        address {
          regione
          provincia
        }
        activeNegotiations
        datePosted
      }
      errors {
        name
        text
      }
    }
  }
`;

export const UPDATE_ADWINE = gql`
  mutation UpdateAdWine($input: AdInputUpdate!) {
    updateAd(input: $input) {
      response {
        _id
        postedBy {
          _id
          firstName
          lastName
        }

        harvest
        abv
        priceFrom
        priceTo
        ... on AdWine {
          wineName
          litersFrom
          litersTo
        }

        address {
          regione
          provincia
        }
        activeNegotiations
        datePosted
      }
      errors {
        name
        text
      }
    }
  }
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
