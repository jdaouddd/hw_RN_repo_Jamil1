import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RepositoryDetailsScreenProps } from "../types";

const RepoDetailsView: React.FC<RepositoryDetailsScreenProps> = ({ route }) => {
  const { repository } = route.params;
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: repository.owner.avatar_url }} 
        style={styles.avatarLarge} 
      />
      <Text style={styles.repoName}>{repository.name}</Text>
      <Text style={styles.repoDescription}>
        {repository.description || "No description available"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  avatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  repoName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  repoDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default RepoDetailsView;

