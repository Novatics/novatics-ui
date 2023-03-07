export enum LenghUnitModes {
  PX = 'px',
  REM = 'rem',
}
export type LengthUnit = LenghUnitModes.PX | LenghUnitModes.REM;
export type Length = `${number}${LengthUnit}`;

export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
