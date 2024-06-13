import Select, {
  components,
  SingleValueProps,
  OptionProps,
  StylesConfig,
} from "react-select";
import ReactCountryFlag from "react-country-flag";
import { CSSProperties } from "react";
import React from "react";

interface OptionType {
  value: string;
  label: string;
  countryCode: string;
}

const options: OptionType[] = [
  { value: "pt", label: "PT (BR)", countryCode: "BR" },
  { value: "en", label: "EN", countryCode: "US" },
];

const customSingleValue = ({ data }: SingleValueProps<OptionType>) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
    <ReactCountryFlag
      countryCode={data.countryCode}
      svg
      style={
        {
          width: "1.5em",
          height: "1.5em",
          borderRadius: "30%",
        } as CSSProperties
      }
    />
    <span
      style={{
        marginLeft: 8,
      }}
    >
      {data.label}
    </span>
  </div>
);

const customOption = (props: OptionProps<OptionType, false>) => {
  return (
    <components.Option {...props}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactCountryFlag
          countryCode={props.data.countryCode}
          svg
          style={{ width: "1.2em", height: "1.5em" } as CSSProperties}
        />
        <span style={{ marginLeft: 8 }}>{props.data.label}</span>
      </div>
    </components.Option>
  );
};

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    minHeight: "auto",
    height: "auto",
    display: "flex",
    alignItems: "center",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 8px",
    display: "flex",
    alignItems: "center",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "auto",
    display: "flex",
    alignItems: "center",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: 0,
    display: "flex",
    alignItems: "center",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
  }),
};

const LanguageSelector = () => {
  return (
    <Select<OptionType, false>
      options={options}
      defaultValue={options[0]}
      components={{ SingleValue: customSingleValue, Option: customOption }}
      styles={customStyles}
      className="w-32"
    />
  );
};

export default LanguageSelector;
