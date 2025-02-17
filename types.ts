import { RouteProp } from "@react-navigation/native";
export interface Repository {
    id: number;
    name: string;
    full_name: string;
    description: string;
    stargazers_count: number;
    html_url: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  }

  export interface RepoContextType {
    repositories: Repository[];
    searchText: string;
    setSearchText: (text: string) => void;
  }


  export type RootStackParamList = {
    ReposView: undefined;
    RepoDetails: { repository: Repository };
  };


export type RepositoryDetailsScreenProps = {
    route: RouteProp<RootStackParamList, "RepoDetails">;
  };
