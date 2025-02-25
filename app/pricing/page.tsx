import ScrollIcons from '@/components/shared/scroll-icons';
import { LearnMore } from '@/components/pricing/icons';
import Prices from '@/components/pricing/prices';
import UnlockCards from '@/components/pricing/unlock-cards';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card1 from '@/assets/images/pricing/card-1.png';
import Card2 from '@/assets/images/pricing/card-2.png';
import Card3 from '@/assets/images/pricing/card-3.png';
import Card4 from '@/assets/images/pricing/card-4.png';
import Help from '@/assets/images/pricing/help.png';
import Affiliate from '@/assets/images/pricing/affiliate.png';
import Contact from '@/assets/images/pricing/contact.png';
import '@/styles/pricing.scss';

const site_url = process.env.NEXT_PUBLIC_SITE_BASE_URL;

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${site_url}/pricing`,
    },
  };
}

function Page() {
  return (
    <>
      <div className={'pricing-page'}>
        <div className={'af-container'}>
          <div className={'af-box section-1'}>
            <div className={'main-title'}>
              <div>Cresça o seu negócio com o</div>
              <div className={'text-primary'}>melhor investimento!</div>
            </div>
            <div className={'subtitle'}>
              <div>Use nosso sistema gratuitamente por 30 dias, sem informar dados de pagamento.</div>
            </div>
            <Prices />
          </div>
        </div>
        <div className={'af-container'}>
          <div className={'af-box section-2'}>
            <div className={'flex max-w-[1100px]  flex-col gap-[60px]'}>
              <div className={'main-title'}>
              <span>
                <span className={'text-primary'}>Unlock</span> unlimited AI power
              </span>
                <div className={'subtitle'}>MoneySystem AI includes</div>
              </div>
              <div className={'cards'}>
                <div className={'card'}>
                  <Image
                    src={Card1}
                    alt={''}
                    width={257}
                    height={320}
                  />
                  <div className={'desc'}>Find inspiration</div>
                </div>
                <div className={'card'}>
                  <Image
                    src={Card2}
                    alt={''}
                    width={257}
                    height={320}
                  />
                  <div className={'desc'}>Previsão de Vendas</div>
                </div>
                <div className={'card'}>
                  <Image
                    src={Card3}
                    alt={''}
                    width={257}
                    height={320}
                  />
                  <div className={'desc'}>Automação de Fluxo de Trabalho</div>
                </div>
                <div className={'card'}>
                  <Image
                    src={Card4}
                    alt={''}
                    width={257}
                    height={320}
                  />
                  <div className={'desc'}>Garantias</div>
                </div>
              </div>
            </div>
            <div className={'flex w-full max-w-[1100px] flex-col gap-[35px]'}>
              <div className={'w-full text-right text-base max-sm:text-xs'}>
                Prices in <span className={'font-bold'}>$ USD</span>
              </div>
              <UnlockCards />
            </div>
          </div>
        </div>
        <div className={'w-full bg-white pb-[110px]'}>
          <ScrollIcons />
        </div>
        <div className={'af-container section-3-container'}>
          <div className="glow"></div>
          <div className={'af-box section-3'}>
            <div className={'title'}>
            <span>
              Have additional <span className={'text-[#6cb640]'}>questions?</span>
            </span>
            </div>
            <div className={'cards'}>
              <div className={'card'}>
                <div className="glow"></div>
                <Image
                  src={Help}
                  alt={''}
                  width={151}
                  height={121}
                />
                <div className={'card-title'}>Help articles</div>
                <Link
                  href={'https://docs.appflowy.io/docs'}
                  className={'flex items-center gap-2'}
                >
                  Learn more <LearnMore />
                </Link>
              </div>
              <div className={'card'}>
                <div className="glow"></div>
                <Image
                  src={Affiliate}
                  alt={''}
                  width={151}
                  height={121}
                />
                <div className={'card-title'}>Affiliate programs</div>

                <Link
                  href={'/pricing'}
                  className={'flex items-center gap-2'}
                >
                  {/*Learn more <LearnMore />*/}
                  Coming soon
                </Link>
              </div>
              <div className={'card'}>
                <div className="glow"></div>
                <Image
                  src={Contact}
                  alt={''}
                  width={151}
                  height={121}
                />
                <div className={'card-title'}>Contact support</div>
                <Link
                  href={'/contact'}
                  className={'flex items-center gap-2'}
                >
                  Contact Us <LearnMore />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={'af-container'}>
          <div className={'af-box section-4 gap-[30px]'}>
            <div className="glow"></div>
            <div className={'flex flex-col items-center gap-5'}>
              <div className={'title'}>
              <span>
                Comece hoje mesmo
                <span className={'text-[#6cb640]'}> grátis</span>
              </span>
              </div>
              <div className={'desc'}>Escolha ter seus dados e uma forma mais inteligente de trabalhar</div>
            </div>

            <div className={'btns'}>
              <Link
                className={'download-btn'}
                href={'/download'}
              >
                Download
              </Link>
              <Link
                className={'live-demo-btn'}
                href={'/templates'}
              >
                Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
