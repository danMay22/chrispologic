import { BookData } from '@/constants/books/type';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  book: BookData;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

export default function BookCard({
  book,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: BookCardProps) {
  return (
    <div className={cn('space-y-3', className)} {...props}>
      <Link href={`/books/${book.id}`}>
        <div className='overflow-hidden rounded-md'>
          <Image
            src={book.cover}
            alt={book.name}
            width={width}
            height={height}
            className={cn(
              'h-auto w-auto object-cover transition-all hover:scale-105',
              aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
            )}
          />
        </div>

        <div className='space-y-1 text-sm mt-2'>
          <h3 className='font-medium leading-none'>{book.name}</h3>
          <p className='text-xs text-muted-foreground'>R{book.price}</p>
        </div>
      </Link>
    </div>
  );
}
