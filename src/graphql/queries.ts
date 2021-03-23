import { gql } from '@apollo/client';

export const AD_DETAILS = gql`
  fragment AdDetails on Ad {
    _id
    postedBy {
      _id
      firstName
      lastName
      hideContact
    }
    needsFollowUp
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
        regione
      }
    }
    typeAd
    address {
      regione
      provincia
    }
    activeNegotiations
    datePosted
  }
`;

export const NEGOTIATION_DETAILS = gql`
  fragment NegotiationDetails on Negotiation {
    _id
    createdBy {
      _id
      firstName
      lastName
      hideContact
    }
    ad {
      _id
      postedBy {
        _id
        firstName
        lastName
      }
      ... on AdWine {
        wineName
      }
    }
    forUserAd {
      _id
      firstName
      lastName
      hideContact
    }
    type
    messages {
      _id
    }
    dateCreated
    isConcluded
  }
`;

export const MESSAGE_DETAILS = gql`
  fragment MessageDetails on Message {
    _id
    content
    sentBy {
      _id
      firstName
      lastName
    }
    sentTo {
      _id
      firstName
      lastName
    }
    negotiation {
      _id
      ad {
        ... on AdWine {
          wineName
          litersFrom
          litersTo
          wine {
            denominazioneZona
          }
        }
      }
    }
    dateSent
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    _id
    createdBy {
      _id
      firstName
      lastName
    }
    negotiation {
      _id
      ad {
        _id
        ... on AdWine {
          wineName
        }
      }
    }
    forUser {
      _id
      firstName
      lastName
    }
    rating
    dateCreated
    content
    type
  }
`;

export const ME = gql`
  query me($offset: Int, $orderBy: QueryOrderBy, $limit: Int) {
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
      ads(offset: $offset, orderBy: $orderBy, limit: $limit) {
        ads {
          _id
          postedBy {
            _id
            firstName
            lastName
            hideContact
          }
          needsFollowUp
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
              regione
            }
          }
          typeAd
          address {
            regione
            provincia
            comune
          }
          activeNegotiations
          datePosted
        }
        pageCount
      }
      savedAds {
        _id
        postedBy {
          _id
          firstName
          lastName
          hideContact
        }
        needsFollowUp
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
            regione
          }
        }
        typeAd
        address {
          regione
          provincia
          comune
        }
        activeNegotiations
        datePosted
      }
      negotiations(offset: $offset, orderBy: $orderBy, limit: $limit) {
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
          isConcluded
        }
        pageCount
      }
    }
  }
  ${AD_DETAILS}
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
    $offset: Int
    $orderBy: QueryOrderBy
    $limit: Int
  ) {
    ads(
      typeAd: $typeAd
      typeProduct: $typeProduct
      wineName: $wineName
      offset: $offset
      orderBy: $orderBy
      limit: $limit
    ) {
      ads {
        _id
        postedBy {
          _id
          firstName
          lastName
          hideContact
        }
        needsFollowUp
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
            regione
          }
        }
        typeAd
        address {
          regione
          provincia
          comune
        }
        activeNegotiations
        datePosted
      }
      pageCount
    }
  }
  ${AD_DETAILS}
`;

export const AD = gql`
  query Ad($id: ID!) {
    ad(id: $id) {
      _id
      postedBy {
        _id
        firstName
        lastName
        hideContact
        email
        phoneNumber
      }
      needsFollowUp
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
          regione
        }
      }
      typeAd
      address {
        regione
        provincia
        comune
      }
      activeNegotiations
      datePosted
    }
  }
  ${AD_DETAILS}
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

export const NEGOTIATIONS = gql`
  query Negotiations($offset: Int, $orderBy: QueryOrderBy, $limit: Int) {
    negotiations(offset: $offset, orderBy: $orderBy, limit: $limit) {
      negotiations {
        ...NegotiationDetails
      }
      pageCount
    }
  }
  ${NEGOTIATION_DETAILS}
`;

export const NEGOTIATION = gql`
  query Negotiation($id: ID!) {
    negotiation(id: $id) {
      ...NegotiationDetails
      ad {
        ... on AdWine {
          wine {
            denominazioneZona
          }
        }
        postedBy {
          hideContact
          phoneNumber
          email
        }
      }
    }
  }
  ${NEGOTIATION_DETAILS}
`;

export const ALL_MESSAGES = gql`
  query Messages {
    messages {
      ...MessageDetails
    }
  }
  ${MESSAGE_DETAILS}
`;

export const MESSAGES_NEGOTIATION = gql`
  query MessagesNegotiation($id: ID!) {
    messagesForNegotiation(negotiation: $id) {
      ...MessageDetails
    }
  }
  ${MESSAGE_DETAILS}
`;

export const REVIEWS = gql`
  query Reviews($offset: Int, $orderBy: QueryOrderBy, $limit: Int) {
    reviews(offset: $offset, orderBy: $orderBy, limit: $limit) {
      reviews {
        ...ReviewDetails
      }
    }
  }
  ${REVIEW_DETAILS}
`;

export const REVIEW = gql`
  query Review($id: ID!) {
    review(id: $id) {
      ...ReviewDetails
    }
  }
  ${REVIEW_DETAILS}
`;

export const NEGOTIATION_FOR_AD = gql`
  query NegotiationsForAd($ad: ID!) {
    negotiationsForAd(ad: $ad) {
      _id
      isConcluded
      createdBy {
        _id
        firstName
        lastName
      }
      dateCreated
    }
  }
`;
