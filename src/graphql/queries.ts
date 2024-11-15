// src/graphql/queries.ts

// Login Mutation
export const LOGIN_MUTATION = `
  query userLogin($payload: UserLoginDto!) {
    userLogin(payload: $payload) {
      accessToken
      refreshToken
    }
  }
`;

// Box History Query
export const BOX_HISTORY_QUERY = `
  query BoxHistory($payload: BoxHistoryDto!) {
    getBoxHistory(payload: $payload) {
      box_count
      boxes {
        box_id
        date
        count
        is_pending
        type
        wines {
          wine_id
          wine_name
          image
          pair_with
          philosophy
          about
          rating
          is_reviewed
          score
          area
          store
          likeness
        }
      }
    }
  }
`;

// Subscription Status Mutation
export const GET_SUBSCRIPTION_STATUS_MUTATION = `
  mutation getSubscriptionStatus {
    getSubscriptionStatus {
      status
      subscription_id
      type
      start_date
      end_date
      credit_balance
      number_of_boxes
      is_recommended_polling
    }
  }
`;

// Refresh Token Query
export const REFRESH_TOKEN_QUERY = `
  query getAccessTokenFromRefresh($access: String!, $refresh: String!) {
    getAccessToken(accessToken: $access, refreshToken: $refresh) {
      accessToken
      refreshToken
    }
  }
`;

// Box Wine Print Card Query
export const GET_BOX_WINE_PRINT_CARD_QUERY = `
  query getBoxWinePrintCard($box: String!) {
    getBoxWinePrintCard(box: $box)
  }
`;

// Load Subscription List Query
export const LOAD_SUBSCRIPTION_LIST_QUERY = `
  query loadSubscriptionListForUser($type: [Float!]!) {
    loadSubscriptionListForUser(type: $type) {
      _id
      title
      sub_title
      amount
      description
      is_early_adaptor
      display_order
      payment_link
      product_id
      duration
      type
      status
      is_current
    }
  }
`;

// Latest Gifts Query
export const LATEST_GIFTS_QUERY = `
  query LatestGiftsofUser {
    getLatestUserGift
  }
`;
