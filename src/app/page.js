import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <h1 className='text-3xl text-teal-600 font-bold underline'>Hello world!</h1>
  );
}
