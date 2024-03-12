export default function (students, city, newGrade) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const matchGrade = newGrade.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: matchGrade ? matchGrade.grade : 'N/A',
      };
    });
}
