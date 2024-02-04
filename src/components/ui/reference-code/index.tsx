'use client';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CopyIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import voucher from 'voucher-code-generator';

export default function ReferenceCode() {
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    const code = voucher.generate({ length: 5 })[0];

    setReferenceCode(code);
  }, []);

  return (
    <div>
      <div className='rounded-md bg-muted-foreground/10 p-4 mt-1'>
        <div className='mb-3'>
          <h3 className='text-sm font-medium text-muted-foreground'>
            Use the reference code to make your payment
          </h3>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='p-3 bg-background/50 flex-1 rounded-md'>
            <h3 className='text-lg font-medium text-foreground uppercase'>
              {referenceCode}
            </h3>
          </div>
          <div>
            <Popover
              onOpenChange={() => {
                navigator.clipboard.writeText(referenceCode);
              }}
            >
              <PopoverTrigger asChild>
                <Button variant='secondary' size='icon'>
                  <CopyIcon className='h-4 w-4' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='inline-block w-auto h-auto text-sm p-2'>
                Copied
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}
