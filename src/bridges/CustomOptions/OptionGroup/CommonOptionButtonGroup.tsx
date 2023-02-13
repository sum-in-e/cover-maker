import { VBox } from "@/component/VBox";
import { colors } from "@/styles/colors";
import { styled, Typography } from "@mui/material";

interface OptionButtonGroupProps {
  title: string;
  options: OptionButtonProps[];
}

const OptionButtonGroup = ({ title, options }: OptionButtonGroupProps) => {
  return (
    <VBox sx={{ gap: "3px" }}>
      <Typography variant="body1" fontWeight={600} color="black">
        {title}
      </Typography>
      <Grid
        sx={{
          gap: "5px",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {options.map((item, index) => (
          <Button
            key={`${title}_${index}`}
            value={item.value}
            onClick={item.onClick}
            isSelected={item.isSelected}
          />
        ))}
      </Grid>
    </VBox>
  );
};

export default OptionButtonGroup;

export interface OptionButtonProps {
  value: string;
  onClick: () => void;
  isSelected: boolean;
}

const Button = ({ value, onClick, isSelected }: OptionButtonProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <CustomButton
      value={value}
      onClick={handleClick}
      sx={{
        backgroundColor: isSelected ? colors.primary.main : colors.white,
        border: `1px solid ${
          isSelected ? colors.primary.main : colors.primary.lightest
        }`,
        color: isSelected ? colors.white : colors.black,
      }}
    >
      {value}
    </CustomButton>
  );
};

const CustomButton = styled("button")({
  padding: "8px 15px",
  borderRadius: "5px",
  fontSize: "15px",
  "&:hover": {
    backgroundColor: colors.primary.lightest,
    border: `1px solid ${colors.primary.lightest}`,
    color: colors.black,
    cursor: "pointer",
  },
});

const Grid = styled("div")({
  display: "grid",
});
