import { SectionList, Text, useWindowDimensions, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { Card } from "../../components/ui/Card";
import { houses } from '../../../infrastructure/db/houses';
import { SubTitle } from "../../components/ui/SubTitle";
import { Separator } from "../../components/ui/Separator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const CustomSectionListScreen = () => {
  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  return (
    <CustomView margin>
      <Title text='Lista de personajes'/>
      <Card>
        <SectionList
          sections={houses}
          keyExtractor={(item)=>item}
          renderItem={({item})=><Text style={{marginVertical: 2}}>{item}</Text>}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section})=><SubTitle text={section.title}/>}
          stickySectionHeadersEnabled
          SectionSeparatorComponent={Separator}
          ListHeaderComponent={() => <Title text='Personajes'/>}
          ListFooterComponent={() => <Title text={`Total: ${houses.length}`}/>}
          style={{
            height: height - top - 100
          }}
        />
      </Card>
    </CustomView>
  )
};