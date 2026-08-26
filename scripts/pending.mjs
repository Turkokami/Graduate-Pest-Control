import { pendingReport, affiliations, business, speaking } from '../src/data/business.ts';
try { for (const l of pendingReport()) console.log(' -', l); } catch(e) { console.log('err', e.message); }
