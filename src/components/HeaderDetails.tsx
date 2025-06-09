'use client';

import { motion } from 'framer-motion';


type Props = {
  logo: {
    mediaItemUrl: string;
    altText: string;
    title: string;
  } | null;
  menu: { slug: string }[] | null;

};

export default function HeaderDetails({ logo, menu }: Props) {
  return (
    <div className='bg-transparent bg-[url(/banner-bg.png)]'>
      <div className="container mx-auto px-[64px] py-4">
        <div className="flex justify-between items-center">
          <motion.button
            className="text-xl text-primary font-bold hover:text-primary transition-colors cursor-pointer uppercase font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Awill Jay Macalisang
          </motion.button>

          <div className="flex items-center gap-4">
            <motion.div
              className="hidden md:flex space-x-6"
              initial="hidden"
              animate="visible"
            >
              {[
                { href: '#about', label: 'About me' },
                { href: '#skills', label: 'Skills & Tools' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-primary hover:text-primary transition-colors cursor-pointer relative uppercase"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
