// A 1px bar at the bottom of the text that fills upward into a highlight.
// Outfit reserves extra space above its capitals, so the highlight extends
// 0.125em below the text and trims the same amount off the top to center it.
const linkBase =
  '-mx-0.5 box-decoration-clone bg-linear-to-r from-neutral-950 to-neutral-950 bg-size-[100%_1px] bg-bottom bg-no-repeat px-0.5 pb-[0.125em] transition-[background-size,color] duration-200 ease-out'
export const linkClass = `${linkBase} hover:bg-size-[100%_calc(100%_-_0.125em)] hover:text-white focus-visible:bg-size-[100%_calc(100%_-_0.125em)] focus-visible:text-white`
export const groupLinkClass = `${linkBase} group-hover:bg-size-[100%_calc(100%_-_0.125em)] group-hover:text-white group-focus-visible:bg-size-[100%_calc(100%_-_0.125em)] group-focus-visible:text-white`
