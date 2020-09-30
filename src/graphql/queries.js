/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      start
      end
      description
      tags
      location {
        lat
        lon
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        start
        end
        description
        tags
        location {
          lat
          lon
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const eventsByStartDate = /* GraphQL */ `
  query EventsByStartDate(
    $start: AWSDateTime
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByStartDate(
      start: $start
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        start
        end
        description
        tags
        location {
          lat
          lon
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
