// r202610192141 · S8 report
import { parseLedger } from './s8-ledger.js';
export const report = (s) => parseLedger(s).length;
