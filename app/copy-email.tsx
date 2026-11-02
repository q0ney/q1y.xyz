'use client';
import { useEffect, useState } from 'react';
export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  useEffect(() => { if (!copied) return; const timer = setTimeout(() => setCopied(false), 2200); return () => clearTimeout(timer); }, [copied]);
  async function copy() { try { await navigator.clipboard.writeText('qoney@pm.me'); setCopied(true); } catch { window.location.href = 'mailto:qoney@pm.me'; } }
  return <button className="copy mono" onClick={copy} aria-live="polite">{copied ? 'COPIED ✓' : 'COPY EMAIL ⧉'}</button>;
}
