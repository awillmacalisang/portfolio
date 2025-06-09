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
                className="py-4 px-4 border-t bg-muted/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto text-center">
                    <motion.p
                        className="text-muted-foreground"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        © {year} Awill Dev. All rights reserved.
                    </motion.p>
                </div>
            </motion.footer>
        </div>
    );
}

