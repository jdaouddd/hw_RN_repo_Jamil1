import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { RepoContextType, Repository } from '../types';


const RepoContext = createContext<RepoContextType | undefined>(undefined);

const RepoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  // Fetch repositories from GitHub API
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const { data } = await axios.get(
          'https://api.github.com/search/repositories?q=language:swift&sort=stars&order=desc'
        );
        setRepositories(data.items);
      } catch (error) {
        console.error('Error fetching repositories', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <RepoContext.Provider value={{ repositories, searchText, setSearchText }}>
      {children}
    </RepoContext.Provider>
  );
};

export { RepoProvider, RepoContext};