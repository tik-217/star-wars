import { Link } from "react-router";
import { BackgroundImage, Button, Paper, Text, Title } from "@mantine/core";
import { StarWarsEntitiesProps } from "@/entities/StarWarsEntities/model/types";
import styles from "./styles.module.css";

export const StarWarsEntities = ({
  btnLink,
  btnText,
  title,
  tag,
  bgImage,
}: StarWarsEntitiesProps) => {
  return (
    <BackgroundImage src={bgImage} radius={"md"}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        className={styles.card}
        color="none"
      >
        <div>
          <Text className={styles.category} size="xs">
            {tag}
          </Text>
          <Title order={3} className={styles.title}>
            {title}
          </Title>
        </div>
        <Link to={btnLink}>
          <Button variant="white" color="dark">
            {btnText}
          </Button>
        </Link>
      </Paper>
    </BackgroundImage>
  );
};
