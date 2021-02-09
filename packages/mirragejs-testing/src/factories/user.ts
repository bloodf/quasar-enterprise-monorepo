import { Factory } from 'miragejs';
import faker from 'faker';

export const userFactory = Factory.extend({
  address(): string {
    return faker.address.streetAddress(true);
  },
  avatar(): string {
    return faker.internet.avatar();
  },
  birthday(): string {
    return faker.date.past(Math.round(Math.random() * 10)).toISOString();
  },
  country(): string {
    return faker.address.country();
  },
  email(): string {
    return faker.internet.email();
  },
  mobilePhone(): string {
    return faker.phone.phoneNumber();
  },
  name(): string {
    const firstName:string = faker.name.firstName();
    const middleName: string = faker.name.middleName();
    const lastName: string = faker.name.lastName();

    return `${firstName} ${middleName} ${lastName}`;
  },
  phone(): string {
    return faker.phone.phoneNumber();
  },
  username(): string {
    return faker.internet.userName();
  },
});
