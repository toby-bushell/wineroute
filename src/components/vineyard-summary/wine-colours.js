import React from 'react';
import { getAvailableWineColours } from './helpers';
import { ReactComponent as WineSVG } from '../../assets/svg/wine-glass.svg';
import { Icons, SVGHolder } from './styles';

const WineColours = ({ wines, small }) => {
  const availableWineColours = getAvailableWineColours(wines);

  if (!availableWineColours) return null;

  return (
    <>
      {availableWineColours && (
        <Icons>
          {availableWineColours.map((color, i) => (
            <SVGHolder color={color} key={i} small={small}>
              <WineSVG />
            </SVGHolder>
          ))}
        </Icons>
      )}
    </>
  );
};

export default WineColours;
