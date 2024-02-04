'use client';

import { useRouter } from 'next/navigation';

type SelectTabProps = {
  folders: string[];
};

export default function SelectTab({ folders }: SelectTabProps) {
  const router = useRouter();
  return (
    <div className='sm:hidden'>
      <label htmlFor='tabs' className='sr-only'>
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id='tabs'
        name='tabs'
        className='block w-full rounded-md border-foreground px-1 py-2 bg-muted-foreground/10'
        defaultValue={folders.find((folder) => folder)}
        onChange={(e) => {
          router.push(`?tabs=${e.target.value}`);
        }}
      >
        {folders.map((folder) => (
          <option key={folder}>{folder}</option>
        ))}
      </select>
    </div>
  );
}
