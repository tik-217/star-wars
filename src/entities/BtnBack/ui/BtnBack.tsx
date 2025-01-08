import { useNavigate } from "react-router";
import { Button, rem } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";

export const BtnBack = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(-1);
      }}
      leftSection={
        <IconArrowBack style={{ width: rem(16), height: rem(16) }} />
      }
    >
      Back
    </Button>
  );
};
