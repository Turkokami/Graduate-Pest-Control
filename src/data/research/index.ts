/**
 * Research index — slug → MarketResearch.
 *
 * Kept separate from markets.ts so research can be filled market by market
 * without touching the routing/tiering data. markets.ts reads from here.
 */
import type { MarketResearch } from '../markets';

import { huntington } from './huntington';
import { greatNeck } from './great-neck';
import { manhasset } from './manhasset';
import { portWashington } from './port-washington';
import { gardenCity } from './garden-city';
import { upperEastSide } from './upper-east-side';
import { brooklynHeights } from './brooklyn-heights';
import { parkSlope } from './park-slope';
import { northport } from './northport';
import { coldSpringHarbor } from './cold-spring-harbor';
import { lloydHarbor } from './lloyd-harbor';
import { oysterBay } from './oyster-bay';
import { syosset } from './syosset';
import { tribeca } from './tribeca';
import { soho } from './soho';
import { greenwichVillage } from './greenwich-village';
import { williamsburg } from './williamsburg';
import { upperWestSide } from './upper-west-side';
import { commack } from './commack';
import { glenCove } from './glen-cove';
import { roslyn } from './roslyn';
import { locustValley } from './locust-valley';
import { halesite } from './halesite';
import { huntingtonStation } from './huntington-station';
import { dixHills } from './dix-hills';
import { melville } from './melville';
import { fortSalonga } from './fort-salonga';
import { smithtown } from './smithtown';
import { kingsPark } from './kings-park';

// Wave: the eleven Long Island single-cluster markets.
import { asharoken } from './asharoken';
import { brookville } from './brookville';
import { centerport } from './centerport';
import { eastNorthport } from './east-northport';
import { eatonsNeck } from './eatons-neck';
import { greenlawn } from './greenlawn';
import { kingsPoint } from './kings-point';
import { lattingtown } from './lattingtown';
import { oldWestbury } from './old-westbury';
import { sandsPoint } from './sands-point';
import { seaCliff } from './sea-cliff';

// Wave: the nine New York City single-cluster markets.
import { astoria } from './astoria';
import { whitestone } from './whitestone';
import { malba } from './malba';
import { cobbleHill } from './cobble-hill';
import { dumbo } from './dumbo';
import { flatironNomad } from './flatiron-nomad';
import { noho } from './noho';
import { centralParkSouth } from './central-park-south';
import { hudsonYards } from './hudson-yards';

export const research: Record<string, MarketResearch> = {
  huntington,
  'great-neck': greatNeck,
  manhasset,
  'port-washington': portWashington,
  'garden-city': gardenCity,
  'upper-east-side': upperEastSide,
  'brooklyn-heights': brooklynHeights,
  'park-slope': parkSlope,
  northport,
  'cold-spring-harbor': coldSpringHarbor,
  'lloyd-harbor': lloydHarbor,
  'oyster-bay': oysterBay,
  syosset,
  tribeca,
  soho,
  'greenwich-village': greenwichVillage,
  williamsburg,
  'upper-west-side': upperWestSide,
  commack,
  'glen-cove': glenCove,
  roslyn,
  'locust-valley': locustValley,
  halesite,
  'huntington-station': huntingtonStation,
  'dix-hills': dixHills,
  melville,
  'fort-salonga': fortSalonga,
  smithtown,
  'kings-park': kingsPark,
  asharoken,
  brookville,
  centerport,
  'east-northport': eastNorthport,
  'eatons-neck': eatonsNeck,
  greenlawn,
  'kings-point': kingsPoint,
  lattingtown,
  'old-westbury': oldWestbury,
  'sands-point': sandsPoint,
  'sea-cliff': seaCliff,
  astoria,
  whitestone,
  malba,
  'cobble-hill': cobbleHill,
  dumbo,
  'flatiron-nomad': flatironNomad,
  noho,
  'central-park-south': centralParkSouth,
  'hudson-yards': hudsonYards,
};
