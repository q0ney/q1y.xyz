'use client';

import { useId, useState, type ReactNode } from 'react';

export default function ProjectDetails({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return <div className="project-details" data-open={open}>
    <button type="button" className="details-trigger" aria-expanded={open}
      aria-controls={`${id}-panel`} id={`${id}-trigger`} onClick={() => setOpen(value => !value)}>
      <span className="details-title">Behind the build</span>
      <span className="details-icon" aria-hidden="true"><span /><span /></span>
    </button>
    <div className="details-panel" id={`${id}-panel`} role="region"
      aria-labelledby={`${id}-trigger`} aria-hidden={!open} inert={!open}>
      <div className="details-clip"><div className="details-content">{children}</div></div>
    </div>
  </div>;
}
