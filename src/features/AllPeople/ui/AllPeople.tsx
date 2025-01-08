import { PeopleCard } from "@/entities/PeopleCard";
import { useGetPeople } from "@/features/AllPeople/model/useGetPeople";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setIsDisabled, setIsLoading } from "@/shared/store/people/reducer";
import { btnLoadingMore } from "@/shared/store/people/selectors";
import { Grid } from "@mantine/core";
import { useEffect, useLayoutEffect, useState } from "react";

export const AllPeople = () => {
  const dispatch = useAppDispatch();
  const btnIsLoadingMore = useAppSelector(btnLoadingMore);

  const [skipFirstRender, setSkipFirstRender] = useState(true);

  const {
    data: heroesData,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useGetPeople();

  const heroPages = heroesData && heroesData.pages;

  useEffect(() => {
    dispatch(setIsLoading(isFetching));
    // eslint-disable-next-line
  }, [isFetching]);

  useEffect(() => {
    dispatch(setIsDisabled(!hasNextPage));
    // eslint-disable-next-line
  }, [hasNextPage]);

  useLayoutEffect(() => {
    if (skipFirstRender) {
      setSkipFirstRender(false);
      return;
    }

    fetchNextPage();
    // eslint-disable-next-line
  }, [btnIsLoadingMore]);

  return (
    <Grid justify="stretch" gutter={"lg"} columns={3}>
      {heroPages?.map((heroData) => {
        return heroData?.results.map((hero) => (
          <PeopleCard hero={hero} key={hero.url + hero.height} />
        ));
      })}
    </Grid>
  );
};
