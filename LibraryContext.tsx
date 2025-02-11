import React, { createContext, useState, ReactNode } from "react";
import { LibraryContextType } from "../types"; // Import interface
import { Book } from "../Models/Book";
import { Gender } from "../Models/Gender";
import { Library } from "../Models/Library";

// Create context with default value as undefined
export const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

// Define the provider component
export const LibraryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>(new Library().getBooks());

  const addBookToLibrary = (title: string, author: string, gender: string, displayed: boolean) => {
    const newBook = new Book(title, author, gender, displayed);
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const getBooksFor = (author: string): Book[] => {
    return books.filter((book) => book.author === author);
  };

  const getMaleAuthoredBooks = (): Book[] => {
    return books.filter((book) => book.gender === Gender.MALE);
  };

  const getFemaleAuthoredBooks = (): Book[] => {
    return books.filter((book) => book.gender === Gender.FEMALE);
  };

  return (
    <LibraryContext.Provider
      value={{
        books,
        setBooks,
        addBookToLibrary,
        getBooksFor,
        getMaleAuthoredBooks,
        getFemaleAuthoredBooks,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
