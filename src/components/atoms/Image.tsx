// components/atoms/Icon.tsx
import { IconType } from 'react-icons';

type IconProps = {
  Icon: IconType;
  size?: string;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ Icon, size = '24px', color = 'black' }) => {
  return <Icon style={{ fontSize: size, color }} />;
};

export default Icon;
