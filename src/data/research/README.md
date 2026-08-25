# Market research

One file per market, each exporting a `MarketResearch` object.

`verified: true` is set ONLY when every claim in the file has a real source
behind it in `sources[]`. Until then the capacity gate in `markets.ts` refuses
to generate that market's pages — a market without researched facts cannot
support 3,000 unique local words, and a thin geo page is worse than no geo page.

Research is public-record work: housing stock and era, foundation types,
waterways and drainage, named neighborhoods and landmarks, and the pest
pressures characteristic of that place with their driver and season.
