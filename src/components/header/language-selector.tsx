import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const LanguageSelector = () => {
  return (
    <FormControl className="w-32">
      <InputLabel>Linguagem</InputLabel>
      <Select label="PT(BR)">
        <MenuItem value={10}>PT(BR)</MenuItem>
        <MenuItem value={20}>EN</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
