import React from 'react';
import './VideoBg.css';

/*
  Pure CSS animated background — no video file needed.
  Uses layered radial gradients + keyframe animations to create
  a cinematic, moving deep-space / aurora effect matching the GetLayers style.
*/
export default function VideoBg() {
  return (
    <div className="vbg" aria-hidden="true">
      {/* Base dark gradient */}
      <div className="vbg__base" />
      {/* Animated orbs */}
      <div className="vbg__orb vbg__orb--1" />
      <div className="vbg__orb vbg__orb--2" />
      <div className="vbg__orb vbg__orb--3" />
      <div className="vbg__orb vbg__orb--4" />
      {/* Noise grain overlay for cinematic texture */}
      <div className="vbg__grain" />
      {/* Bottom fade to dark */}
      <div className="vbg__fade" />
    </div>
  );
}