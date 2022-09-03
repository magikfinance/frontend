import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Documentation'),
        href: 'https://magikdotfinance.gitbook.io/docs/',
        isHighlighted: true,
      },
      {
        label: t('Magik Finance'),
        href: 'https://magik.finance',
      },
      {
        label: t('MagikFarm'),
        href: 'https://medium.com/pancakeswap',
      },
      
      {
        label: '—',
      },
    ],
  },    

          
      /*               
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://magikdotfinance.gitbook.io/docs//customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://magikdotfinance.gitbook.io/docs/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://magikdotfinance.gitbook.io/docs/get-started',
      },
    ],
  }, 
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://https://magikdotfinance.gitbook.io/docs/',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://magikdotfinance.gitbook.io/docs/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://magikdotfinance.gitbook.io/docs/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://magikdotfinance.gitbook.io/docs/hiring/become-a-chef',
      },
    ],
  },
  
      */      
]
