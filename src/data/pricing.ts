/**
 * pricing.ts: the standard rates for ROUTINE work.
 *
 * Ryan, September 2026: two tracks. Routine work (general pest control,
 * quarterly and monthly programs) is priced off a standard schedule and quoted
 * on the phone. Custom work (structural exclusion, rodent work on a building,
 * bed bugs, multi-unit and commercial) needs a paid site inspection.
 *
 * "No dollar figures on the site for now. I am setting the standard rates for
 * the routine programs and will send them once they are locked."
 *
 * So every price starts null and nothing renders. Set `price` to the text that
 * should appear, for example "$95 per visit", and the line shows up in the
 * closing call-to-action block on every page. No template changes are needed;
 * pushing the edit redeploys the site in about a minute.
 */
export interface RoutineRate {
  program: string;
  price: string | null;
  note?: string;
}

export const routineRates: RoutineRate[] = [
  { program: 'General pest control, one-time service', price: null },
  { program: 'Quarterly maintenance program', price: null },
  { program: 'Monthly maintenance program', price: null },
];

/** Only the rates that have actually been set. Empty until Ryan sends them. */
export const publishedRates = (): RoutineRate[] => routineRates.filter((r) => r.price);
