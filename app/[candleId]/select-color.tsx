import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import * as React from "react";

interface ColorsSelectPlaceholderProps {
  colors: string[];
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
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

function getStyles(name: string, selectedColor: string, theme: Theme) {
  return {
    fontWeight:
      name === selectedColor
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

const ColorsSelectPlaceholder: React.FC<ColorsSelectPlaceholderProps> = ({
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSelectedColor(value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <Select
        displayEmpty
        value={selectedColor}
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
        {colors.map((color) => (
          <MenuItem
            key={color}
            value={color}
            style={getStyles(color, selectedColor, theme)}
          >
            {color}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ColorsSelectPlaceholder;
