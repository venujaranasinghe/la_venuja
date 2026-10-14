"use client"

import React, { useState, useEffect } from "react"
import Container from "@/components/Container"
import FadeIn from "@/components/FadeIn"
import SectionIntro from "@/components/SectionIntro"
import ContributionSkyline from "@/components/ui/contribution-skyline"
import fallbackContributions from "@/constants/github-contributions.json"

export default function GithubContributions() {
  const [contributions, setContributions] = useState(fallbackContributions)

  useEffect(() => {
    let isMounted = true

    async function fetchLiveContributions() {
      try {
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/venujaranasinghe?y=last")
        if (!res.ok) return
        const data = await res.json()
        if (isMounted && data?.contributions && Array.isArray(data.contributions)) {
          setContributions(data.contributions)
        }
      } catch (err) {
        console.warn("Using offline contributions cache:", err)
      }
    }

    fetchLiveContributions()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro title="GitHub Contribution Skyline" />

      <Container className="mt-10 sm:mt-14">
        <FadeIn>
          <div className="relative w-full">
            <ContributionSkyline
              data={contributions}
              defaultView="3d"
              palette="github"
              title={null}
              bordered={false}
              className="p-0 shadow-none"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
