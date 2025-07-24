function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Екатерина", "женский", 20);
let student2 = new Student("Александр", "мужской", 22);
let student3 = new Student("Иван", "мужской", 21);
let student4 = new Student("Мария", "женский", 22);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (Array.isArray(this.marks)) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (!Array.isArray(this.marks) || this.marks.length === 0) {
    return 0;
  }
  let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
