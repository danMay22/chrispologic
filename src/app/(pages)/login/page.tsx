'use client';

import { createClient } from '@/lib/supabase/client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/language';
import { ShieldAlert, LogIn } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError(error.message); setLoading(false); return; }
    router.push('/details');
  };

  return (
    <div className='min-h-[80vh] flex items-center justify-center px-4'>
      <div className='w-full max-w-md'>
        <div className='mb-8 border border-amber-400 bg-amber-50 dark:bg-amber-950/30 p-4 flex gap-3'>
          <ShieldAlert className='size-5 text-amber-600 shrink-0 mt-0.5' />
          <div>
            <p className='text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400'>{t('login.restricted')}</p>
            <p className='text-xs text-amber-600 dark:text-amber-500 mt-1'>
              {t('login.warning')}{' '}
              <a href='/' className='underline font-semibold'>{t('login.homepage')}</a>.
            </p>
          </div>
        </div>
        <div className='border p-8'>
          <div className='mb-6'>
            <h1 className='font-sans text-2xl font-black uppercase tracking-widest'>{t('login.title')}</h1>
            <p className='text-sm text-muted-foreground mt-1'>{t('login.sub')}</p>
          </div>
          <form onSubmit={handleLogin} className='space-y-4'>
            <div className='space-y-1.5'>
              <Label htmlFor='email'>{t('login.email')}</Label>
              <Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='admin@chrispology.co.za' required />
            </div>
            <div className='space-y-1.5'>
              <Label htmlFor='password'>{t('login.password')}</Label>
              <Input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='••••••••' required />
            </div>
            {error && <p className='text-xs text-red-500 font-medium'>{error}</p>}
            <Button type='submit' disabled={loading} className='w-full rounded-none font-black uppercase tracking-widest'>
              <LogIn className='size-4 mr-2' />
              {loading ? t('login.signingIn') : t('login.signIn')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
