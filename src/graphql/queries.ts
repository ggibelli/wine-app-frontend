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
    }
    content
    typeAd
    # address {
    #   regione
    #   provincia
    # }
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
    }
    type
    review {
      _id
      createdBy {
        _id
      }
    }

    dateCreated
    dateConcluded
    isConcluded
  }
`;

export const MESSAGE_DETAILS = gql`
  fragment MessageDetails on Message {
    _id
    content
    isViewed
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
        _id
        ... on AdWine {
          wineName
        }
      }
      type
      isConcluded
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

export const FAVORITE = gql`
  query Favorite {
    me {
      savedAds {
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
        isActive
        savedTimes
      }
    }
  }
`;

export const LIGHT_ME = gql`
  query LightMe {
    me {
      _id
      firstName
      address {
        # regione
        # provincia
        comune
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      _id
      firstName
      lastName
      address {
        # regione
        # provincia
        comune
      }
      ads {
        _id
        postedBy {
          _id
        }
        isActive
        harvest
        typeAd
        ... on AdWine {
          wineName
        }
      }
      savedAds {
        _id
      }
      messages {
        _id
        isViewed
        sentBy {
          _id
        }
      }
      negotiations {
        _id
        isConcluded
        ad {
          _id
        }
      }
      reviews {
        _id
        forUser {
          _id
        }
        rating
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

export const MY_INFO = gql`
  query MyInfo {
    myInfo @client {
      _id
      firstName
      lastName
      address {
        # regione
        # provincia
        comune
      }
      ads {
        _id
        postedBy {
          _id
        }
        isActive
      }
      savedAds {
        _id
      }
      messages {
        _id
        isViewed
        sentBy {
          _id
        }
      }
      negotiations {
        _id
        isConcluded
        ad {
          _id
        }
      }
      reviews {
        _id

        rating
      }
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
        # address {
        #   regione
        #   provincia
        #   comune
        # }
        activeNegotiations
        numberViews
        savedTimes
        isActive
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
        }
      }
      typeAd
      # address {
      #   regione
      #   provincia
      #   comune
      # }
      content
      activeNegotiations
      numberViews
      savedTimes
      datePosted
      isActive
    }
    me {
      _id
      negotiations {
        _id
        ad {
          _id
        }
      }
      savedAds {
        _id
      }
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
      tipoVino
      vitigni
    }
  }
`;

export const NEGOTIATIONS = gql`
  query Negotiations(
    $offset: Int
    $orderBy: QueryOrderBy
    $limit: Int
    $isConcluded: Boolean
  ) {
    negotiations(
      offset: $offset
      orderBy: $orderBy
      limit: $limit
      isConcluded: $isConcluded
    ) {
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
  query MessagesNegotiation($id: ID!, $offset: Int, $limit: Int) {
    messagesForNegotiation(negotiation: $id, offset: $offset, limit: $limit) {
      messages {
        ...MessageDetails
      }
      pageCount
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
      pageCount
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
      dateConcluded
      type
    }
  }
`;

export const ADS_FOR_USER = gql`
  query AdsForUser(
    $offset: Int
    $orderBy: QueryOrderBy
    $limit: Int
    $isActive: Boolean
    $user: ID!
  ) {
    adsForUser(
      offset: $offset
      orderBy: $orderBy
      limit: $limit
      user: $user
      isActive: $isActive
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
          }
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
        isActive
        savedTimes
      }
      pageCount
    }
  }
`;

export const GET_MESSAGE = gql`
  query getMessage($id: ID!) {
    message(id: $id) {
      ...MessageDetails
    }
  }
  ${MESSAGE_DETAILS}
`;
