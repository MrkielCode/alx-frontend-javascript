export default function getListStudentIds(studentArrays) {
  if (!Array.isArray(studentArrays)) {
    return [];
  }

  return studentArrays.map((student) => student.id);
}
