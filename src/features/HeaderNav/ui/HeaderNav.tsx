import { Anchor, List } from "@mantine/core";
import { Link } from "react-router";
import styles from "./styles.module.css";

export const HeaderNav = () => {
  return (
    <nav>
      <List listStyleType="none" className={styles.list}>
        <List.Item mr={10}>
          <Anchor component={Link} to="/root" underline="hover">
            Main
          </Anchor>
        </List.Item>
        <List.Item>
          <Anchor component={Link} to="/root/people" underline="hover">
            People
          </Anchor>
        </List.Item>
      </List>
    </nav>
  );
};
