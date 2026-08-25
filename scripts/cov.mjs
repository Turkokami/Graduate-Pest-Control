import { markets, effectiveCluster, matrixRoutes } from '../src/data/markets.ts';
const unres = markets.filter(m=>!m.research || !m.research.verified);
console.log('markets', markets.length, 'unresearched', unres.length);
console.log(unres.map(m=>`${m.slug} | ${m.region} | ${m.cluster}`).join('\n'));
console.log('matrix routes buildable', matrixRoutes().length);
