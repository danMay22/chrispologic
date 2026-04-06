export default function SiteFooter() {
  return (
    <footer className='border-t bg-background'>
      <div className='mx-auto px-10 py-3'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} Chrispology. All rights reserved.
          </p>
          <div className='flex gap-6 text-sm text-muted-foreground'>
            <a href='/' className='hover:text-foreground transition-colors'>Home</a>
            <a href='/gallery' className='hover:text-foreground transition-colors'>Shop</a>
            <a href='/contact' className='hover:text-foreground transition-colors'>Our Story</a>
            <a href='/faq' className='hover:text-foreground transition-colors'>FAQ</a>
            <a href='#' className='hover:text-foreground transition-colors'>Terms & Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
