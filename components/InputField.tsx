import React, { useState } from "react";
import { InputFieldProps } from "@/types/type";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  iconStyle,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  placeholderTextColor = "#A9A9A9",
  className,
  ...props
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      <View className="my-2 w-full">
        <Text className={`text-lg font-JakartaSemiBold mb-4 ${labelStyle}`}>
          {label}
        </Text>
        <View
          className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border ${
            isFocused ? "border-primary-500" : "border-neutral-100"
          } ${containerStyle}`}
        >
          {icon && (
            <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
          )}
          <TextInput
            className={` p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
            secureTextEntry={secureTextEntry}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor={placeholderTextColor}
            {...props}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </TouchableWithoutFeedback>
  );
};

export default InputField;
