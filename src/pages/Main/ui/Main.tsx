import { Header } from "@/widgets/Header";
import { Image } from "@mantine/core";
import MainImage from "@/shared/img/star-wars-logo.webp";

export const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <Image
          radius="md"
          src={MainImage}
          px={"20%"}
          mt={"40px"}
          alt="Star Wars"
        />
      </main>
    </div>
  );
};
