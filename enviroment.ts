// @ts-ignore
import _env from './env.json';

export interface IEnv {
  API_URL: string;
}

const getENV = (): IEnv => ({..._env});

export default getENV;
