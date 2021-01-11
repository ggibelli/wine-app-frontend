import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      _id
      firstName
      email
      ads {
        _id
        typeAd
        ... on AdWine {
          wineName
        }
      }
      negotiations {
        _id
        ad {
          _id
          ... on AdWine {
            wineName
          }
        }
        forUserAd {
          _id
          email
        }
      }
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
  query Notification {
    notification @client {
      type @client
      message @client
    }
  }
`;
