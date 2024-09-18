import { Modal, Platform, View } from "react-native"
import { CustomView } from "../../components/ui/CustomView"
import { Title } from "../../components/ui/Title"
import { Button } from "../../components/ui/Button"
import { useState } from "react"

export const ModalScreen = () => {
  const [visible,setVisible] = useState<boolean>(false);
  return (
    <CustomView margin>
      <Title text='Modal' safe/>
      <Button text='Abrir modal' onPress={()=>setVisible(true)}/>
      <Modal
        visible={visible}
        animationType="slide"
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.1)'
        }}>
          <View style={{
            paddingHorizontal: 10
          }}>
            <Title text='Contenido del modal' safe/>
          </View>
          <View style={{flex: 1}}></View>
          <Button text='Cerrar modal' onPress={()=>setVisible(false)} styles={{
            height: Platform.OS === 'android' ? 40 : 60,
            borderRadius: 0,
          }}/>
        </View>
      </Modal>
    </CustomView>
  )
}