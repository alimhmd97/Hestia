import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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
  // const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSelectedScent(value);
  };

  return (
    <FormControl sx={{ width: 300, mt: 1 }}>
      <Select
        displayEmpty
        value={selectedScent}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (!selected) {
            return <em>Choose Scent</em>;
          }
          return selected;
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em>Choose Scent</em>
        </MenuItem>
        {scents.map((name, i) => (
          <MenuItem key={i} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelectPlaceholder;
