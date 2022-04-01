import classNames from 'classnames';
import React, { useState } from 'react';
import CSSMotion from '../src/CSSMotion';
import '../examples/CSSMotion.less';

async function forceDelay(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

function App() {
  const [show, setShow] = useState(false);
  const [forceRender, setForceRender] = useState(true);
  const [hasMotionClassName, setHasMotionClassName] = useState(true);
  const [removeOnLeave, setRemoveOnLeave] = useState(false);
  const [prepare, setPrepare] = useState(false);

  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          id="show"
          checked={show}
          onChange={() => setShow(!show)}
        />
        Show Component
      </label>

      <label>
        <input
          type="checkbox"
          id="forceRender"
          checked={forceRender}
          onChange={() => setForceRender(!forceRender)}
        />
        forceRender
      </label>

      <label>
        <input
          type="checkbox"
          id="hasMotionClassName"
          checked={hasMotionClassName}
          onChange={() => setHasMotionClassName(!hasMotionClassName)}
        />
        hasMotionClassName
      </label>

      <label>
        <input
          type="checkbox"
          id="removeOnLeave"
          checked={removeOnLeave}
          onChange={() => setRemoveOnLeave(!removeOnLeave)}
        />
        removeOnLeave
      </label>

      <label>
        <input
          type="checkbox"
          id="prepare"
          checked={prepare}
          onChange={() => setPrepare(!prepare)}
        />
        prepare before motion
      </label>

      <div>
        <span>CSSMotionNew</span>
        <CSSMotion
          visible={show}
          forceRender={forceRender}
          motionName={hasMotionClassName ? 'transition' : null}
          removeOnLeave={removeOnLeave}
          leavedClassName="hidden"
          onAppearPrepare={prepare && forceDelay}
          onEnterPrepare={prepare && forceDelay}
          onAppearStart={() => ({ height: 0 })}
          onEnterStart={() => ({ height: 0 })}
          onLeaveActive={() => ({ height: 0 })}
          onVisibleChanged={visible => {
            console.log('Visible Changed:', visible);
          }}
        >
          {({ style, className }, ref) => {
            return (
              <div
                ref={ref}
                className={classNames('demo-block', className)}
                style={style}
              />
            );
          }}
        </CSSMotion>
      </div>
    </div>
  );
}

export default App;
