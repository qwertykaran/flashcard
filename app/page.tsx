"use client"

import { useState, useEffect } from "react"
import { Sparkles, BookOpen, Brain, Rocket, Award, ArrowRight, Lightbulb } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/animated-card"
import { FloatingElement } from "@/components/floating-element"
import { topicIcons } from "@/data/flashcard-topics"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <span className="font-bold text-xl">EduTrack</span>
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/create">Create</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  Learning Made Fun with EduTrack
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create flashcards, take quizzes, and climb the learning ladder! Perfect for students in grades 4-7.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-full max-w-sm space-y-2"
              >
                <Button className="w-full group" size="lg" asChild>
                  <Link href="/create">
                    Start Learning
                    <Sparkles className="ml-2 h-4 w-4 group-hover:animate-spin transition-all" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Floating elements */}
          <FloatingElement className="absolute top-20 left-[10%]" delay={0.5} x={15} y={20}>
            <div className="bg-primary/20 p-3 rounded-full">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </FloatingElement>

          <FloatingElement className="absolute top-40 right-[15%]" delay={0.8} x={-20} y={15}>
            <div className="bg-purple-500/20 p-3 rounded-full">
              <Brain className="h-8 w-8 text-purple-500" />
            </div>
          </FloatingElement>

          <FloatingElement className="absolute bottom-20 left-[20%]" delay={1.2} x={20} y={-15}>
            <div className="bg-green-500/20 p-3 rounded-full">
              <Award className="h-8 w-8 text-green-500" />
            </div>
          </FloatingElement>

          <FloatingElement className="absolute bottom-40 right-[10%]" delay={1.5} x={-15} y={-20}>
            <div className="bg-yellow-500/20 p-3 rounded-full">
              <Rocket className="h-8 w-8 text-yellow-500" />
            </div>
          </FloatingElement>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    <Lightbulb className="h-4 w-4 inline mr-1" /> How It Works
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Fun & Effective Learning</h2>
                  <p className="text-muted-foreground md:text-xl">
                    Our gamified platform creates personalized flashcards and quizzes with images to make learning
                    engaging and memorable.
                  </p>
                </motion.div>
              </div>
              <div className="grid gap-6">
                <AnimatedCard delay={100}>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        1
                      </div>
                      <h3 className="text-xl font-bold">Choose Your Topic</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Select from over 15 exciting topics - from space to animals to history and more!
                    </p>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={300}>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        2
                      </div>
                      <h3 className="text-xl font-bold">Climb the Learning Ladder</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Master flashcards to earn XP and reach checkpoints on your learning journey!
                    </p>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={500}>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        3
                      </div>
                      <h3 className="text-xl font-bold">Track Your Progress</h3>
                    </div>
                    <p className="text-muted-foreground">
                      See your achievements, quiz scores, and learning stats on your personalized dashboard.
                    </p>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore Topics</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Discover our wide range of educational topics for grades 4-7
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Object.entries(topicIcons).map(([topic, Icon], index) => (
                <AnimatedCard key={topic} delay={index * 100} className="aspect-square">
                  <Link
                    href={`/create?topic=${topic}`}
                    className="flex flex-col items-center justify-center h-full text-center gap-2 group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="font-medium capitalize">{topic}</span>
                  </Link>
                </AnimatedCard>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/create">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 EduTrack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

