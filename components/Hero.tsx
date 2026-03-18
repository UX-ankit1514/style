/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useState, useEffect } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const SPLINE_SCENE_URL = 'https://prod.spline.design/HDIoZmquL5l5zq2G/scene.splinecode';

function shouldLoadSpline(): boolean {
  if (typeof window === 'undefined') return false;
  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency <= 2;
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  return !isMobile && !isLowEnd && !!gl;
}

const Hero: React.FC = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    setCanLoad(shouldLoadSpline());
  }, []);



  return (
    <section className="hero-section relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '600px' }}>
      
      {/* ── Fallback gradient ── */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-700"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, #e8e3da 0%, #d6d0c4 40%, #c4bdb0 100%)',
          opacity: splineLoaded ? 0 : 1,
        }}
      />

      {/* ── Spline 3D Scene ── */}
      {canLoad && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 z-[1]" style={{ pointerEvents: 'all' }}>
            <Spline
              scene={SPLINE_SCENE_URL}
              onLoad={() => setSplineLoaded(true)}
              style={{
                width: '100%',
                height: '100%',
                opacity: splineLoaded ? 1 : 0,
                transition: 'opacity 0.8s ease',
              }}
            />
          </div>
        </Suspense>
      )}

      {/* ── Subtle gradient overlay for text contrast ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(245,242,235,0.35) 0%, rgba(245,242,235,0.05) 40%, rgba(245,242,235,0.0) 60%, rgba(245,242,235,0.45) 100%)',
        }}
      />



      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] pointer-events-none">
        <div className="scroll-indicator w-6 h-10 rounded-full border-2 border-[#2C2A26]/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-[#2C2A26]/40 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
