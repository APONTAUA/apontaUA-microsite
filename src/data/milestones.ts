export type MilestoneStatus = 'done' | 'current' | 'upcoming';

export const milestones: { code: string; title: string; date: string; status: MilestoneStatus; href: string }[] = [
	{ code: 'MS1', title: 'Inception', date: 'Sep 29, 2026', status: 'done', href: 'milestones/semester-1/ms1/' },
	{ code: 'MS2', title: 'Elaboration', date: 'TBD', status: 'current', href: 'milestones/semester-1/ms2/' },
	{ code: 'MS3', title: 'Construction', date: 'TBD', status: 'upcoming', href: 'milestones/semester-1/ms3/' },
	{ code: 'S2', title: 'Semester 2', date: 'TBD', status: 'upcoming', href: 'milestones/semester-2/' },
];
