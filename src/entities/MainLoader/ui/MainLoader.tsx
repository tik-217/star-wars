import { Flex, Loader } from "@mantine/core";

export const MainLoader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    isLoading && (
      <Flex justify={"center"} my={40}>
        <Loader />
      </Flex>
    )
  );
};
