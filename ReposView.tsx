import React, { useContext } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RepoContext } from "../Controllers/RepoContext"; 
import { RootStackParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack"; 
import RepoItem from "./RepoItem";

type NavigationProp = StackNavigationProp<RootStackParamList, "ReposView">; 

const ReposView: React.FC = () => {
  const repoContext = useContext(RepoContext); 
  
  if (!repoContext) {
    return <Text>Loading...</Text>; 
  }

  const { repositories, searchText, setSearchText } = repoContext; 
  const navigation = useNavigation<NavigationProp>(); 

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search repositories..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredRepos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RepoItem
            repo={item}
            onPress={() => navigation.navigate("RepoDetails", { repository: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ReposView;

  
