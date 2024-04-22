export default function createIteratorObject(report) {
  function* iterateEmployees() {
    for (const department in report.allEmployees) {
      if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
        const employees = report.allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    }
  }

  return {
    [Symbol.iterator]: iterateEmployees,
  };
}
