import axios from "axios";

import Faker from "faker";

export const getUsers = () => {
  let fakeUsers = [];

  for (let i = 0; i < 50; i++) {
    fakeUsers.push({
      name: Faker.name.firstName(),
      email: Faker.internet.email(),
      createDate: Faker.date.past(),
      changeDate: Faker.date.recent(),
      status: Faker.random.boolean(),
      rules: `0${Faker.random.number({
        min: 1,
        max: 2
      })}`
    });
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fakeUsers);
    }, 1000);
  });

  //   return axios.get('http://api.com.br/users').then(r => r.data);
};
