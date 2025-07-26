import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page Not Found - 404",
  description: "The page you're looking for doesn't exist. Return to Venuja Ranasinghe's portfolio homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

const NotFound = () => {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
      <FadeIn className="flex flex-col items-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl" role="status">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Sorry, we couldn't find the page you are looking for.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          aria-label="Return to homepage"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </Container>
  );
};

export default NotFound;