import { faker } from '@faker-js/faker';

const generateUser = () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  revenue: faker.number.int({ min: 100, max: 9000000 }),
  subs: faker.number.int({ min: 100, max: 90000 }),
  idea: faker.lorem.paragraph(),
});

const leaderboard = Array.from({ length: 6 }, () => generateUser());

export default leaderboard;
