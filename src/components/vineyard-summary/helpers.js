/**
 *
 * Returns array of available wine colours
 *
 * @param {{color: String}[]} wines
 */
export const getAvailableWineColours = wines => {
  const colors = ['red', 'white', 'rose'];
  const available = wines.reduce((accum, val, i) => {
    if (colors.includes(val.color) && !accum.includes(val.color)) {
      accum.push(val.color);
      return accum;
    }
    return accum;
  }, []);
  return available;
};
