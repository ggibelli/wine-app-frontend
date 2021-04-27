import * as React from 'react';

export const useIntersect = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
}): [
  React.Dispatch<React.SetStateAction<HTMLDivElement | null>>,
  IntersectionObserverEntry | null
] => {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry | null>(
    null
  );
  const [node, setNode] = React.useState<HTMLDivElement | null>(null);

  const observer = React.useRef<IntersectionObserver | null>(null);
  React.useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new window.IntersectionObserver(
      ([entry]) => setEntry(entry),
      { root, rootMargin, threshold }
    );

    const { current: currentObserver } = observer;

    if (node) {
      currentObserver.observe(node);
    }
    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);
  return [setNode, entry];
};
