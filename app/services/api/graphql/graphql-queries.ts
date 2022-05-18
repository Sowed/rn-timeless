import gql from 'graphql-tag';

/**
 * -----------------------------------------------------------------------------
 * This query will fetch details a given drop asset by a specific `id`.
 * 
 * TODO: Move this next to the respective fetcher function when ready.
 */
export const FETCH_A_DROP_ASSET = gql`
  query FetchADropAsset($assetId: String!){
    asset(assetId: $assetId) {
      id,
      label,
      dropDate,
      tradingWindowStartTime,
      type,
      status,
      heroColour,
      heroImage,
      pricePerShare,
      isHidden,
      isDemo,
      isDirectLinkOnly,
      order,
      averageMarketPrice,
      pricePerformancePercentage,
      isKycOnly,
      availableOffers,
      images {
        placeholder,
        thumbnail,
        thumbnailAlt,
        thumbnailFlatten,
        medium,
        mediumAlt,
        mediumFlatten,
      },
    }
  }
`;

