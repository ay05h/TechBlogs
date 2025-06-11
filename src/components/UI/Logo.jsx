import React from "react";
import { Code2, Zap } from "lucide-react";
function Logo({ className = "relative" }) {
  return (
    <div className={className}>
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
        <Code2 className="w-6 h-6 text-white" />
      </div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
        <Zap className="w-2 h-2 text-yellow-900" />
      </div>
    </div>
  );
}

export default Logo;
