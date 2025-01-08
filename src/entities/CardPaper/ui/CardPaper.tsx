import { Paper, ThemeIcon, Text } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import styles from "./styles.module.css";
import { People } from "@/shared/api/people/types";

export const CardPaper = ({ heroData }: { heroData: People }) => {
  return (
    <Paper withBorder radius="md" className={styles.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "pink", to: "orange" }}
      >
        <IconColorSwatch size={28} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md">
        About Hero
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        Hair Color: {heroData.hair_color}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        Eye Color: {heroData.eye_color}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        Mass: {heroData.mass}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        Skin Color: {heroData.skin_color}
      </Text>
      <Text size="sm" mt="sm" c="dimmed">
        Skin Color: {heroData.skin_color}
      </Text>
    </Paper>
  );
};
