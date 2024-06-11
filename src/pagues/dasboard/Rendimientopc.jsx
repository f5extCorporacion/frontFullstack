import React, { useState, useEffect } from 'react';

const Rendimientopc = () => {
  const [hardwareConcurrency, setHardwareConcurrency] = useState(0);
  const [memory, setMemory] = useState({
    totalJSHeapSize: 0,
    usedJSHeapSize: 0,
    jsHeapSizeLimit: 0,
  });
  const [timing, setTiming] = useState({});

  const updatePerformanceData = () => {
    // Actualizar el número de núcleos de CPU
    const cpuCores = navigator.hardwareConcurrency || 0;
    setHardwareConcurrency(cpuCores);

    // Actualizar información de memoria si está disponible
    if (performance.memory) {
      setMemory({
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        usedJSHeapSize: performance.memory.usedJSHeapSize,
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
      });
    }

    // Actualizar información de tiempos de navegación
    const timing = performance.timing;
    setTiming({
      navigationStart: timing.navigationStart,
      unloadEventStart: timing.unloadEventStart,
      unloadEventEnd: timing.unloadEventEnd,
      redirectStart: timing.redirectStart,
      redirectEnd: timing.redirectEnd,
      fetchStart: timing.fetchStart,
      domainLookupStart: timing.domainLookupStart,
      domainLookupEnd: timing.domainLookupEnd,
      connectStart: timing.connectStart,
      connectEnd: timing.connectEnd,
      secureConnectionStart: timing.secureConnectionStart,
      requestStart: timing.requestStart,
      responseStart: timing.responseStart,
      responseEnd: timing.responseEnd,
      domLoading: timing.domLoading,
      domInteractive: timing.domInteractive,
      domContentLoadedEventStart: timing.domContentLoadedEventStart,
      domContentLoadedEventEnd: timing.domContentLoadedEventEnd,
      domComplete: timing.domComplete,
      loadEventStart: timing.loadEventStart,
      loadEventEnd: timing.loadEventEnd,
    });
  };

  useEffect(() => {
    // Inicialmente obtener los datos de rendimiento
    updatePerformanceData();

    // Configurar un intervalo para actualizar los datos cada minuto (60000 ms)
    const intervalId = setInterval(updatePerformanceData, 600);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Monitor de Rendimiento del PC</h1>
      <h2>Hardware</h2>
      <p>Número de núcleos de CPU: {hardwareConcurrency}</p>

      <h2>Memoria</h2>
      <p>Total JS Heap Size: {memory.totalJSHeapSize} bytes</p>
      <p>Used JS Heap Size: {memory.usedJSHeapSize} bytes</p>
      <p>JS Heap Size Limit: {memory.jsHeapSizeLimit} bytes</p>

      <h2>Tiempos de Navegación</h2>
      <p>Navigation Start: {timing.navigationStart}</p>
      <p>Unload Event Start: {timing.unloadEventStart}</p>
      <p>Unload Event End: {timing.unloadEventEnd}</p>
      <p>Redirect Start: {timing.redirectStart}</p>
      <p>Redirect End: {timing.redirectEnd}</p>
      <p>Fetch Start: {timing.fetchStart}</p>
      <p>Domain Lookup Start: {timing.domainLookupStart}</p>
      <p>Domain Lookup End: {timing.domainLookupEnd}</p>
      <p>Connect Start: {timing.connectStart}</p>
      <p>Connect End: {timing.connectEnd}</p>
      <p>Secure Connection Start: {timing.secureConnectionStart}</p>
      <p>Request Start: {timing.requestStart}</p>
      <p>Response Start: {timing.responseStart}</p>
      <p>Response End: {timing.responseEnd}</p>
      <p>DOM Loading: {timing.domLoading}</p>
      <p>DOM Interactive: {timing.domInteractive}</p>
      <p>DOM Content Loaded Event Start: {timing.domContentLoadedEventStart}</p>
      <p>DOM Content Loaded Event End: {timing.domContentLoadedEventEnd}</p>
      <p>DOM Complete: {timing.domComplete}</p>
      <p>Load Event Start: {timing.loadEventStart}</p>
      <p>Load Event End: {timing.loadEventEnd}</p>
    </div>
  );
};

export default Rendimientopc;
