import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  FluentProvider,
  webLightTheme,
  Button,
} from "@fluentui/react-components";
import { Multiselect } from "../Multiselect";
import {
  Combobox,
  ComboboxProps,
  makeStyles,
  useComboboxFilter,
  useId,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: "grid",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "start",
    gap: "2px",
    maxWidth: "400px",
  },
});
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const options = [
  { children: "Alligator", value: "ec5a9b9e-af83-4bf2-be3d-860583a031cb" },
  { children: "Bee", value: "f2245404-59a7-44e7-842b-df63d6b4741b" },
  { children: "Bird", value: "0b9c4ffd-b894-4c89-bb81-ef8c0e0bf6d4" },
  {
    children: "Cheetah",
    disabled: true,
    value: "ed16f197-94e9-47f1-adcb-cf182dc4a171",
  },
  { children: "Dog", value: "09acb1ce-967e-4fb2-b68e-e17b4e15082e" },
  { children: "Dolphin", value: "3c40f518-df7d-403d-a8c7-ac8f610b66ca" },
  { children: "Ferret", value: "378c8661-d86b-4518-8adb-64009625c35b" },
  { children: "Firefly", value: "5d5edfa2-f9ba-4044-a142-33d957cd6d7d" },
  { children: "Fish", value: "e2b16f19-5934-4e4d-9b6b-bc5235750829" },
  { children: "Goat", value: "2314defd-49ec-4576-aed3-4e639ba65e08" },
  { children: "Horse", value: "bea41f2a-127c-4519-9366-01e2d2ae4f8a" },
  { children: "Lion", value: "b7e394bf-1066-49c0-bf17-ba0deb287dea" },
];

const IndexPage: React.FC<PageProps> = () => {
  const comboId = useId();
  const styles = useStyles();
  const [query, setQuery] = React.useState<string>("");
  const onOptionSelect: ComboboxProps["onOptionSelect"] = (e, data) => {
    setQuery(data.optionText ?? "");
  };
  function optionToText(
    option: string | { children: React.ReactNode; value: string },
  ) {
    if (typeof option === "string") {
      return option;
    }
    if (Array.isArray(option.children)) {
      return option.children
        .map((optionElement) => optionElement.toString())
        .toString();
    }
    if (option.children) {
      return option.children.toString();
    }
    return "";
  }
  const children = useComboboxFilter(query, options, {
    noOptionsMessage: "No animals match your search.",
    optionToText,
  });

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>React Fluent 9</h1>
      <FluentProvider theme={webLightTheme}>
        <Combobox
          onOptionSelect={onOptionSelect}
          aria-labelledby={comboId}
          placeholder="Select an animal"
          onChange={(ev) => setQuery(ev.target.value)}
          value={query}
        >
          {children}
        </Combobox>
      </FluentProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
