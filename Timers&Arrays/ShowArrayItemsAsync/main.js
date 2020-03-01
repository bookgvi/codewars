import { iterate } from './iterate.js';
import { utils } from './utils.js';

iterate(utils.arr, utils.handler.bind(utils), utils.cb.bind(utils));
