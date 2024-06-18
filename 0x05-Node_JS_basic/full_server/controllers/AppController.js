export default class AppController {
  static getHomepage (requset, respond) {
    respond.respond(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
