import { Container } from "@mantine/core";
import { CardPaper } from "@/entities/CardPaper";
import { CardMainContent } from "@/entities/CardMainContent";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getOneHero } from "@/shared/api/people/getOneHero";
import { BtnBack } from "@/entities/BtnBack";
import { MainLoader } from "@/entities/MainLoader";

export const DetailsCard = () => {
  const { id: heroId } = useParams();

  const {
    data: heroData,
    isLoading,
    isFetching,
    isLoadingError,
  } = useQuery({
    queryKey: ["heroData", heroId],
    queryFn: () => getOneHero(heroId ?? "1"),
    enabled: !!heroId,
  });

  return (
    <Container maw={400}>
      <Container>
        <BtnBack />
      </Container>
      <MainLoader isLoading={isLoading} />
      {!isFetching && heroData && (
        <>
          <CardMainContent heroData={heroData} />
          <CardPaper heroData={heroData} />
        </>
      )}
      {isLoadingError && <>Not Found</>}
    </Container>
  );
};
