import prompt from 'react-native-prompt-android';

interface PromptOptions {
  title: string;
  subTitle?: string;
  buttons: PromptButton[];
  type?: 'default' | 'plain-text' | 'secure-text',
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButton {
  text: string;
  onPress: () => void;
  style?: "cancel" | "default" | "destructive";
}

export const showPrompt = ({title,subTitle,buttons,type,placeholder,defaultValue}: PromptOptions) => {
  prompt(
    title,
    subTitle,
    buttons,
    {
      type,
      cancelable: false,
      defaultValue,
      placeholder,
    },
  );
};