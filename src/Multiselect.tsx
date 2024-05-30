import {
  Dropdown,
  makeStyles,
  Option,
  shorthands,
  useId,
  DropdownProps,
  Button
} from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    ...shorthands.gap("2px")
  },
  button: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "block",
    width: "200px",
    ...shorthands.overflow("hidden")
  }
});

export const Multiselect = (props: Partial<DropdownProps>) => {
  const comboId = useId("combo-multi");
  const options = [
    "Cat",
    "Dog",
    "Ferret",
    "Fish",
    "Hamster",
    "Snake",
    "Pig",
    "Horse"
  ];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <label id={comboId}>Unexpected behavior:</label>
      <Dropdown
        aria-labelledby={comboId}
        multiselect={true}
        {...props}
        button={{ className: styles.button }}
      >
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Dropdown>
      <label>Expected behavior: (text truncated)</label>
      <Button className={styles.button}>
        Long text wraps after it hits the max width of the component
      </Button>
    </div>
  );
};
