"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Sparkles,
  BarChart3,
  Trophy,
  Clock,
  ArrowUpRight,
  Star,
  Zap,
  Award,
  Flag,
  Trash2,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Define checkpoints for the learning ladder
const checkpoints = [
  { id: 1, name: "Beginner", cards: 1, icon: Star, color: "text-blue-500", xpRequired: 0 },
  { id: 2, name: "Explorer", cards: 2, icon: Zap, color: "text-green-500", xpRequired: 20 },
  { id: 3, name: "Scholar", cards: 3, icon: Award, color: "text-yellow-500", xpRequired: 50 },
  { id: 4, name: "Expert", cards: 4, icon: Trophy, color: "text-orange-500", xpRequired: 100 },
  { id: 5, name: "Master", cards: 5, icon: Flag, color: "text-red-500", xpRequired: 150 },
]

// Mock data for the dashboard
const mockQuizHistory = [
  { id: 1, topic: "Monuments", score: 4, total: 5, date: "2025-03-25", xpEarned: 80, level: 3 },
  { id: 2, topic: "Space", score: 3, total: 5, date: "2025-03-24", xpEarned: 60, level: 2 },
  { id: 3, topic: "Animals", score: 5, total: 5, date: "2025-03-23", xpEarned: 100, level: 4 },
  { id: 4, topic: "Monuments", score: 3, total: 5, date: "2025-03-22", xpEarned: 50, level: 2 },
  { id: 5, topic: "Space", score: 4, total: 5, date: "2025-03-21", xpEarned: 70, level: 3 },
]

const mockTopics = [
  { name: "Monuments", quizzesTaken: 2, totalCards: 10, masteredCards: 7, xpEarned: 130, level: 4 },
  { name: "Space", quizzesTaken: 2, totalCards: 10, masteredCards: 7, xpEarned: 130, level: 4 },
  { name: "Animals", quizzesTaken: 1, totalCards: 5, masteredCards: 5, xpEarned: 100, level: 4 },
]

const mockAchievements = [
  { id: 1, name: "Perfect Score", description: "Get 100% on a quiz", earned: true, date: "2025-03-23" },
  { id: 2, name: "Quiz Streak", description: "Complete 3 quizzes in a row", earned: true, date: "2025-03-25" },
  { id: 3, name: "Topic Master", description: "Master all cards in a topic", earned: true, date: "2025-03-23" },
  { id: 4, name: "Knowledge Explorer", description: "Study 5 different topics", earned: false, date: null },
  { id: 5, name: "XP Champion", description: "Earn 500 XP total", earned: false, date: null },
  { id: 6, name: "Learning Ladder Master", description: "Reach Master level on any topic", earned: false, date: null },
]

export default function Dashboard() {
  const [totalQuizzes, setTotalQuizzes] = useState(0)
  const [averageScore, setAverageScore] = useState(0)
  const [streakDays, setStreakDays] = useState(0)
  const [masteredCards, setMasteredCards] = useState(0)
  const [totalCards, setTotalCards] = useState(0)
  const [totalXp, setTotalXp] = useState(0)
  const [highestLevel, setHighestLevel] = useState(0)
  const [quizResults, setQuizResults] = useState([])

  // Function to load data from localStorage or use mock data
  const loadData = () => {
    try {
      const savedResults = JSON.parse(localStorage.getItem("quizResults") || "[]")
      if (savedResults.length > 0) {
        setQuizResults(savedResults)

        // Calculate statistics from saved results
        setTotalQuizzes(savedResults.length)

        const totalScore = savedResults.reduce((sum, quiz) => sum + quiz.score, 0)
        const totalPossible = savedResults.reduce((sum, quiz) => sum + quiz.total, 0)
        setAverageScore(Math.round((totalScore / totalPossible) * 100))

        // Calculate total XP
        const xp = savedResults.reduce((sum, quiz) => sum + quiz.xpEarned, 0)
        setTotalXp(xp)

        // Find highest level achieved
        const maxLevel = Math.max(...savedResults.map((quiz) => quiz.level))
        setHighestLevel(maxLevel)
      } else {
        // Use mock data if no saved results
        setQuizResults(mockQuizHistory)
        setTotalQuizzes(mockQuizHistory.length)

        const totalScore = mockQuizHistory.reduce((sum, quiz) => sum + quiz.score, 0)
        const totalPossible = mockQuizHistory.reduce((sum, quiz) => sum + quiz.total, 0)
        setAverageScore(Math.round((totalScore / totalPossible) * 100))

        const xp = mockQuizHistory.reduce((sum, quiz) => sum + quiz.xpEarned, 0)
        setTotalXp(xp)

        const maxLevel = Math.max(...mockQuizHistory.map((quiz) => quiz.level))
        setHighestLevel(maxLevel)
      }
    } catch (error) {
      console.error("Error loading quiz results:", error)
      setQuizResults(mockQuizHistory)
      setTotalQuizzes(mockQuizHistory.length)

      const totalScore = mockQuizHistory.reduce((sum, quiz) => sum + quiz.score, 0)
      const totalPossible = mockQuizHistory.reduce((sum, quiz) => sum + quiz.total, 0)
      setAverageScore(Math.round((totalScore / totalPossible) * 100))

      const xp = mockQuizHistory.reduce((sum, quiz) => sum + quiz.xpEarned, 0)
      setTotalXp(xp)

      const maxLevel = Math.max(...mockQuizHistory.map((quiz) => quiz.level))
      setHighestLevel(maxLevel)
    }

    // Set streak days (mock data for now)
    setStreakDays(3)

    // Set mastered cards data (mock data for now)
    const mastered = mockTopics.reduce((sum, topic) => sum + topic.masteredCards, 0)
    const total = mockTopics.reduce((sum, topic) => sum + topic.totalCards, 0)
    setMasteredCards(mastered)
    setTotalCards(total)
  }

  // Load data on component mount
  useEffect(() => {
    loadData()
  }, [])

  // Function to clear quiz history
  const clearHistory = () => {
    localStorage.removeItem("quizResults")
    setQuizResults([])
    setTotalQuizzes(0)
    setAverageScore(0)
    setTotalXp(0)
    setHighestLevel(0)
  }

  // Function to reset all dashboard data
  const resetDashboard = () => {
    localStorage.clear() // Clear all localStorage data
    loadData() // Reload with mock data
  }

  // Find the current checkpoint based on XP
  const getCurrentCheckpoint = (xp) => {
    for (let i = checkpoints.length - 1; i >= 0; i--) {
      if (xp >= checkpoints[i].xpRequired) {
        return checkpoints[i]
      }
    }
    return checkpoints[0]
  }

  const currentCheckpoint = getCurrentCheckpoint(totalXp)
  const nextCheckpoint = checkpoints.find((cp) => cp.xpRequired > totalXp) || checkpoints[checkpoints.length - 1]
  const xpProgress =
    nextCheckpoint.xpRequired > currentCheckpoint.xpRequired
      ? ((totalXp - currentCheckpoint.xpRequired) / (nextCheckpoint.xpRequired - currentCheckpoint.xpRequired)) * 100
      : 100

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6" />
              <span className="font-bold">EduTrack</span>
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

      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="flex gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear History
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Clear Quiz History</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will remove all your quiz history. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={clearHistory} className="bg-red-500 hover:bg-red-600">
                      Clear History
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Reset Dashboard
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Reset Dashboard</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will reset all your dashboard data including quiz history, XP, and progress. This action
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={resetDashboard} className="bg-red-500 hover:bg-red-600">
                      Reset Dashboard
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button asChild>
                <Link href="/create">
                  New Quiz
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Learning Ladder Status */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  {currentCheckpoint && (
                    <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/30">
                      {React.createElement(currentCheckpoint.icon, {
                        className: `h-10 w-10 ${currentCheckpoint.color}`,
                      })}
                      <span className="font-bold mt-1">{currentCheckpoint.name}</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 space-y-2 w-full">
                  <div className="flex justify-between">
                    <span className="font-medium">Learning Progress</span>
                    <span className="text-sm">
                      {totalXp} XP / {nextCheckpoint.xpRequired} XP
                    </span>
                  </div>
                  <Progress value={xpProgress} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{currentCheckpoint.name}</span>
                    <span>{nextCheckpoint.name}</span>
                  </div>
                  <p className="text-sm mt-2">
                    {nextCheckpoint.xpRequired > totalXp
                      ? `Earn ${nextCheckpoint.xpRequired - totalXp} more XP to reach ${nextCheckpoint.name} level!`
                      : "You've reached the highest level! Keep learning to maintain your mastery."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalQuizzes}</div>
                <p className="text-xs text-muted-foreground">+{Math.floor(totalQuizzes * 0.2)} from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageScore}%</div>
                <Progress value={averageScore} className="h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total XP</CardTitle>
                <Sparkles className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalXp} XP</div>
                <p className="text-xs text-muted-foreground">Level {highestLevel} achieved</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cards Mastered</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {masteredCards}/{totalCards}
                </div>
                <Progress value={(masteredCards / totalCards) * 100} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="history" className="space-y-4">
            <TabsList>
              <TabsTrigger value="history">Quiz History</TabsTrigger>
              <TabsTrigger value="topics">Topics</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="ladder">Learning Ladder</TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Quizzes</CardTitle>
                  <CardDescription>You've completed {totalQuizzes} quizzes in total.</CardDescription>
                </CardHeader>
                <CardContent>
                  {quizResults.length > 0 ? (
                    <div className="space-y-2">
                      {quizResults.map((quiz) => (
                        <div key={quiz.id} className="flex items-center justify-between border-b py-2 last:border-0">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{quiz.topic}</p>
                              <p className="text-xs text-muted-foreground">{quiz.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              {quiz.score}/{quiz.total}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ({Math.round((quiz.score / quiz.total) * 100)}%)
                            </span>
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              +{quiz.xpEarned} XP
                            </Badge>
                            {quiz.score === quiz.total && (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Perfect
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No quiz history available. Take a quiz to see your results here!</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All History
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Over Time</CardTitle>
                  <CardDescription>Your quiz scores from the past 5 quizzes.</CardDescription>
                </CardHeader>
                <CardContent>
                  {quizResults.length > 0 ? (
                    <div className="h-[200px] flex items-end gap-2 border-b border-l">
                      {quizResults.slice(0, 5).map((quiz, index) => {
                        const percentage = (quiz.score / quiz.total) * 100
                        return (
                          <div key={quiz.id} className="relative flex flex-col items-center flex-1">
                            <div
                              className="w-full bg-primary/80 rounded-t-sm"
                              style={{ height: `${percentage * 1.6}px` }}
                            ></div>
                            <span className="text-xs mt-2">{quiz.topic.substring(0, 3)}</span>
                            <span className="text-xs text-muted-foreground">{percentage}%</span>
                            <Badge variant="outline" className="text-[10px] mt-1 px-1">
                              +{quiz.xpEarned} XP
                            </Badge>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground h-[200px] flex items-center justify-center">
                      <p>No performance data available. Take quizzes to see your progress!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="topics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Topic Mastery</CardTitle>
                  <CardDescription>Your progress across different study topics.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockTopics.map((topic) => (
                      <div key={topic.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{topic.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {topic.quizzesTaken} quizzes taken • Level {topic.level}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {topic.xpEarned} XP
                            </Badge>
                            <span className="text-sm font-medium">
                              {topic.masteredCards}/{topic.totalCards} cards
                            </span>
                          </div>
                        </div>
                        <Progress value={(topic.masteredCards / topic.totalCards) * 100} className="h-2" />
                        {topic.masteredCards === topic.totalCards && (
                          <div className="flex justify-end">
                            <Badge className="bg-primary/10 text-primary border-primary/20">Mastered</Badge>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Explore New Topics
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Achievements</CardTitle>
                  <CardDescription>Badges and milestones you've earned through studying.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {mockAchievements.map((achievement) => (
                      <Card
                        key={achievement.id}
                        className={`border ${achievement.earned ? "bg-primary/5" : "bg-muted/50"}`}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">
                            {achievement.name}
                            {achievement.earned && <Trophy className="h-4 w-4 text-yellow-500 inline ml-2" />}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{achievement.description}</p>
                          {achievement.earned ? (
                            <p className="text-xs text-muted-foreground mt-2">Earned on {achievement.date}</p>
                          ) : (
                            <p className="text-xs text-muted-foreground mt-2">Not yet earned</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ladder" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Ladder</CardTitle>
                  <CardDescription>Track your progress through the learning levels.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="relative pt-10">
                      {/* Checkpoint line */}
                      <div className="absolute top-16 left-0 right-0 h-1 bg-muted-foreground/20"></div>

                      {/* Checkpoints */}
                      <div className="flex justify-between relative">
                        {checkpoints.map((checkpoint, index) => {
                          const CheckpointIcon = checkpoint.icon
                          const isActive = totalXp >= checkpoint.xpRequired
                          const isCurrent = currentCheckpoint.id === checkpoint.id

                          return (
                            <div
                              key={checkpoint.id}
                              className={`flex flex-col items-center ${
                                isActive ? checkpoint.color : "text-muted-foreground/40"
                              } ${isCurrent ? "scale-110 transition-transform" : ""}`}
                            >
                              <div
                                className={`flex flex-col items-center justify-center w-12 h-12 rounded-full ${
                                  isActive
                                    ? "bg-primary/20 border-2 border-primary/30"
                                    : "bg-muted border-2 border-muted-foreground/20"
                                }`}
                              >
                                <CheckpointIcon
                                  className={`size-6 ${isActive ? "text-current" : "text-muted-foreground/40"}`}
                                />
                              </div>
                              <span className="text-sm mt-2 font-medium">{checkpoint.name}</span>
                              <span className="text-xs mt-1">{checkpoint.xpRequired} XP</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Level Benefits</h3>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-blue-50 border-blue-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-blue-700">Beginner</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-xs text-blue-700 space-y-1">
                              <li>• Access to basic flashcards</li>
                              <li>• Simple quizzes</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="bg-green-50 border-green-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-green-700">Explorer</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-xs text-green-700 space-y-1">
                              <li>• Access to intermediate flashcards</li>
                              <li>• Unlock achievement tracking</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="bg-yellow-50 border-yellow-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-yellow-700">Scholar</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-xs text-yellow-700 space-y-1">
                              <li>• Access to advanced flashcards</li>
                              <li>• Detailed performance analytics</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="bg-orange-50 border-orange-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-orange-700">Expert</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-xs text-orange-700 space-y-1">
                              <li>• Access to expert flashcards</li>
                              <li>• Create custom study sets</li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="bg-red-50 border-red-200">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-red-700">Master</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="text-xs text-red-700 space-y-1">
                              <li>• Access to all content</li>
                              <li>• Special Master badge</li>
                              <li>• Create and share study materials</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
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

