import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Repository } from "../types";
import Icon from "react-native-vector-icons/Ionicons";

interface RepositoryItemProps {
  repo: Repository;
  onPress: () => void;
}

const RepoItem: React.FC<RepositoryItemProps> = ({ repo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.repoContainer}>
      <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
      <View>
        <Text>{repo.name}</Text>
        <Text>{repo.description || "No description available"}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  repoContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default RepoItem;
