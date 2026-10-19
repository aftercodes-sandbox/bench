// r202610192319 · S8 report
import { parseLedger } from './s8-ledger.js';
export const report = (s) => parseLedger(s).length;
