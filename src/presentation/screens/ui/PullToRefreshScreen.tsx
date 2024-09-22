import { Title } from '../../components/ui/Title';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {top} = useSafeAreaInsets();
  const { colors } = useContext(ThemeContext);
  const onRefresh = async () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
      refreshControl={
        <RefreshControl
          colors={[colors.primary, 'red', 'orange', 'green']}
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
        />
      }>
      <Title text="Pull to refresh" safe />
    </ScrollView>
  );
};
