import React from "react";
import {BetterIconProps} from "@/types/Button";


// A better way to illustrate with icons
// Pass any SVG icon as children (recommended width/height : w-6 h-6)
// By default, it's using your primary color for styling



const BetterIcon: React.FC<BetterIconProps> = ({ children }) => {
  return (
    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary">
      {children}
    </div>
  );
};

export default BetterIcon;
