//Object
function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
  }

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
    if (marksToAdd.length !== 0 && this.hasOwnProperty('marks')) {
      this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function() {
    if (!this.hasOwnProperty('marks') ||  this.marks.length === 0) {
      return 0;
    }
    return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
