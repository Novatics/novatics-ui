export interface NovaticsLogoProps {
  size?: number;
  variant?: string;
  title?: string;
}

export function NovaticsLogo(props: NovaticsLogoProps) {
  const { title = 'Novatics', size = 300, variant, ...rest } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 421 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{title}</title>
      <path
        d="M210.595 53.9897V170.677L315.167 287.399V112.386L210.595 53.9897Z"
        fill="#FFCC00"
      />
      <path
        d="M210.595 229.026L315.167 287.352L210.595 170.677V229.026Z"
        fill="#FF9D00"
      />
      <path
        d="M106 112.386V287.352L210.595 345.748V229.026V170.63L106 112.386Z"
        fill="#832AF5"
      />
    </svg>
  );
}

export default NovaticsLogo;
