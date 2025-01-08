import { getPeople } from "@/shared/api/people/getPeople";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetPeople = () => {
  const {
    data: heroesData,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["people"],
    queryFn: getPeople,
    initialPageParam: "https://swapi.py4e.com/api/people/?page=1",
    getNextPageParam: (lastPage) => lastPage?.next,
  });

  return {
    data: heroesData,
    isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
