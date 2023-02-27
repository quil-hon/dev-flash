import * as React from "react";
import { ViewProps } from "react-native";
import Svg, { Path } from "react-native-svg";

interface FlaskIconProps extends ViewProps {
  size?: number;
  color?: string;
}

const Icon = React.memo(
  ({ size = 32, color = "#071a01", ...props }: FlaskIconProps) => (
    <Svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...props}>
      <Path
        fillRule="evenodd"
        d="M14.495 3.25H8.5a.75.75 0 0 0 0 1.5h.26v5.087a7.25 7.25 0 0 1-1.256 4.078l-3.093 4.548a1.855 1.855 0 0 0 1.326 2.887l.087.01.017.002c4.093.46 8.225.46 12.318 0l.018-.002.086-.01a1.855 1.855 0 0 0 1.326-2.887l-3.093-4.548a7.25 7.25 0 0 1-1.256-4.078V4.75h.26a.75.75 0 0 0 0-1.5h-1.005Zm-4.666 9.3h4.342a8.75 8.75 0 0 1-.43-2.713V4.75H10.26v5.087a8.75 8.75 0 0 1-.431 2.713ZM10 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2-1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        clipRule="evenodd"
      />
    </Svg>
  )
);

Icon.displayName = "Flask";

export default Icon;
