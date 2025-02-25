import Twitter from '@/components/icons/twitter';
import Reddit from '@/components/icons/reddit';
import Github from '@/components/icons/github';
import Discord from '@/components/icons/discord';
import { webApplicationUrl } from '@/lib/web-application';

export const externalLinks = [
  {
    key: 'twitter',
    icon: (
      <i className={'text-white'}>
        <Twitter />
      </i>
    ),
    link: 'https://twitter.com/appflowy',
  },
  {
    key: 'reddit',
    icon: (
      <i className={'text-white'}>
        <Reddit />
      </i>
    ),
    link: 'https://www.reddit.com/r/MoneySystem',
  },
  {
    key: 'github',
    icon: (
      <i className={'text-white'}>
        <Github />
      </i>
    ),
    link: 'https://github.com/MoneySystem-IO/appflowy',
  },
  {
    key: 'discord',
    icon: (
      <i className={'text-white'}>
        <Discord />
      </i>
    ),
    link: 'https://api.whatsapp.com/send?phone=5548988745520&text=Ol%C3%A1!%20Tenho%20interesse%20no%20MoneySystem',
  },
];

export const links = [
  {
    name: 'Produtos',
    children: [
      {
        name: 'Templates',
        link: '/templates',
      },
      {
        name: 'What\'s New',
        link: '/what-is-new',
      },
      {
        name: 'Roadmap',
        link: 'https://github.com/orgs/MoneySystem-IO/projects/5/views/12',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Email Newsletter',
        link: '/subscribe-newsletter',
      },
      {
        name: 'Pricing',
        link: '/pricing',
      },
    ],
  },
  {
    name: 'Recursos',
    children: [
      {
        name: 'Guides & Tutorials',
        link: 'https://docs.appflowy.io/docs/guides/appflowy',
      },
      {
        name: 'Developer Docs',
        link: 'https://docs.appflowy.io/docs/essential-documentation/readme/welcome-to-appflowy',
      },
      {
        name: 'MoneySystem Blocks',
        link: '/appflowy-blocks',
      },
      {
        name: 'Request a resource',
        link: 'https://tally.so/r/npoyeb',
      },
      {
        name: 'RSS',
        link: '/blog/feed.xml',
      },
    ],
  },
  {
    name: 'Empresa',
    children: [
      {
        name: 'Sobre Nós',
        link: '#sobrenos',
      },
      {
        name: 'Fale Conosco',
        link: '/join',
        badge: 1,
      },
      {
        name: 'Política de Privacidade',
        link: '/terms',
      },
      {
        name: 'Termos de Uso',
        link: '/terms',
      },
    ],
  },
];
