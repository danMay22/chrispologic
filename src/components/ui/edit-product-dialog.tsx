'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import type { Product } from '@/data/products';

interface EditProductDialogProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved?: () => void;
}

export function EditProductDialog({ product, open, onOpenChange, onSaved }: EditProductDialogProps) {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: product.name,
    description: product.description,
    descriptionFr: product.descriptionFr,
    price: String(product.price),
    salePrice: product.salePrice ? String(product.salePrice) : '',
    material: product.material ?? '',
    fit: product.fit ?? '',
    care: product.care ?? '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const supabase = createClient();
      const { error: err } = await supabase.from('products').update({
        name: form.name,
        description: form.description,
        description_fr: form.descriptionFr,
        price: Number(form.price),
        sale_price: form.salePrice ? Number(form.salePrice) : null,
        material: form.material || null,
        fit: form.fit || null,
        care: form.care || null,
      }).eq('id', product.id);
      if (err) throw err;
      onOpenChange(false);
      onSaved?.();
    } catch (err: any) {
      setError(err.message ?? 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-lg max-h-[85vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='font-sans font-black uppercase tracking-wider'>Edit Product</DialogTitle>
          <DialogDescription>Update the details for this product.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSave} className='space-y-4 mt-2'>
          <div className='space-y-1.5'>
            <Label>Name</Label>
            <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>

          <div className='space-y-1.5'>
            <Label>{t('details.descriptionEn')}</Label>
            <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} required />
          </div>

          <div className='space-y-1.5'>
            <Label>{t('details.descriptionFr')}</Label>
            <Textarea value={form.descriptionFr} onChange={(e) => setForm({ ...form, descriptionFr: e.target.value })} rows={3} required />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-1.5'>
              <Label>{t('details.price')}</Label>
              <Input type='number' value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
            </div>
            <div className='space-y-1.5'>
              <Label>{t('details.salePrice')} <span className='text-muted-foreground text-xs'>({t('details.optional')})</span></Label>
              <Input type='number' value={form.salePrice} onChange={(e) => setForm({ ...form, salePrice: e.target.value })} />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-3'>
            <div className='space-y-1.5'>
              <Label>{t('details.material')}</Label>
              <Input value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} />
            </div>
            <div className='space-y-1.5'>
              <Label>{t('details.fit')}</Label>
              <Input value={form.fit} onChange={(e) => setForm({ ...form, fit: e.target.value })} />
            </div>
            <div className='space-y-1.5'>
              <Label>{t('details.care')}</Label>
              <Input value={form.care} onChange={(e) => setForm({ ...form, care: e.target.value })} />
            </div>
          </div>

          {error && <p className='text-sm text-red-500'>{error}</p>}

          <div className='flex gap-3 pt-2'>
            <Button type='submit' disabled={saving} className='flex-1 rounded-none font-bold uppercase tracking-widest'>
              {saving ? 'Saving…' : 'Save Changes'}
            </Button>
            <Button type='button' variant='outline' onClick={() => onOpenChange(false)} className='rounded-none'>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
