import { View } from "react-native";
import { globalStyles } from "../../../config/theme/theme"
import { ScrollView } from "react-native-gesture-handler"
import { Title } from "../../components/ui/Title"
import { animationMenuItems, menuItems, uiMenuItems } from "../../navigator/MenuItems"
import { MenuItem } from "../../components/ui/MenuItem"

export const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text='Opciones del menú'/>
          {
            animationMenuItems.map((item,index)=>(<MenuItem isFirst={index === 0} isLast={index === (animationMenuItems.length - 1)} key={item.component} {...item}/>))
          }
            <View style={{marginTop: 30}}/>
          {
            uiMenuItems.map((item, index)=>(<MenuItem isFirst={index === 0} isLast={index === (uiMenuItems.length - 1)} key={item.component} {...item}/>))
          }
            <View style={{marginTop: 30}}/>
          {
            menuItems.map((item, index)=>(<MenuItem isFirst={index === 0} isLast={index === (menuItems.length - 1)} key={item.component} {...item}/>))
          }

        </ScrollView>
      </View>
    </View>
  )
}