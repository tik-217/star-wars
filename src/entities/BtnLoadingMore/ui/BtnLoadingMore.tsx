import { BtnLoadingMoreProps } from "@/entities/BtnLoadingMore/model/types";
import { Button } from "@mantine/core";

export const BtnLoadingMore = ({
  loading,
  fetchNextPage,
  disabled,
}: BtnLoadingMoreProps) => {
  return (
    <Button
      children={"Загрузить еще"}
      loading={loading}
      onClick={() => fetchNextPage()}
      disabled={disabled}
    />
  );
};
