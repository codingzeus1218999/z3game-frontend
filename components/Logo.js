import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  (<Link href="/" className="flex items-center space-x-2">

    {/* <Image src="/logo.svg" alt="Logo" width={376} height={85} /> */}
    <Image src="/logo5.svg" alt="Logo" width={40} height={40} />

  </Link>)
);

export default Logo;
