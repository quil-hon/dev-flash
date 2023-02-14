import * as React from "react";
import { ViewProps } from "react-native";
import Svg, { Path } from "react-native-svg";

interface CaretRightIconProps extends ViewProps {
  size?: number;
  color?: string;
}

const CaretRightIcon = React.memo(
  ({ size = 32, color = "#071a01", ...props }: CaretRightIconProps) => (
    <Svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...props}>
      <Path
        fillRule="evenodd"
        d="M9.97 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L13.44 12 9.97 8.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </Svg>
  )
);

CaretRightIcon.displayName = "CaretRight";

export default CaretRightIcon;
