// Задача 1.
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "novel";
  }
}
new NovelBook("Меч Предназначения", 1992, 384, "А. Сапковский");

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "fantastic";
  }
}
new FantasticBook("Властелин колец", 1954, 1000, "Джон Толкин");

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "detective";
  }
}
new DetectiveBook("Убийство в Восточном экспрессе", 1934, 256, "Агата Кристи");

// Задача 2.
class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
    if (book) {
      this.books = this.books.filter((b) => b !== book);
      return book;
    }
  }
}
const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);

library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name); 

console.log("Количество книг до выдачи: " + library.books.length); 
let issuedBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); 

issuedBook.state = 10;
issuedBook.fix();
console.log("Состояние восстановленной книги: " + issuedBook.state);

library.addBook(issuedBook);

// Задача 3.
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    const subjectMarks = this.marks[subject];
    if (!subjectMarks || subjectMarks.length === 0) {
      return 0;
    }

    const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
    return sum / subjectMarks.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }

    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}
const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");

console.log(student.getAverageBySubject("физика"));
console.log(student.getAverageBySubject("биология"));
console.log(student.getAverage());
