import React, { lazy, Suspense } from 'react';

// Lazy load the ModelViewer component
const ModelViewer = lazy(() => import('./ModelViewer'));

// Loading component for the 3D model
const ModelLoader = () => (
  <div className="w-full h-[500px] rounded-xl overflow-hidden border border-white/20 gradient-border flex items-center justify-center bg-black/20 backdrop-blur-sm">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p className="text-white/70">Loading 3D Model...</p>
    </div>
  </div>
);

const LazyModelViewer: React.FC = () => {
  return (
    <Suspense fallback={<ModelLoader />}>
      <ModelViewer />
    </Suspense>
  );
};

export default LazyModelViewer;
