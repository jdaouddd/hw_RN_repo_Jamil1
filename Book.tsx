export class Book {
    id: string;
    title: string;
    author: string;
    gender: string;
    displayed: boolean;
  
    constructor(title: string, author: string, gender: string, displayed: boolean) {
      this.id = this.generateUUID();
      this.title = title;
      this.author = author;
      this.gender = gender;
      this.displayed = displayed;
    }
  
    generateUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    }
  
    static equals(book1: Book, book2: Book) {
      return book1.title === book2.title && book1.author === book2.author;
    }
  
    static compare(book1: Book, book2: Book) {
      return book1.title.localeCompare(book2.title);
    }
  }
  