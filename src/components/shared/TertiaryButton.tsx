import { Pressable, Text } from "react-native";
import { globalStyles } from "../../theme/theme";

type Props = {
  onPress: () => void;
  label: string;
}

const TertiaryButton = ({ onPress, label }: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={[globalStyles.button, globalStyles.tertiaryButton]}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}

export default TertiaryButton;