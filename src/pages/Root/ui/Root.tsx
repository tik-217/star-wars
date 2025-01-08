import { MainTitle } from "@/entities/MainTitle";
import { StarWarsEntities } from "@/entities/StarWarsEntities";
import { Container, Flex, List, ListItem } from "@mantine/core";
import PeopleCardImg from "@/shared/img/people-card-bg.webp";
import { BtnBack } from "@/entities/BtnBack";

export const Root = () => {
  return (
    <Container mb={100} maw={"90%"}>
      <BtnBack />
      <Flex align={"center"} justify={"flex-start"} direction={"column"}>
        <Container mb={20}>
          <MainTitle subtitle="Heroes and Words" />
        </Container>
        <List listStyleType="none">
          <ListItem mb={30}>
            <StarWarsEntities
              btnLink={"people"}
              btnText={"Go to heroes"}
              title={"Find your hero"}
              tag={"people"}
              bgImage={PeopleCardImg}
            />
          </ListItem>
        </List>
      </Flex>
    </Container>
  );
};
