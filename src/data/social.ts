/**
 * social.ts: share images for pages that have no hero photograph of their own.
 *
 * The town pages and the town-by-service pages carry no primaryImage, so a link
 * to one shared in a message or on social media showed the logo card. A field
 * photograph earns the click; a logo does not. The crew photo is used because it
 * is the one shot with people, the branded truck and a real street in it.
 *
 * This feeds og:image and twitter:image only. It does not put a hero image on
 * the page, which would repeat one photograph across 49 town pages.
 */
export const crewSocialImage = {
  src: '/img/field/crew-beside-branded-pickup-truck.webp',
  alt: 'Three Graduate Pest Control technicians standing beside their branded pickup truck on a New York City street',
  width: 1600,
  height: 1063,
};
