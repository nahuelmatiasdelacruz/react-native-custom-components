import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler"
import { Title } from "../../components/ui/Title"
import { animationMenuItems, menuItems, uiMenuItems } from "../../navigator/MenuItems"
import { MenuItem } from "../../components/ui/MenuItem"
import { CustomView } from "../../components/ui/CustomView";

export const HomeScreen = () => {
  return (
    <CustomView margin>
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
    </CustomView>
  )
}