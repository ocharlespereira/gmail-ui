import { View, Text } from 'react-native';

import { Input } from '@/components/input';

export const Home = () => {
  return (
    <View className="flex-1 bg-gray-900 pt-16 p-4 ">
      <Input placeholder="Pesquisar no e-mail" />
    </View>
  );
};

export default Home;
