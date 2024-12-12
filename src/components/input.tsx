import { View, TextInput, TextInputProps } from 'react-native';

import { colors } from '@/styles/colors';

type InputProps = TextInputProps & {};

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <View className="text-white">
      <TextInput
        className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4"
        placeholderTextColor={colors.gray[400]}
        {...rest}
      />
    </View>
  );
};
