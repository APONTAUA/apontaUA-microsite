import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function StaticLink({ to, children, download, target, rel }) {
  const href = useBaseUrl(to);
  return <a href={href} download={download} target={target} rel={rel}>{children}</a>;
}
