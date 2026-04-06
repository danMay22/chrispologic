'use client';

import { createClient } from '@/lib/supabase/client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Package, X, ImagePlus, LogOut, ShieldAlert } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';

const CATEGORIES = ['suits', 'shirts', 'golf-shirts', 'bottoms', 'accessories', 'bags'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'];

type FormData = {
  name: string;
  description: string;
  price: string;
  salePrice: string;
  category: string;
  badge: string;
  material: string;
  fit: string;
  care: string;
  sizes: string[];
  isNewArrival: boolean;
  images: string[];
};

const EMPTY_FORM: FormData = {
  name: '', description: '', price: '', salePrice: '',
  category: 'shirts', badge: '', material: '', fit: '', care: '',
  sizes: [], isNewArrival: false, images: [],
};

export default function DetailsPage() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setAuthLoading(false);
      if (!data.user) router.push('/login');
    });
  }, []);

  const uploadImage = async (file: File): Promise<string> => {
    const ext = file.name.split('.').pop();
    const path = `products/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from('chrispology').upload(path, file, { upsert: true });
    if (error) throw error;
    return supabase.storage.from('chrispology').getPublicUrl(path).data.publicUrl;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploadingImg(true);
    try {
      const urls = await Promise.all(files.map(uploadImage));
      setForm((f) => ({ ...f, images: [...f.images, ...urls] }));
    } catch { setError('Image upload failed'); }
    finally { setUploadingImg(false); }
  };

  const toggleSize = (size: string) => {
    setForm((f) => ({
      ...f,
      sizes: f.sizes.includes(size) ? f.sizes.filter((s) => s !== size) : [...f.sizes, size],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true); setError(''); setSuccess('');
    try {
      const { error } = await supabase.from('products').insert({
        name: form.name,
        description: form.description,
        price: Number(form.price),
        sale_price: form.salePrice ? Number(form.salePrice) : null,
        category: form.category,
        badge: form.badge || null,
        badge_color: form.badge === 'Sale' ? 'bg-red-500' : form.badge === 'New' ? 'bg-foreground' : form.badge === 'Limited' ? 'bg-amber-500' : null,
        material: form.material || null,
        fit: form.fit || null,
        care: form.care || null,
        sizes: form.sizes,
        images: form.images,
        is_new_arrival: form.isNewArrival,
        created_at: new Date().toISOString(),
      });
      if (error) throw error;
      setSuccess(`"${form.name}" added successfully!`);
      setForm(EMPTY_FORM);
      if (imgRef.current) imgRef.current.value = '';
    } catch (err: any) {
      setError(err.message ?? 'Failed to save product');
    } finally { setSaving(false); }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (authLoading) {
    return <div className='flex items-center justify-center min-h-[60vh] text-sm text-muted-foreground uppercase tracking-widest'>Loading…</div>;
  }

  if (!user) return null;

  return (
    <div className='min-h-screen px-6 py-10 max-w-4xl mx-auto'>

      {/* Header */}
      <div className='mb-8 flex items-start justify-between gap-4'>
        <div>
          <div className='flex items-center gap-2 mb-1'>
            <ShieldAlert className='size-4 text-amber-500' />
            <span className='text-xs font-bold uppercase tracking-widest text-amber-500'>Admin Only</span>
          </div>
          <h1 className='font-sans text-3xl font-black uppercase tracking-widest flex items-center gap-3'>
            <Package className='size-7' /> Product Manager
          </h1>
          <p className='text-sm text-muted-foreground mt-1'>Add new products to the Chrispology store</p>
        </div>
        <Button variant='outline' size='sm' onClick={handleLogout} className='rounded-none gap-2'>
          <LogOut className='size-4' /> Sign Out
        </Button>
      </div>

      <Card className='rounded-none border'>
        <CardHeader>
          <CardTitle className='font-sans font-black uppercase tracking-wider flex items-center gap-2'>
            <Plus className='size-5' /> Add New Product
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-5'>

            {/* Name */}
            <div className='space-y-1.5'>
              <Label>Product Name *</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder='e.g. Faith Over Fear Tee' required />
            </div>

            {/* Description */}
            <div className='space-y-1.5'>
              <Label>Description *</Label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder='Describe the product…' rows={3} required />
            </div>

            {/* Price row */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-1.5'>
                <Label>Price (R) *</Label>
                <Input type='number' value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder='450' required />
              </div>
              <div className='space-y-1.5'>
                <Label>Sale Price (R) <span className='text-muted-foreground text-xs'>optional</span></Label>
                <Input type='number' value={form.salePrice} onChange={(e) => setForm({ ...form, salePrice: e.target.value })} placeholder='350' />
              </div>
            </div>

            {/* Category */}
            <div className='space-y-1.5'>
              <Label>Category *</Label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className='w-full border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground'
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}</option>
                ))}
              </select>
            </div>

            {/* Badge */}
            <div className='space-y-1.5'>
              <Label>Badge <span className='text-muted-foreground text-xs'>optional</span></Label>
              <select
                value={form.badge}
                onChange={(e) => setForm({ ...form, badge: e.target.value })}
                className='w-full border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground'
              >
                <option value=''>None</option>
                <option value='New'>New</option>
                <option value='Sale'>Sale</option>
                <option value='Limited'>Limited</option>
                <option value='Coming Soon'>Coming Soon</option>
              </select>
            </div>

            {/* Sizes */}
            <div className='space-y-2'>
              <Label>Available Sizes *</Label>
              <div className='flex flex-wrap gap-2'>
                {SIZES.map((size) => (
                  <button
                    key={size}
                    type='button'
                    onClick={() => toggleSize(size)}
                    className={`border px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      form.sizes.includes(size) ? 'bg-foreground text-background border-foreground' : 'hover:bg-muted'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Details row */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              <div className='space-y-1.5'>
                <Label>Material</Label>
                <Input value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} placeholder='100% Cotton' />
              </div>
              <div className='space-y-1.5'>
                <Label>Fit</Label>
                <Input value={form.fit} onChange={(e) => setForm({ ...form, fit: e.target.value })} placeholder='Oversized' />
              </div>
              <div className='space-y-1.5'>
                <Label>Care</Label>
                <Input value={form.care} onChange={(e) => setForm({ ...form, care: e.target.value })} placeholder='Machine Wash Cold' />
              </div>
            </div>

            {/* New Arrival toggle */}
            <div className='flex items-center gap-3'>
              <input
                type='checkbox'
                id='newArrival'
                checked={form.isNewArrival}
                onChange={(e) => setForm({ ...form, isNewArrival: e.target.checked })}
                className='size-4 accent-foreground'
              />
              <Label htmlFor='newArrival'>Mark as New Arrival (appears in the New Arrivals carousel)</Label>
            </div>

            {/* Images */}
            <div className='space-y-2'>
              <Label>Product Images</Label>
              {form.images.length > 0 && (
                <div className='flex flex-wrap gap-2 mb-2'>
                  {form.images.map((url, i) => (
                    <div key={i} className='relative'>
                      <img src={url} alt='' className='h-20 w-16 object-cover border' />
                      <button
                        type='button'
                        onClick={() => setForm((f) => ({ ...f, images: f.images.filter((_, idx) => idx !== i) }))}
                        className='absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full p-0.5'
                      >
                        <X className='size-3' />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <input ref={imgRef} type='file' accept='image/*' multiple onChange={handleImageUpload} disabled={uploadingImg} className='hidden' id='img-upload' />
              <label htmlFor='img-upload' className='flex items-center gap-2 px-4 py-2 text-sm border cursor-pointer hover:bg-muted w-fit'>
                <ImagePlus className='size-4' />
                {uploadingImg ? 'Uploading…' : 'Upload Images'}
              </label>
            </div>

            {/* Feedback */}
            {success && <p className='text-sm text-green-600 font-medium'>{success}</p>}
            {error && <p className='text-sm text-red-500 font-medium'>{error}</p>}

            {/* Actions */}
            <div className='flex gap-3 pt-2'>
              <Button type='submit' disabled={saving || uploadingImg} className='flex-1 rounded-none font-black uppercase tracking-widest'>
                {saving ? 'Saving…' : 'Add Product'}
              </Button>
              <Button type='button' variant='outline' onClick={() => setForm(EMPTY_FORM)} className='rounded-none'>
                Clear
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
