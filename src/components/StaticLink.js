import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function StaticLink({ to, children, download }) {
  const href = useBaseUrl(to);
  return <a href={href} download={download}>{children}</a>;
}
