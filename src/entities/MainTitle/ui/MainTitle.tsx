import { Anchor, Flex, Title } from "@mantine/core";
import { Link } from "react-router";

export const MainTitle = ({ subtitle }: { subtitle?: string }) => {
  return (
    <Flex direction={"column"} align={"center"} mb={20}>
      <Anchor
        component={Link}
        to={"/"}
        underline="never"
        c={"var(--mantine-color-dark-0)"}
      >
        <Title order={1} mt={30} m={20}>
          Star Wars
        </Title>
      </Anchor>
      {subtitle && <Title order={2}>{subtitle}</Title>}
    </Flex>
  );
};
