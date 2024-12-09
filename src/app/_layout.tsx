import '@/styles/global.css';

import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* catch all routes at 'tabs' and send for '_layout' to render */}
      <Slot />
    </GestureHandlerRootView>
  );
};

export default Layout;
