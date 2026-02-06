"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import CategoryCard from "@/components/cards/CategoryCard";
import InfoCard from "@/components/cards/InfoCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Footer from "@/components/elements/Footer";
import { HeroSection } from "@/components/elements/HeroSection";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import Paragraph from "@/components/typography/Paragraph";
import Phrase from "@/components/typography/Phrase";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { landingPageContent } from "@/mocks/landing-page";
import {
  CheckCircleIcon,
  FactoryIcon,
  LeafIcon,
  MapPinIcon,
  RoadHorizonIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  StorefrontIcon,
  TruckIcon
} from "@phosphor-icons/react";
import { useState } from "react";

const featureIconMap = {
  route: <RoadHorizonIcon className="h-6 w-6 text-primary-500" weight="bold" />,
  map: <MapPinIcon className="h-6 w-6 text-primary-500" weight="bold" />,
  shield: (
    <ShieldCheckIcon className="h-6 w-6 text-primary-500" weight="bold" />
  ),
} as const;

const segmentIconMap = {
  store: <StorefrontIcon className="h-7 w-7 text-primary-600" weight="bold" />,
  factory: <FactoryIcon className="h-7 w-7 text-primary-600" weight="bold" />,
  leaf: <LeafIcon className="h-7 w-7 text-primary-600" weight="bold" />,
  bag: <ShoppingBagIcon className="h-7 w-7 text-primary-600" weight="bold" />,
} as const;

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <LandingHeader.Root
        bordered
        className="bg-background/80 backdrop-blur relative"
      >
        <LandingHeader.Left>
          <LandingHeader.Logo
            src="/logo.svg"
            alt={landingPageContent.brand.logoAlt}
          />
          <div className="hidden sm:flex flex-col">
            <Phrase
              content={landingPageContent.brand.name}
              className="text-sm font-semibold text-foreground"
            />
            <Phrase
              content={landingPageContent.brand.tagline}
              className="text-xs text-foreground/60"
            />
          </div>
        </LandingHeader.Left>
        <LandingHeader.Center>
          <LandingHeader.Nav>
            {landingPageContent.navigation.map((item) => (
              <LandingHeader.Nav.Item key={item.label} href={item.href}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>
        <LandingHeader.Right>
          <LandingHeader.MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={setMobileMenuOpen as never}
          />
          <LandingHeader.MobileMenuPanel
            open={mobileMenuOpen}
            cta={
              <LandingHeader.CTA label={landingPageContent.hero.primaryCta} />
            }
          >
            {landingPageContent.navigation.map((item) => (
              <LandingHeader.Nav.Item
                key={`mobile-${item.label}`}
                href={item.href}
              >
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>
          <LandingHeader.CTA
            label={landingPageContent.hero.primaryCta}
            className="hidden sm:inline-flex"
          />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex flex-col">
        <HeroSection
          size="full"
          sectionClassName="relative overflow-hidden bg-gradient-to-b from-primary-50 via-background to-background pt-16 pb-20"
        >
          <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl" />
          <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-primary-200/40 blur-3xl" />
          <div className="relative w-full max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <RevealContainer once className="flex flex-col gap-6">
              <div className="w-fit rounded-full border border-primary-100 bg-white/80 px-4 py-2">
                <Phrase
                  content={landingPageContent.hero.badge}
                  className="text-xs text-primary-700"
                />
              </div>
              <Title
                content={landingPageContent.hero.title}
                className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
              />
              <Paragraph
                content={landingPageContent.hero.subtitle}
                className="text-foreground/70 text-sm sm:text-base"
              />
              <div className="flex flex-wrap items-center gap-3">
                <Button label={landingPageContent.hero.primaryCta} />
                <Button
                  label={landingPageContent.hero.secondaryCta}
                  variant="outlined"
                  className="bg-white"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {landingPageContent.hero.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2">
                    <CheckCircleIcon
                      className="h-5 w-5 text-primary-500"
                      weight="fill"
                    />
                    <Phrase
                      content={highlight}
                      className="text-sm text-foreground/70"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-primary-100 bg-white/80 px-4 py-3 w-fit shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <TruckIcon className="h-5 w-5" weight="bold" />
                </div>
                <div>
                  <Phrase
                    content={landingPageContent.hero.metricLabel}
                    className="text-xs text-foreground/60"
                  />
                  <Subtitle
                    content={landingPageContent.hero.metricValue}
                    className="text-primary-600 text-lg"
                  />
                </div>
              </div>
            </RevealContainer>

            <ZoomContainer once className="relative">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary-100" />
              <div className="absolute -left-6 bottom-4 h-20 w-20 rounded-full bg-primary-200/70" />
              <div className="relative rounded-[28px] border border-primary-200 bg-white shadow-2xl p-6">
                <div className="flex items-center justify-between">
                  <Phrase
                    content={landingPageContent.hero.panel.title}
                    className="text-xs font-semibold text-primary-600"
                  />
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary-300" />
                    <span className="h-2 w-2 rounded-full bg-primary-200" />
                    <span className="h-2 w-2 rounded-full bg-primary-100" />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-[150px_1fr] gap-4">
                  <div className="rounded-2xl bg-primary-50 p-4">
                    <div className="h-2 w-16 rounded-full bg-primary-200" />
                    <div className="mt-4 space-y-3">
                      <div className="h-2 w-full rounded-full bg-primary-100" />
                      <div className="h-2 w-3/4 rounded-full bg-primary-100" />
                      <div className="h-2 w-5/6 rounded-full bg-primary-100" />
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary-200" />
                      <div className="flex-1">
                        <div className="h-2 w-20 rounded-full bg-primary-200" />
                        <div className="mt-2 h-2 w-14 rounded-full bg-primary-100" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-primary-100 p-4">
                      <div className="h-10 w-10 rounded-xl bg-white" />
                      <div className="mt-4 h-2 w-16 rounded-full bg-primary-200" />
                      <div className="mt-2 h-2 w-24 rounded-full bg-primary-200/70" />
                    </div>
                    <div className="rounded-2xl bg-primary-50 p-4">
                      <div className="h-10 w-10 rounded-xl bg-primary-200" />
                      <div className="mt-4 h-2 w-12 rounded-full bg-primary-200" />
                      <div className="mt-2 h-2 w-20 rounded-full bg-primary-200/70" />
                    </div>
                    <div className="rounded-2xl bg-primary-50 p-4">
                      <div className="h-10 w-10 rounded-full bg-primary-200" />
                      <div className="mt-4 h-2 w-20 rounded-full bg-primary-200" />
                      <div className="mt-2 h-2 w-14 rounded-full bg-primary-200/70" />
                    </div>
                    <div className="rounded-2xl bg-primary-100 p-4">
                      <div className="h-10 w-10 rounded-full bg-white" />
                      <div className="mt-4 h-2 w-16 rounded-full bg-primary-200" />
                      <div className="mt-2 h-2 w-24 rounded-full bg-primary-200/70" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3">
                  <Phrase
                    content={landingPageContent.hero.panel.statusLabel}
                    className="text-xs text-primary-700"
                  />
                  <Phrase
                    content={landingPageContent.hero.panel.statusValue}
                    className="text-xs font-semibold text-primary-700"
                  />
                </div>
              </div>
            </ZoomContainer>
          </div>
        </HeroSection>

        <Section size="middle" sectionClassName="relative">
          <div id="solucoes" className="w-full flex flex-col gap-8">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-3">
              <Title content={landingPageContent.features.title} />
              <Paragraph
                content={landingPageContent.features.subtitle}
                className="text-foreground/70"
              />
            </div>
            <FadeContainer once className="w-full">
              <div className="grid gap-6 md:grid-cols-3">
                {landingPageContent.features.items.map((feature) => (
                  <InfoCard
                    key={feature.title}
                    title={feature.title}
                    text={feature.text}
                    icon={featureIconMap[feature.icon]}
                    itemsPosition="left"
                  />
                ))}
              </div>
            </FadeContainer>
          </div>
        </Section>

        <Section size="full" sectionClassName="pt-0 bg-white pt-12">
          <div
            id="segmentos"
            className="w-screen max-w-7xl flex flex-col gap-10"
          >
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-3">
              <Title content={landingPageContent.segments.title} />
              <Paragraph
                content={landingPageContent.segments.subtitle}
                className="text-foreground/70"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {landingPageContent.segments.items.map((segment) => (
                <CategoryCard
                  key={segment.name}
                  name={segment.name}
                  href={segment.href}
                  icon={segmentIconMap[segment.icon]}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section size="full" sectionClassName="pt-8">
          <div
            id={landingPageContent.control.id}
            className="w-screen max-w-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center"
          >
            <RevealContainer once className="flex flex-col gap-5">
              <Subtitle
                content={landingPageContent.control.eyebrow}
                className="text-primary-600"
              />
              <Title content={landingPageContent.control.title} />
              <Paragraph
                content={landingPageContent.control.subtitle}
                className="text-foreground/70"
              />
              <div className="flex flex-col gap-3">
                {landingPageContent.control.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2">
                    <CheckCircleIcon
                      className="h-5 w-5 text-primary-500"
                      weight="fill"
                    />
                    <Phrase
                      content={bullet}
                      className="text-sm text-foreground/70"
                    />
                  </div>
                ))}
              </div>
              <Button
                label={landingPageContent.control.cta}
                className="mt-2"
                variant="outlined"
              />
            </RevealContainer>
            <div className="relative">
              <div className="absolute -left-6 top-8 rounded-2xl border border-primary-100 bg-white px-4 py-3 shadow-lg">
                <Phrase
                  content={landingPageContent.control.arrivalLabel}
                  className="text-xs text-primary-700"
                />
                <Subtitle
                  content={landingPageContent.control.arrivalValue}
                  className="text-primary-700 text-base"
                />
              </div>
              <div className="rounded-[28px] bg-primary-700 text-white p-8 shadow-2xl">
                <Phrase
                  content={landingPageContent.control.panel.label}
                  className="text-xs uppercase tracking-[0.2em] text-white/70"
                />
                <Title
                  content={landingPageContent.control.panel.title}
                  className="text-white text-2xl sm:text-3xl"
                />
                <Paragraph
                  content={landingPageContent.control.panel.description}
                  className="text-white/80"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {landingPageContent.control.panel.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/10 p-4"
                    >
                      <Phrase
                        content={stat.label}
                        className="text-xs text-white/70"
                      />
                      <Subtitle content={stat.value} className="text-white" />
                    </div>
                  ))}
                </div>
                <Button
                  label={landingPageContent.control.panel.button}
                  className="mt-6 bg-white text-primary-700"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section size="middle" sectionClassName="pt-8">
          <div id="historias" className="w-full flex flex-col gap-8">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-3">
              <Title content={landingPageContent.stories.title} />
              <Paragraph
                content={landingPageContent.stories.subtitle}
                className="text-foreground/70"
              />
            </div>
            <FadeContainer once className="w-full">
              <div className="grid gap-6 lg:grid-cols-3">
                {landingPageContent.stories.items.map((story) => (
                  <TestimonialCard
                    key={story.name}
                    avatarUrl={story.avatarUrl}
                    userName={story.name}
                    userRole={story.role}
                    rating={story.rating}
                    testimonial={story.testimonial}
                  />
                ))}
              </div>
            </FadeContainer>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="relative overflow-hidden bg-primary-700 text-white py-12"
        >
          <div
            id="contato"
            className="relative w-full max-w-5xl flex flex-col items-center text-center gap-4 "
          >
            <Subtitle
              content={landingPageContent.cta.eyebrow}
              className="text-white/80"
            />
            <Title
              content={landingPageContent.cta.title}
              className="text-white text-3xl sm:text-4xl"
            />
            <Paragraph
              content={landingPageContent.cta.subtitle}
              className="text-white/80"
            />
            <Button
              label={landingPageContent.cta.button}
              className="bg-white text-primary-700"
              variant="outlined"
            />
          </div>
        </Section>
      </main>

      <Footer.Root className="mt-0">
        <Footer.Top columns={4}>
          {landingPageContent.footer.columns.map((column) => (
            <Footer.Column
              key={column.title}
              title={column.title}
              items={column.items as never}
            />
          ))}
        </Footer.Top>
        <Footer.SocialRow
          title={landingPageContent.footer.socialTitle}
          items={landingPageContent.footer.socials as never}
          iconsClassName="text-primary-500"
        />
        <Footer.Bottom>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full text-center sm:text-left">
            <Phrase
              content={landingPageContent.footer.bottomText}
              className="text-xs text-foreground/60"
            />
            <Phrase
              content={landingPageContent.footer.address}
              className="text-xs text-foreground/60"
            />
          </div>
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
