import { MainTitle } from "@/entities/MainTitle/ui/MainTitle";
import { HeaderNav } from "@/features/HeaderNav";
import { Center } from "@mantine/core";

export const Header = ({ subtitle }: { subtitle?: string }) => {
  return (
    <Center>
      <header>
        <MainTitle subtitle={subtitle} />
        <HeaderNav />
      </header>
    </Center>
  );
};
