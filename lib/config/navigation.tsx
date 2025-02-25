import Send from '@/components/icons/send';
import Star from '@/components/icons/star';
import Eye from '@/components/icons/eye';
import Forum from '@/components/icons/forum';
import Github from '@/components/icons/github';
import Twitter from '@/components/icons/twitter';
import Discord from '@/components/icons/discord';
import Docs from '@/components/icons/docs';
import Blocks from '@/components/icons/blocks';
import Roadmap from '@/components/icons/roadmap';
import Ring from '@/components/icons/ring';
import Book from '@/components/icons/book';
import Email from '@/components/icons/email';
import Mobile from '@/components/icons/mobile';
import Desktop from '@/components/icons/desktop';

/**
 * Config for the navigation bar
 */
export const navigation: Item[] = [
  {
    name: 'Sobre Nós',
    href: '#sobrenos',
    key: '#sobrenos',
  },
  {
    name: 'Plataformas',
    href: '/download',
    key: 'download',
    placement: 'left',
    children: [
      {
        name: 'Download',
        key: 'download-group-1',

        children: [
          {
            key: '1',
            name: 'iOS e Android',
            href: '/download#ios-and-android',
            icon: <Mobile />,
            desc: '',
          },
          {
            key: '2',
            name: 'Computadores',
            href: '/download#macOS',
            icon: <Desktop />,
            desc: '',
          },
        ],
      },
    ],
  },
  {
    key: 'resources',
    name: 'Recursos',
    children: [
      {
        key: 'resources-group-1',
        name: 'Docs',
        children: [
          {
            key: '1',
            name: 'Como Usar o Sistema',
            desc: 'Everything technical',
            icon: <Docs />,
            href: 'https://docs.appflowy.io/docs/essential-documentation/readme/welcome-to-appflowy',
          },
          {
            key: '2',
            name: 'Exemplo',
            desc: 'Standalone packages to build your own productivity tools',
            icon: <Blocks />,
            href: '/appflowy-blocks',
          },
          {
            key: '3',
            name: 'Roadmap',
            desc: 'Shipped, in progress, and next up',
            icon: <Roadmap />,
            href: 'https://github.com/orgs/MoneySystem-IO/projects/5/views/12',
          },
          {
            key: '4',
            name: "Novidades",
            desc: 'The latest and greatest from MoneySystem',
            icon: <Ring />,
            href: '/what-is-new',
          },
        ],
      },
      {
        key: 'featured',
        name: 'Saiba Mais',
        children: [
          {
            key: '1',
            name: 'Self-hosting MoneySystem with MoneySystem Cloud',
            href: 'https://docs.appflowy.io/docs/guides/appflowy/self-hosting-appflowy',
            image: {
              src: '/images/self-hosting-appflowy.webp',
              alt: 'Self-hosting MoneySystem with MoneySystem Cloud',
            },
          },
          {
            key: '2',
            name: 'MoneySystem 2nd Anniversary and 2023 Roundup',
            href: '/blog/appflowy-2nd-anniversary-and-2023-roundup/',
            image: {
              src: '/images/appflowy-2nd-anniversary-and-2023-roundup.png',
              alt: 'MoneySystem 2nd Anniversary and 2023 Roundup',
            },
          },
          {
            key: '3',
            name: 'How to Contribute to MoneySystem',
            href: '/blog/how-to-contribute-to-appflowy/',
            image: {
              src: '/images/how-to-contribute-to-appflowy.png',
              alt: 'How to Contribute to MoneySystem',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'Planos',
    href: '/pricing',
    key: 'pricing',
  },
];

export interface Item {
  href?: string;
  children?: Item[];
  key: string;
  name: string;
  desc?: string;
  placement?: 'left' | 'right' | 'center';
  icon?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
}
