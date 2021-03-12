import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      address {
        regione
        provincia
        comune
        via
        CAP
      }
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
`;

export const NOTIFICATION = gql`
  query Notification {
    notification @client {
      type @client
      message @client
    }
  }
`;

export const WINE_SEARCHED = gql`
  query WineSearched {
    searchedWine @client {
      typeAd @client
      typeProduct @client
      wineName @client
      harvest @client
      abv @client
      price @client
      liters @client
      isPost @client
    }
  }
`;

export const ADS_WINE = gql`
  query AdsWine(
    $typeAd: TypeAd!
    $typeProduct: TypeProduct!
    $wineName: String
    $skip: Int
    $orderBy: QueryOrderBy
    $limit: Int
  ) {
    ads(
      typeAd: $typeAd
      typeProduct: $typeProduct
      wineName: $wineName
      skip: $skip
      orderBy: $orderBy
      limit: $limit
    ) {
      ads {
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
      pageCount
    }
  }
`;

export const AD = gql`
  query Ad($id: ID!) {
    ad(id: $id) {
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
        comune
        via
        CAP
      }
      activeNegotiations
      datePosted
      typeAd
      content
    }
  }
`;

export const WINES = gql`
  query Wines {
    wines {
      _id
      denominazioneVino
      espressioneComunitaria
      denominazioneZona
      regione
    }
  }
`;
