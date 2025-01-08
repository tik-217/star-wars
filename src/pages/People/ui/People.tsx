import { Container } from "@mantine/core";
import { Header } from "@/widgets/Header";
import { PeopleList } from "@/widgets/PeopleList";
import { BtnBack } from "@/entities/BtnBack";

export const People = () => {
  return (
    <Container mb={100} maw={"90%"}>
      <BtnBack />
      <Header subtitle="People" />
      <PeopleList />
    </Container>
  );
};
