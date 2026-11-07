import { useEffect } from 'react';

export default function Reveal() {
	useEffect(() => {
		const items = document.querySelectorAll('.reveal');
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reducedMotion || !('IntersectionObserver' in window)) {
			items.forEach((item) => item.classList.add('is-visible'));
			return;
		}
		document.documentElement.classList.add('reveal-ready');
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			}
		}, { threshold: 0.15 });
		items.forEach((item, index) => {
			item.style.transitionDelay = `${(index % 4) * 80}ms`;
			observer.observe(item);
		});
		return () => observer.disconnect();
	}, []);
	return null;
}
