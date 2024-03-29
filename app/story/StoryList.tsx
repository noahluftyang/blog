import { Anchor } from "@app/components/Anchor";
import { Date } from "@app/components/Date";
import { Text, VStack } from "@stillmine/react-components";

interface Props {
  stories: any;
}

export function StoryList({ stories }: Props) {
  if (stories.length === 0) {
    return <p>게시글이 없습니다.</p>;
  }

  return (
    <VStack
      align="stretch"
      as="ul"
      css={{
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
      spacing="32px"
    >
      {stories.map(({ excerpt, publishedAt, slug, title }) => {
        return (
          <VStack align="stretch" as="li" key={slug} spacing={4}>
            <Anchor href={`/story/${slug}`}>
              <Text fontSize="3xl">{title}</Text>
              <Date isoDate={publishedAt as string} />
              {excerpt}
            </Anchor>
          </VStack>
        );
      })}
    </VStack>
  );
}
