'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, MapPin, MessageCircle, Phone, Heart, Zap, Users, AlignLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) sectionRefs.current[id] = ref;
  };

  useEffect(() => {
    let observer: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { root: null, rootMargin: '0px', threshold: 0.4 },
    );
    Object.values(sectionRefs.current).forEach((el) => observer?.observe(el));
    return () => { observer?.disconnect(); observer = null; };
  }, []);

  const navItems = [
    { id: 'origin',  label: 'Where It Started' },
    { id: 'mission', label: 'What We Stand For' },
    { id: 'future',  label: 'Where We\'re Going' },
  ];

  return (
    <>
      {/* ── Our Story ── */}
      <section className='py-20'>
        <div className='px-10 max-w-7xl mx-auto'>
          <div className='relative grid-cols-3 gap-20 lg:grid'>

            {/* Main content */}
            <div className='lg:col-span-2'>
              <Badge variant='outline' className='rounded-none uppercase tracking-widest text-xs'>
                The Brand
              </Badge>
              <h1 className='mt-3 font-sans text-4xl font-black uppercase tracking-widest max-lg:text-3xl'>
                Our Story
              </h1>
              <p className='mt-3 text-lg text-muted-foreground max-w-xl'>
                Chrispology wasn't born in a boardroom. It started with a conviction — that faith
                deserves to be worn, not hidden.
              </p>

              {/* Small hero image */}
              <div className='my-8 aspect-[16/6] w-full overflow-hidden'>
                <img
                  src='/pexels-brett-sayles-3633711.jpg'
                  alt='Chrispology brand'
                  className='h-full w-full object-cover object-center'
                />
              </div>

              {/* Section 1 */}
              <section
                id='origin'
                ref={(r) => addSectionRef('origin', r)}
                className='mb-10'
              >
                <h2 className='font-sans text-2xl font-black uppercase tracking-wider mb-4 flex items-center gap-3'>
                  <span className='flex size-8 items-center justify-center bg-muted'>
                    <Heart className='size-4' />
                  </span>
                  Where It Started
                </h2>
                <div className='space-y-4 text-muted-foreground leading-relaxed'>
                  <p>
                    Chrispology was founded in Midrand, South Africa, by a small group of creatives
                    who believed that streetwear could carry a deeper message. What started as
                    hand-printed tees shared among friends quickly grew into something bigger.
                  </p>
                  <p>
                    The name itself is a statement — a fusion of identity, belief, and culture.
                    Every piece we make is designed to spark a conversation, to make the wearer
                    feel seen, and to remind them of who they are.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section
                id='mission'
                ref={(r) => addSectionRef('mission', r)}
                className='mb-10'
              >
                <h2 className='font-sans text-2xl font-black uppercase tracking-wider mb-4 flex items-center gap-3'>
                  <span className='flex size-8 items-center justify-center bg-muted'>
                    <Zap className='size-4' />
                  </span>
                  What We Stand For
                </h2>
                <div className='space-y-4 text-muted-foreground leading-relaxed'>
                  <p>
                    We don't do fast fashion. Every drop is intentional — limited quantities,
                    quality materials, and designs that mean something. We stand for authenticity
                    over hype, identity over trends.
                  </p>
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 my-6'>
                    {[
                      { label: 'Faith-Driven', desc: 'Every design rooted in purpose' },
                      { label: 'Limited Drops', desc: 'Quality over quantity, always' },
                      { label: 'Community First', desc: 'Built by and for the culture' },
                    ].map((v) => (
                      <div key={v.label} className='border p-4'>
                        <p className='font-sans font-black uppercase tracking-wider text-sm mb-1'>{v.label}</p>
                        <p className='text-xs text-muted-foreground'>{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section
                id='future'
                ref={(r) => addSectionRef('future', r)}
                className='mb-10'
              >
                <h2 className='font-sans text-2xl font-black uppercase tracking-wider mb-4 flex items-center gap-3'>
                  <span className='flex size-8 items-center justify-center bg-muted'>
                    <Users className='size-4' />
                  </span>
                  Where We're Going
                </h2>
                <div className='space-y-4 text-muted-foreground leading-relaxed'>
                  <p>
                    Chrispology is more than a clothing brand — it's a movement. We're building
                    toward pop-up events, collaborations with local artists, and eventually a
                    flagship store in Johannesburg.
                  </p>
                  <p>
                    If you wear Chrispology, you're not just a customer. You're part of the story.
                    And the story is just getting started.
                  </p>
                  <blockquote className='border-l-4 border-foreground pl-4 italic text-foreground font-medium'>
                    "Wear what you believe in. Live what you wear."
                  </blockquote>
                </div>
              </section>
            </div>

            {/* Sticky sidebar TOC */}
            <div className='sticky top-24 hidden h-fit lg:block'>
              <span className='flex items-center gap-2 text-sm font-semibold uppercase tracking-widest'>
                <AlignLeft className='size-4' />
                On this page
              </span>
              <nav className='mt-3'>
                <ul className='space-y-1'>
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={cn(
                          'block py-1.5 text-sm transition-colors duration-200 border-l-2 pl-3',
                          activeSection === item.id
                            ? 'border-foreground font-bold text-foreground'
                            : 'border-transparent text-muted-foreground hover:text-foreground',
                        )}
                      >
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

      {/* ── Divider ── */}
      <div className='flex items-center px-10'>
        <div className='h-px flex-1' style={{ background: 'linear-gradient(to right, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)' }} />
      </div>

      {/* ── Contact ── */}
      <section className='py-20'>
        <div className='px-10 max-w-7xl mx-auto'>
          <div className='mb-12'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2'>
              Get In Touch
            </p>
            <h2 className='font-sans text-4xl font-black uppercase tracking-widest max-lg:text-3xl'>
              Contact Us
            </h2>
            <p className='mt-3 text-muted-foreground max-w-lg'>
              Have a question about an order, a collab idea, or just want to say what's up?
              We're here for it.
            </p>
          </div>

          <div className='grid gap-4 md:grid-cols-2'>
            {[
              {
                icon: <Mail className='size-5 text-muted-foreground' />,
                label: 'Email',
                desc: 'We reply within 24 hours.',
                value: 'hello@chrispology.co.za',
                href: 'mailto:hello@chrispology.co.za',
              },
              {
                icon: <MapPin className='size-5 text-muted-foreground' />,
                label: 'Location',
                desc: 'Based in Midrand, Johannesburg.',
                value: 'Midrand, Gauteng, South Africa',
                href: '#',
              },
              {
                icon: <Phone className='size-5 text-muted-foreground' />,
                label: 'Phone',
                desc: 'Mon–Fri, 9am–5pm SAST.',
                value: '+27 (0) 11 000 0000',
                href: 'tel:+27110000000',
              },
              {
                icon: <MessageCircle className='size-5 text-muted-foreground' />,
                label: 'WhatsApp',
                desc: 'Quickest way to reach us.',
                value: 'Chat on WhatsApp',
                href: 'https://wa.me/27110000000',
              },
            ].map((item) => (
              <div key={item.label} className='bg-muted/50 p-8 border'>
                <div className='mb-4'>{item.icon}</div>
                <p className='font-sans font-black uppercase tracking-wider text-sm mb-1'>{item.label}</p>
                <p className='text-sm text-muted-foreground mb-4'>{item.desc}</p>
                <a href={item.href} className='text-sm font-medium hover:underline underline-offset-4'>
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Divider ── */}
      <div className='flex items-center px-10'>
        <div className='h-px flex-1' style={{ background: 'linear-gradient(to right, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)' }} />
      </div>

      {/* ── FAQ ── */}
      <section className='py-20'>
        <div className='px-10 max-w-3xl mx-auto'>
          <div className='mb-10'>
            <p className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-2'>Got Questions?</p>
            <h2 className='font-sans text-4xl font-black uppercase tracking-widest max-lg:text-3xl'>FAQ</h2>
          </div>
          <Accordion type='single' collapsible>
            {[
              { q: 'How do I place an order?', a: 'Browse the shop, click on a product, select your size, then tap "Buy via WhatsApp". You\'ll be connected directly with us to confirm and complete your order.' },
              { q: 'What sizes do you offer?', a: 'Most pieces come in XS through XXL. Size availability varies per product and is shown on each product page. Out-of-stock sizes are clearly marked.' },
              { q: 'Do you ship nationwide?', a: 'Yes — we ship across South Africa. Delivery times and costs are confirmed at the time of your WhatsApp order.' },
              { q: 'Can I return or exchange an item?', a: 'We accept exchanges within 7 days of delivery for unworn, unwashed items with tags intact. Contact us via WhatsApp or email to initiate.' },
              { q: 'How long does delivery take?', a: 'Standard delivery is 3–5 business days. Express options may be available — ask us when ordering.' },
              { q: 'Are your products limited edition?', a: 'Many of our drops are limited. Once a size or style sells out, it may not return. We recommend ordering early when a new drop lands.' },
              { q: 'How do I know my size?', a: 'Each product page lists the fit type (e.g. Oversized, Regular). When in doubt, size up — or message us and we\'ll guide you.' },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className='font-semibold hover:no-underline text-left'>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
