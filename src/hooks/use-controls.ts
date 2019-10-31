import {useState} from 'react';

export interface ControlsProps {
  zoom: number;
  pan: {x: number; y: number};
  canZoomIn: boolean;
  canZoomOut: boolean;
  zoomIn: () => void;
  zoomOut: () => void;
  panUp: () => void;
  panLeft: () => void;
  resetPan: () => void;
  panRight: () => void;
  panDown: () => void;
}

const canZoomIn = (zoom: number) => zoom < 20;
const canZoomOut = (zoom: number) => zoom > 1;

export const useControls = (): ControlsProps => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({x: 0, y: 0});

  return {
    zoom,
    pan,
    canZoomIn: canZoomIn(zoom),
    canZoomOut: canZoomOut(zoom),
    zoomIn: () => setZoom(zoom => (canZoomIn(zoom) ? zoom * 1.5 : zoom)),
    zoomOut: () => setZoom(zoom => (canZoomOut(zoom) ? zoom / 1.5 : zoom)),
    panUp: () => setPan(pan => ({x: pan.x, y: pan.y - 5})),
    panLeft: () => setPan(pan => ({x: pan.x - 5, y: pan.y})),
    resetPan: () => {
      setPan({x: 0, y: 0});
      setZoom(1);
    },
    panRight: () => setPan(pan => ({x: pan.x + 5, y: pan.y})),
    panDown: () => setPan(pan => ({x: pan.x, y: pan.y + 5}))
  };
};
