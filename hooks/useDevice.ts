"use client";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

interface DeviceInfo {
  isMobile: boolean;
  isDesktop: boolean;
  width: number;
  isHydrated: boolean;
}

const useDevice = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isDesktop: true,
    width: 0,
    isHydrated: false,
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setDeviceInfo({
        isMobile: width < MOBILE_BREAKPOINT,
        isDesktop: width >= MOBILE_BREAKPOINT,
        width,
        isHydrated: true,
      });
    };

    update();

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      mql.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return deviceInfo;
};

export default useDevice;
