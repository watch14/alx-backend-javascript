interface DirectorInterface {
  workFromHome: string;
  getCoffeeBreak: string;
  workDirectorTasks: string;
}

interface TeacherInterface {
  workFromHome: string;
  getCoffeeBreak: string;
  workDirectorTasks: string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home'
  }
  getToWork() {
    return 'Getting a coffee break'
  }
  workDirectorTasks() {
    return 'Getting to director tasks'
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home'
  }
  getCoffeeBreak() {
    return 'Cannot have a break'
  }
  workTeacherTasks() {
    return 'Getting to work'
  }
}

export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher()
  }
  return new Director()
}
