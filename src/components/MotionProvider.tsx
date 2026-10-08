"use client";

import { MotionConfig } from "framer-motion";

// Respect the visitor's reduced-motion setting for every framer-motion animation.
const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default MotionProvider;
