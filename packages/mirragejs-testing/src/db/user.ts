import { Model } from 'miragejs';
import { UserApiData } from 'src/interfaces/user';

export const userModel = Model.extend<Partial<UserApiData>>({});
