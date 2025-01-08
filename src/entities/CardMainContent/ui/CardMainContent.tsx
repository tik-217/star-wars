import { Badge, Card, Group, Image, Text } from "@mantine/core";
import PeopleDetails from "@/shared/img/people-details.webp";
import styles from "./styles.module.css";
import { People } from "@/shared/api/people/types";

export const CardMainContent = ({ heroData }: { heroData: People }) => {
  return (
    <Card
      maw={400}
      withBorder
      padding="lg"
      radius="md"
      className={styles.card}
      my={40}
    >
      <Card.Section mb="sm">
        <Image src={PeopleDetails} height={180} alt="Star Wars" />
      </Card.Section>

      <Badge w="fit-content" variant="light">
        people
      </Badge>

      <Text fw={700} className={styles.title} mt="xs">
        {heroData.name}
      </Text>

      <Card.Section className={styles.footer}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            Gender: {heroData.gender}
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
};
