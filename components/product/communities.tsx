'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CommunityImage1 from '@/assets/images/product/community-1.png';
import CommunityImage2 from '@/assets/images/product/community-2.png';

const Btn = () => {
  return (
    <div className={'flex h-6 w-6 items-center justify-center rounded-full bg-[#350399] p-1'}>
      <svg xmlns='http://www.w3.org/2000/svg' width='10' height='11' viewBox='0 0 10 11' fill='none'>
        <path
          d='M0.950195 1.44995H9.0502M9.0502 1.44995V9.54995M9.0502 1.44995L0.950195 9.54995'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

function Communities() {
  return (
    <>
      <div className={'community-content'}>
        <div className={'community-content-summary'}>
          <div className={'flex flex-col gap-4'}>
            <div className={'community-content-summary-title'}>Feito por aplicadores, para aplicadores</div>
            <div className={'community-content-summary-desc'}>Criamos de forma colaborativa aplicações que se adaptam às necessidades dos outros, desenvolvendo uma caixa de ferramentas versátil de plug-ins, modelos e muito mais. Junte-se a nós para construir uma caixa de ferramentas que permita a qualquer pessoa criar o seu próprio sistema - jogar e ajustar sem limites.</div>
          </div>
          <Link href={'https://api.whatsapp.com/send?phone=5548988745520&text=Ol%C3%A1!%20Tenho%20interesse%20no%20MoneySystem'} target={'_blank'} className={'community-btn'}>
            <div>Junte-se a nós</div>
            <Btn />
          </Link>
        </div>
        <div className={'community-content-image'}>
          <Image loading={'eager'} src={CommunityImage1} width={500} height={600} alt={'Community'} />
        </div>
      </div>
      <div className={'community-content'}>
        <div className={'community-content-image'}>
          <Image loading={'eager'} src={CommunityImage2} alt={'Community'} width={500} height={600} />
        </div>
        <div className={'community-content-summary'}>
          <div className={'flex flex-col gap-4'}>
            <div className={'community-content-summary-title'}>Um sistema pensado especialmente para lojas de películas</div>
            <div className={'community-content-summary-desc'}>Maximize o Gerenciamento Financeiro da Sua Empresa com o MoneySystem. Acesse de qualquer lugar, a qualquer hora.</div>
          </div>
          <Link
            href={'https://docs.appflowy.io/docs/essential-documentation/readme/welcome-to-appflowy'}
            target={'_blank'}
            className={'community-btn'}
          >
            <div>Teste Agora Mesmo</div>
            <Btn />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Communities;
