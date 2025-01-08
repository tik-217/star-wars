import { BtnLoadingMore } from "@/entities/BtnLoadingMore";
import { Container, Flex } from "@mantine/core";
import { AllPeople } from "@/features/AllPeople";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import {
  isDisabled,
  isLoading,
  btnLoadingMore,
} from "@/shared/store/people/selectors";
import { setBtnLoadingMore } from "@/shared/store/people/reducer";

export const PeopleList = () => {
  const dispatch = useAppDispatch();
  const btnIsDisabled = useAppSelector(isDisabled);
  const btnIsLoading = useAppSelector(isLoading);
  const btnIsLoadingMore = useAppSelector(btnLoadingMore);

  function callNextPage() {
    dispatch(setBtnLoadingMore(!btnIsLoadingMore));
  }

  return (
    <>
      <Container mt={40} mb={20}>
        <AllPeople />
      </Container>
      <Flex w={"100%"} justify={"center"}>
        <BtnLoadingMore
          loading={btnIsLoading}
          fetchNextPage={callNextPage}
          disabled={btnIsDisabled}
        />
      </Flex>
    </>
  );
};
