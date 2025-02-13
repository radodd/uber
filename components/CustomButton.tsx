import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

// const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
//   switch (variant) {
//     case "secondary":
//       return "bg-gray-500";
//     case "danger":
//       return "bg-red-500";
//     case "success":
//       return "bg-green-500";
//     case "outline":
//       return "bg-transparent border-neutral-300 border-[0.5px] ";
//     default:
//       return "bg-[#0286FF]";
//   }
// };
// const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
//   switch (variant) {
//     // case "primary":
//     //   return "text-black";
//     case "secondary":
//       return "text-gray-100 ";
//     case "danger":
//       return "text-red-500";
//     case "success":
//       return "text-green-500";
//     default:
//       return "text-white";
//   }
// };

const bgVariantStyles = {
  primary: "bg-[#0286FF]",
  secondary: "bg-gray-500",
  danger: "bg-red-500",
  success: "bg-green-500",
  outline: "bg-transparent border-neutral-300 border-[0.5px]",
};

const textVariantStyles = {
  primary: "text-black",
  default: "text-white",
  secondary: "text-gray-100",
  danger: "text-red-500",
  success: "text-green-500",
};
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className={`rounded-full p-4 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${bgVariantStyles[bgVariant]}            ${className}`}
    {...props}
  >
    {IconLeft && <IconLeft />}
    <Text className={`text-lg font-bold ${textVariantStyles[textVariant]}`}>
      {title}
    </Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
);

export default CustomButton;
