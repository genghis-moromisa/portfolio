export type Project = {
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Lumen Atelier',
    summary: 'Rebuilt a luxury retail platform with a typography-forward storytelling system and 40% faster page loads.',
    year: '2024',
    role: 'Creative Engineer',
    tags: ['Commerce', 'Brand', 'Performance'],
    link: 'https://example.com'
  },
  {
    title: 'Tactile Ledger',
    summary: 'Designed a fintech dashboard that balances regulatory clarity with calm visual hierarchy.',
    year: '2023',
    role: 'Product Design + Frontend',
    tags: ['Fintech', 'Design Systems']
  },
  {
    title: 'Northern Atlas',
    summary: 'Interactive editorial series translating climate research into accessible narrative maps.',
    year: '2023',
    role: 'Experience Lead',
    tags: ['Editorial', 'Data']
  },
  {
    title: 'Arc Relay',
    summary: 'Concept site for a mobility startup with an emphasis on refined motion and tactile surfaces.',
    year: '2022',
    role: 'Frontend',
    tags: ['Brand', 'Web Experience']
  }
];
