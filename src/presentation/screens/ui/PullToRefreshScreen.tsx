import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {ScrollView} from 'react-native-gesture-handler';
import {RefreshControl} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useState} from 'react';
import {colors, globalStyles} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {top} = useSafeAreaInsets();

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
