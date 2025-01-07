import type { Metric } from 'web-vitals';
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

const onPerfEntry = (metric: Metric) => {
  console.log('[ReportWebVitals]', metric.name, metric)
}

const reportWebVitals = () => {
  onCLS(onPerfEntry);
  onINP(onPerfEntry, { reportAllChanges: true });
  onFCP(onPerfEntry);
  onLCP(onPerfEntry);
  onTTFB(onPerfEntry);
};

export default reportWebVitals;
