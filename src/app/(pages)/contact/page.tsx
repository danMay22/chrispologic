'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, MapPin, MessageCircle, Phone, Heart, Zap, Users, AlignLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/providers/language';

export default function ContactPage() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) sectionRefs.current[id] = ref;
  };

  useEffect(() => {
    let observer: IntersectionObserver | null = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { root: null, rootMargin: '0px', threshold: 0.4 },
    );
    Object.values(sectionRefs.current).forEach((el) => observer?.observe(el));
    return () => { observer?.disconnect(); observer = null; };
  }, []);

  const navItems = [
    { id: 'origin',  label: t('story.s1Title') },
    { id: 'mission', label: t('story.s2Title') },
    { id: 'future',  label: t('story.s3Title') },
  ];

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
  ];

  const contactCards = [
    { icon: <Mail className='size-5 text-muted-foreground' />,        label: t('contact.emailLabel'),    desc: t('contact.emailDesc'),    value: 'hello@chrispology.co.za',      href: 'mailto:hello@chrispology.co.za' },
    { icon: <MapPin className='size-5 text-muted-foreground' />,      label: t('contact.locationLabel'), desc: t('contact.locationDesc'), value: t('contact.locationVal'),       href: '#' },
    { icon: <Phone className='size-5 text-muted-foreground' />,       label: t('contact.phoneLabel'),    desc: t('contact.phoneDesc'),    value: '+27 (0) 11 000 0000',          href: 'tel:+27110000000' },
    { icon: <MessageCircle className='size-5 text-muted-foreground' />,label: t('contact.whatsappLabel'),desc: t('contact.whatsappDesc'), value: t('contact.whatsappVal'),       href: 'https://wa.me/27110000000' },
  ];

  const divider = (
    <div className='flex items-center px-10'>
      <div className='h-px flex-1' style={{ background: 'linear-gradient(to right, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)' }} />
    </div>
  );

  return (
    <>
      {/* ── Our Story ── */}
      <section className='py-20'>
        <div className='px-10 max-w-7xl mx-auto'>
          <div className='relative grid-cols-3 gap-20 lg:grid'>
            <div className='lg:col-span-2'>
              <Badge variant='outline' className='rounded-none uppercase tracking-widest text-xs'>{t('story.badge')}</Badge>
              <h1 className='mt-3 font-sans text-4xl font-black uppercase tracking-widest max-lg:text-3xl'>{t('story.title')}</h1>
              <p className='mt-3 text-lg text-muted-foreground max-w-xl'>{t('story.intro')}</p>

              <div className='my-8 aspect-[16/6] w-full overflow-hidden'>
                <img src='/pexels-brett-sayles-3633711.jpg' alt='Chrispology brand' className='h-full w-full object-cover object-center' />
              </div>

              <section id='origin' ref={(r) => addSectionRef('origin', r)} className='mb-10'>
                <h2 className='font-sans text-2xl font-black uppercase tracking-wider mb-4 flex items-center gap-3'>
                  <span className='flex size-8 items-center justify-center bg-muted'><Heart className='size-4' /></span>
                  {t('story.s1Title')}
                </h2>
                <div className='space-y-4 text-muted-foreground leading-relaxed'>
                  <p>{t('story.s1p1')}</p>
                  <p>{t('story.s1p2')}</p>
                </div>
              </section>

              <section id='mission' ref={(r) => addSectionRef('mission', r)} className='mb-10'>
                <h2 className='font-sans text-2xl font-black uppercase tracking-wider mb-4 flex items-center gap-3'>
                  <span className='flex size-8 items-center justify-center bg-muted'><Zap className='size-4' /></span>
                  {t('story.s2Title')}
                </h2>
                <div className='space-y-4 text-muted-foreground leading-relaxed'>
                  <p>{t('story.s2p1')}</p>
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-6'>
                    {[
                      { label: t('story.v1Label'), desc: t('story.v1Desc') },
                      { label: t('story.v2Label'), desc: t('story.v2Desc') },
                      { label: t('story.v3Label'), desc: t('story.v3Desc') },
                    ].map((v) => (
                      <div key={v.label} className='border p-4'>
                        <p className='font-sans font-black uppercase tracking-wider text-sm mb-1'>{v.label}</p>
                        <p className='text-xs text-muted-foreground'>{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id='future' ref={(r) => addSectionRef('future', r)} className='mb-10'>
                <h2 className='font-sans text-2xl font-black uppercase tracking-wider mb-4 flex items-center gap-3'>
                  <span className='flex size-8 items-center justify-center bg-muted'><Users className='size-4' /></span>
                  {t('story.s3Title')}
                </h2>
                <div className='space-y-4 text-muted-foreground leading-relaxed'>
                  <p>{t('story.s3p1')}</p>
                  <p>{t('story.s3p2')}</p>
                  <blockquote className='border-l-4 border-foreground pl-4 italic text-foreground font-medium'>{t('story.quote')}</blockquote>
                </div>
              </section>
            </div>

            {/* Sticky TOC */}
            <div className='sticky top-24 hidden h-fit lg:block'>
              <span className='flex items-center gap-2 text-sm font-semibold uppercase tracking-widest'>
                <AlignLeft className='size-4' />{t('story.toc')}
              </span>
              <nav className='mt-3'>
                <ul className='space-y-1'>
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className={cn('block py-1.5 text-sm transition-colors duration-200 border-l-2 pl-3',
                        activeSection === item.id ? 'border-foreground font-bold text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground')}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {divider}

      {/* ── Contact ── */}
      <section className='py-20'>
        <div className='px-10 max-w-7xl mx-auto'>
          <div className='mb-12'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2'>{t('contact.label')}</p>
            <h2 className='font-sans text-4xl font-black uppercase tracking-widest max-lg:text-3xl'>{t('contact.title')}</h2>
            <p className='mt-3 text-muted-foreground max-w-lg'>{t('contact.sub')}</p>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            {contactCards.map((item) => (
              <div key={item.label} className='bg-muted/50 p-8 border'>
                <div className='mb-4'>{item.icon}</div>
                <p className='font-sans font-black uppercase tracking-wider text-sm mb-1'>{item.label}</p>
                <p className='text-sm text-muted-foreground mb-4'>{item.desc}</p>
                <a href={item.href} className='text-sm font-medium hover:underline underline-offset-4'>{item.value}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* ── FAQ ── */}
      <section id='faq' className='py-20'>
        <div className='px-10 max-w-3xl mx-auto'>
          <div className='mb-10'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2'>{t('faq.label')}</p>
            <h2 className='font-sans text-4xl font-black uppercase tracking-widest max-lg:text-3xl'>{t('faq.title')}</h2>
          </div>
          <Accordion type='single' collapsible>
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className='font-semibold hover:no-underline text-left'>{item.q}</AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
