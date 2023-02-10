import { HBox } from "@/component/HBox";
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
      <HBox>
        <Typography variant="body1" fontWeight={600} color="black">
          {title}
        </Typography>
      </HBox>
      <HBox
        sx={{
          gap: "5px",
          overflowY: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
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
      </HBox>
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
        whiteSpace: "nowrap",
        "@media (hover: hover) and (pointer: fine) ": {
          "&:hover": {
            backgroundColor: colors.primary.lightest,
            border: `1px solid ${colors.primary.lightest}`,
            color: colors.black,
            cursor: "pointer",
          },
        },
      }}
    >
      {value}
    </CustomButton>
  );
};

const CustomButton = styled("button")(({ theme }) => ({
  padding: "7px 15px",
  borderRadius: "20px",
  border: `1px solid ${colors.primary.lightest}`,
}));
