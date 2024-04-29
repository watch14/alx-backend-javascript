export default function getStudentsByLocation(students, city) {
  return students.filter((studen) => studen.location === city);
}
