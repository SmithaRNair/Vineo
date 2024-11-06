import { gql } from '@apollo/client';

export const BOX_HISTORY_ADMIN_QUERY = gql`
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
