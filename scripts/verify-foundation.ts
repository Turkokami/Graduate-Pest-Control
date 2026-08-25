import { buildGraph } from '../src/lib/schema';
import { markets, matrixRoutes, coverageReport, effectiveCluster } from '../src/data/markets';
import { pendingReport } from '../src/data/business';

const g = buildGraph({
  path: '/locations/huntington/',
  title: 'Huntington Pest Control | Graduate Pest Control',
  description: 'Structural pest control in Huntington, NY from a second-generation building-science operator.',
  quickAnswer: 'Graduate Pest Control treats pest problems in Huntington as building problems.',
  pageType: 'city',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/locations/' },
    { name: 'Long Island', path: '/locations/long-island/' },
    { name: 'Huntington', path: '/locations/huntington/' },
  ],
  faqs: [{ question: 'Do you serve Huntington Bay?', answer: 'Yes.' }],
  serviceName: 'Pest Control',
  areaServed: ['Huntington, NY'],
});

const types = g['@graph'].map((n: any) => Array.isArray(n['@type']) ? n['@type'].join('+') : n['@type']);
console.log('NODES:', types.join(' | '));
console.log('aggregateRating emitted?', JSON.stringify(g).includes('aggregateRating'));
console.log('Review emitted?', JSON.stringify(g).includes('"Review"'));
console.log('speakable?', JSON.stringify(g).includes('SpeakableSpecification'));
console.log('COVERAGE:', JSON.stringify(coverageReport()));
console.log('markets:', markets.length, '| buildable matrix routes now:', matrixRoutes().length);
console.log('effectiveCluster(huntington):', effectiveCluster(markets[0]));
console.log('PENDING:'); pendingReport().forEach(p => console.log('  -', p));
