export default function getStudentIdsSum(ids) {
  return ids.reduce((total, student) => total + student.id, 0);
}
