import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BottomBarIconProps } from "../types";

const BottomBarIcon: React.FC<BottomBarIconProps> = ({ iconName, size = 24, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <Icon name={iconName} size={size} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
  },
});

export default BottomBarIcon;
