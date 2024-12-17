import { Suspense, useEffect, useMemo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalContext from './contexts/GlobalContext'
import { fetchUse } from './utils/request';
import DemoUse from './components/DemoUse';
import DemoUseTransition from './components/DemoUseTransition';
import DemoUseActionState from './components/DemoUseActionState';
import DemoUseOptimistic from './components/DemoUseOptimistic';
import './App.css';

function App() {
  const [originVal, setOriginVal] = useState('1')

  const fetch = useMemo(() => fetchUse(), [])

  useEffect(() => {
    console.log('mounted')
  }, [])

  return (
    <div className="App">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalContext value={{ title: 'use Context' }}>
              <DemoUse fetch={fetch} />
              <DemoUseTransition />
              <DemoUseActionState />
              <DemoUseOptimistic originVal={originVal} setOriginVal={setOriginVal} />
          </GlobalContext>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
