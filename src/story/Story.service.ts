import { fetchQuery } from '@app/relay/fetchQuery';
import { graphql } from 'react-relay';

import { StoryQuery } from './__generated__/StoryQuery.graphql';

const query = graphql`
  query StoryQuery($slug: String!) {
    story(where: { slug: $slug }) {
      title
      slug
      publishedAt
      coverImage {
        url
      }
      category {
        name
      }
      content
      seo {
        image {
          url
        }
      }
    }
  }
`;

export async function getStoryAndAdjacentStories(slug: string) {
  const response = await fetchQuery<StoryQuery>(query, { slug });

  if (response == null) {
    throw new Error('스토리를 가져올 수 없습니다.');
  }

  return {
    story: response.story,
    moreStories: [],
  };
}