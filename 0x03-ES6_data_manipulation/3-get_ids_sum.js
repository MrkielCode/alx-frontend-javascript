export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((accumalated, student) => accumalated + student.id, 0);
}
