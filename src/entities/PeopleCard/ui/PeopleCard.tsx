import { People } from "@/shared/api/people/types";
import { Anchor, Card, Grid, Group, Text } from "@mantine/core";
import styles from "./styles.module.css";
import { Link } from "react-router";

export const PeopleCard = ({ hero }: { hero: People }) => {
  const heroId = hero.url.split("/").at(-2);

  return (
    <Grid.Col span={1}>
      <Card withBorder padding="lg" className={styles.card}>
        <Group justify="space-between">
          <Anchor to={`${heroId ? heroId : "0"}`} component={Link}>
            <Text fz="sm" fw={700} className={styles.title} c="blue">
              {hero.name}
            </Text>
          </Anchor>
          <Text fz="xs" c="dimmed">
            Gender: {hero.gender}
          </Text>
        </Group>
        <Text mt="sm" mb="md" c="dimmed" fz="xs">
          Skin Color: {hero.skin_color}
        </Text>
        <Card.Section className={styles.footer}>
          <div>
            <Text size="xs" color="dimmed">
              Birth Year:
            </Text>
            <Text fw={500} size="sm">
              {hero.birth_year}
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
              Height:
            </Text>
            <Text fw={500} size="sm">
              {hero.height}
            </Text>
          </div>
          <div>
            <Text size="xs" color="dimmed">
              Weight:
            </Text>
            <Text fw={500} size="sm">
              {hero.mass}
            </Text>
          </div>
        </Card.Section>
      </Card>
    </Grid.Col>
  );
};
