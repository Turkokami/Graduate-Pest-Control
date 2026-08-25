import { markets, effectiveCluster, matrixRoutes, coverageReport } from '../src/data/markets';
const c = coverageReport();
console.log('markets:', c.markets, '| researched+verified:', markets.filter(m=>m.research?.verified).length);
console.log('matrix intended:', c.matrixIntended, '| buildable now:', c.matrixBuildable);
console.log('\nUNLOCKED MARKETS:');
for (const m of markets.filter(m => effectiveCluster(m) !== 'area'))
  console.log('  ' + m.slug.padEnd(20) + effectiveCluster(m).padEnd(8) + m.services.length + ' services');
console.log('\nMATRIX ROUTES AVAILABLE:', matrixRoutes().length);
