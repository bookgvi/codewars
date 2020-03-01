import { iterate } from './iterate.js';
import { utils, UtilsLiteral } from './utils.js';

iterate(utils.arr, utils.handler.bind(utils), utils.cb.bind(utils));
iterate(UtilsLiteral.arr, UtilsLiteral.handler.bind(UtilsLiteral), UtilsLiteral.cb.bind(UtilsLiteral));
