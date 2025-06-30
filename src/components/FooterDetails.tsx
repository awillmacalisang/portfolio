'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

export default function FooterDetails() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);

    return (
        <div>
            <motion.footer
                className="py-[24px] px-[24] bg-[#030712]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto text-center mb-[24px]">
                    <motion.p
                        className="text-white font-[poppins] text-[72px] font-extrabold uppercase"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        AWILL JAY <span className='font-[poppins] text-[72px] font-extrabold uppercase text-transparent stroke-white'>MACALISANG</span>
                    </motion.p>
                </div>
                <div className="container mx-auto text-center border-t border-white pt-[33px]">
                    <motion.p
                        className="text-white uppercase"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        © {year} Awill. All rights reserved. | <a href="#" className='underline'>REM WAS HERE</a>
                    </motion.p>
                </div>
            </motion.footer>
        </div>
    );
}

