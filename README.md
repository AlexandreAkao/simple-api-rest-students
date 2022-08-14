
# Contact Book

A basic project, using Express and Sequelize. As part of [Luiz Otávio Miranda's course](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) project with some personal modifications, the API was developed using the following technologies

- Node.js
- Express
- Sequelize
- MariaDB

## Functionalities

- Encrypted password
- CRUD of Students
- CRUD of User
- Image upload
- Login with JWT

## How To Use

Install with npm or yarn

```bash
# Clone this repository
$ git clone https://github.com/AlexandreAkao/simple-api-rest-students.git

# Go into the repository
$ cd simple-api-rest-students

# Create docker container
docker run --restart always -d --name bdmariadb1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=YOUR_PASSWORD mariadb
    
# Install dependencies
$ npm install

$ npm run dev
$ npm run start
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/AlexandreAkao/simple-api-rest-students/blob/main/LICENSE) for details.
