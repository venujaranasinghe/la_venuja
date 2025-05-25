"use client";
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation'
import React, { useEffect, useId, useRef, useState } from 'react'
import Container from './Container';
import Link from 'next/link';
import Logo from './Logo';
import {HiMenuAlt4} from "react-icons/hi";
import {IoMdClose} from "react-icons/io";

const Header = ({
    panelId,
    invert = false,
    icon: Icon,
    expanded,
    onToggle,
    toggleRef,
}) => {
    // Container
    return (
        <Container>
            <div className='flex items-center justify-between'>
                {/* { logo } */}
                <Link href="/" aria-label="Home">
                    <Logo invert={invert}>la_venuja</Logo>
                </Link>

            </div>
        </Container>
    )
}

const RootLayoutInner = ({ children }) => {
    const panelId = useId();
    const [expanded, setExpanded] = useState(false);
    const openRef = useRef();
    const closeRef = useRef();
    const navRef = useRef();
    const shouldReduceMotion = useReducedMotion();
    useEffect(() => {
        function onClick(event) {
            if (event.target.closest("a")?.href === window.location.href) {
                setExpanded(false);
            }
        }
        window.addEventListener("click", onClick);

        return () => {
            window.removeEventListener("click", onClick);
        }
    }, []);
    return (
        <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
            <header>
                <div
                    className="absolute left-0 right-0 top-0 z-40 pt-14"
                    aria-hidden={expanded ? "true" : undefined}
                    inert={expanded ? "" : undefined}
                >
                    {/* Header */}
                    <Header
                        panelId={panelId}
                        icon={HiMenuAlt4}
                        toggleRef={openRef}
                        expanded={expanded}
                        onToggle={() => {
                            setExpanded((expanded) => !expanded);
                            window.setTimeout(() =>
                                closeRef.current?.focus({ preventScroll: true })
                            );
                        }}
                    />
                </div>
                {children}
            </header>
        </MotionConfig>
    );

}

const RootLayout = ({ children }) => {
    const pathName = usePathname();
    return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
};

export default RootLayout