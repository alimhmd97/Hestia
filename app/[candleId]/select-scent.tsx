import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

interface SingleSelectPlaceholderProps {
  scents: string[];
  selectedScent: string;
  setSelectedScent: React.Dispatch<React.SetStateAction<string>>;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SingleSelectPlaceholder: React.FC<SingleSelectPlaceholderProps> = ({
  scents,
  selectedScent,
  setSelectedScent,
}) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSelectedScent(value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <Select
        displayEmpty
        value={selectedScent}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (!selected) {
            return <em>Placeholder</em>;
          }
          return selected;
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em>Placeholder</em>
        </MenuItem>
        {scents.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelectPlaceholder;
