'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PRODUCTS } from '@/data/products';
import { ArrowRight, Shirt, ShoppingBag, Footprints, Watch, Layers, Tag, Sparkles, Search, SlidersHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const CATEGORIES = [
  { id: 'all',         label: 'All',         icon: <Layers className='size-4' /> },
  { id: 'suits',       label: 'Suits',       icon: <Shirt className='size-4' /> },
  { id: 'shirts',      label: 'Shirts',      icon: <Shirt className='size-4' /> },
  { id: 'golf-shirts', label: 'Golf Shirts', icon: <Sparkles className='size-4' /> },
  { id: 'bottoms',     label: 'Bottoms',     icon: <Footprints className='size-4' /> },
  { id: 'accessories', label: 'Accessories', icon: <Watch className='size-4' /> },
  { id: 'bags',        label: 'Bags',        icon: <ShoppingBag className='size-4' /> },
  { id: 'sale',        label: 'On Sale',     icon: <Tag className='size-4' /> },
];

const SORT_OPTIONS = [
  { id: 'default',    label: 'Featured' },
  { id: 'price-asc',  label: 'Price: Low → High' },
  { id: 'price-desc', label: 'Price: High → Low' },
  { id: 'name-asc',   label: 'Name: A → Z' },
];

export default function CategoriesAndProducts() {
  const [active, setActive]       = useState('all');
  const [search, setSearch]       = useState('');
  const [sort, setSort]           = useState('default');
  const [maxPrice, setMaxPrice]   = useState(2000);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = PRODUCTS
    .filter((p) => {
      if (active === 'sale') return !!p.salePrice;
      if (active !== 'all' && p.category !== active) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if ((p.salePrice ?? p.price) > maxPrice) return false;
      return true;
    })
    .sort((a, b) => {
      const pa = a.salePrice ?? a.price;
      const pb = b.salePrice ?? b.price;
      if (sort === 'price-asc')  return pa - pb;
      if (sort === 'price-desc') return pb - pa;
      if (sort === 'name-asc')   return a.name.localeCompare(b.name);
      return 0;
    });

  const clearAll = () => { setActive('all'); setSearch(''); setSort('default'); setMaxPrice(2000); };
  const hasFilters = active !== 'all' || search || sort !== 'default' || maxPrice < 2000;

  return (
    <>
      {/* ── Gradient divider ── */}
      <div className='flex items-center px-10'>
        <div className='h-px flex-1' style={{ background: 'linear-gradient(to right, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)' }} />
      </div>

      {/* ── Categories ── */}
      <section className='py-10'>
        <div className='px-10'>
          <div className='mb-6 flex items-center justify-between gap-4'>
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-1'>Browse</p>
              <h2 className='font-sans text-3xl font-black uppercase tracking-widest'>Shop by Category</h2>
            </div>
          </div>

          <div className='grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-8'>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  'flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors',
                  active === cat.id
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background text-foreground border-border hover:bg-muted',
                )}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search + Filters bar ── */}
      <section className='pb-6'>
        <div className='px-10'>
          <div className='flex flex-col sm:flex-row gap-3 items-stretch sm:items-center'>

            {/* Search */}
            <div className='relative flex-1 max-w-md'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground' />
              <input
                type='text'
                placeholder='Search products…'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full border bg-background pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground'
              />
              {search && (
                <button onClick={() => setSearch('')} className='absolute right-3 top-1/2 -translate-y-1/2'>
                  <X className='size-4 text-muted-foreground' />
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className='border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground'
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>

            {/* Toggle advanced filters */}
            <button
              onClick={() => setShowFilters((v) => !v)}
              className={cn(
                'flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors',
                showFilters ? 'bg-foreground text-background border-foreground' : 'hover:bg-muted',
              )}
            >
              <SlidersHorizontal className='size-4' />
              Filters
            </button>

            {hasFilters && (
              <button
                onClick={clearAll}
                className='flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors'
              >
                <X className='size-3' /> Clear all
              </button>
            )}
          </div>

          {/* Advanced filters panel */}
          {showFilters && (
            <div className='mt-4 border p-5 grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <label className='text-xs font-bold uppercase tracking-widest mb-2 block'>
                  Max Price — <span className='text-muted-foreground font-normal normal-case tracking-normal'>R{maxPrice}</span>
                </label>
                <input
                  type='range'
                  min={0}
                  max={2000}
                  step={50}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className='w-full accent-foreground'
                />
                <div className='flex justify-between text-xs text-muted-foreground mt-1'>
                  <span>R0</span><span>R2000</span>
                </div>
              </div>
              <div>
                <p className='text-xs font-bold uppercase tracking-widest mb-2'>Availability</p>
                <div className='flex gap-3'>
                  {['All', 'In Stock', 'On Sale'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        if (opt === 'On Sale') setActive('sale');
                        else setActive('all');
                      }}
                      className={cn(
                        'border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors',
                        (opt === 'On Sale' && active === 'sale') || (opt !== 'On Sale' && active === 'all' && opt === 'All')
                          ? 'bg-foreground text-background border-foreground'
                          : 'hover:bg-muted',
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className='pb-16'>
        <div className='px-10'>
          <div className='mb-4 flex items-center justify-between'>
            <p className='text-sm text-muted-foreground'>
              Showing <span className='font-bold text-foreground'>{filtered.length}</span> item{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {filtered.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className='group block'>
                <Card className='overflow-hidden rounded-none border p-0 h-full'>
                  <CardHeader className='relative p-0'>
                    <div className='aspect-[3/4] overflow-hidden'>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className='h-full w-full object-cover object-center transition duration-500 group-hover:scale-105'
                      />
                    </div>
                    {product.badge && (
                      <span className={cn('absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 text-white', product.badgeColor)}>
                        {product.badge}
                      </span>
                    )}
                  </CardHeader>
                  <CardContent className='p-4 flex flex-col gap-1'>
                    <CardTitle className='font-sans font-black uppercase tracking-wider text-base'>
                      {product.name}
                    </CardTitle>
                    <CardDescription className='text-xs line-clamp-2'>
                      {product.description}
                    </CardDescription>
                    <div className='mt-2 flex items-center gap-2'>
                      {product.salePrice ? (
                        <>
                          <span className='font-bold text-sm'>R{product.salePrice}</span>
                          <span className='text-xs text-muted-foreground line-through'>R{product.price}</span>
                        </>
                      ) : (
                        <span className='font-bold text-sm'>R{product.price}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className='py-20 text-center text-muted-foreground text-sm uppercase tracking-widest'>
              No items match your search.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
