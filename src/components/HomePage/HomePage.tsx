/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k4JRNpNhCXk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { AnimatePresence, motion } from 'framer-motion'
import { Footer } from './Footer'
import { Features } from './Features'
import { Header } from './Header'
export default function Component() {
  const [showSignIn, setShowSignIn] = useState(true)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSignInSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      })
      const data = await response.json()
      console.log('Sign In Response:', data)
    } catch (error) {
      console.error('Error during sign in:', error)
    }
  }

  const handleCreateAccountSubmit = async (e) => {
    console.log('hello')
    e.preventDefault()
    try {
      const response = await fetch('/api/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      })
      const data = await response.json()
      console.log('Create Account Response:', data)
    } catch (error) {
      console.error('Error during account creation:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="flex h-screen w-full items-center">
          <div className="mx-auto space-y-10 px-4 md:px-6 xl:space-y-16">
            <div className="mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
              <div>
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
                  className="lg:leading-tighter mb-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]"
                >
                  Type Faster with KeyLabs
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.75,
                    ease: [0.5, 1, 0.89, 1],
                  }}
                  className="text-muted-foreground mx-auto max-w-[700px] md:text-xl"
                >
                  KeyLabs is a web-based game designed to help you improve your
                  typing skills through engaging and interactive gameplay.
                  Inspired by Aim Labs, KeyLabs combines typing speed and
                  accuracy challenges with interactive elements to make learning
                  fun and effective.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 2,
                    duration: 1,
                    ease: [0.5, 1, 0.89, 1],
                  }}
                  className="mt-6 space-x-4"
                >
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 2,
                  duration: 1,
                  ease: [0.5, 1, 0.89, 1],
                }}
                className="flex flex-col items-start space-y-4"
              >
                <AnimatePresence mode="wait">
                  {showSignIn ? (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
                      className="w-full max-w-[400px] sm:max-w-[450px]"
                    >
                      <Card>
                        <CardHeader className="space-y-1">
                          <CardTitle className="text-2xl">Sign In</CardTitle>
                          <CardDescription>
                            Enter your credentials to access your account.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              className="text-black"
                              id="name"
                              type="text"
                              placeholder="John Doe"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              className="text-black"
                              id="password"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                          <Button onClick={() => setShowSignIn(!showSignIn)}>
                            {showSignIn ? 'Create Account' : 'Sign In'}
                          </Button>
                          <Button
                            className="w-[150px]"
                            onClick={handleSignInSubmit}
                          >
                            Sign In
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-full max-w-[400px] sm:max-w-[450px]"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
                    >
                      <Card>
                        <CardHeader className="space-y-1">
                          <CardTitle className="text-2xl">
                            Create an Account
                          </CardTitle>
                          <CardDescription>
                            Enter your details to get started.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              className="text-black"
                              id="name"
                              type="text"
                              placeholder="John Doe"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              className="text-black"
                              id="password"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                          <Button onClick={() => setShowSignIn(!showSignIn)}>
                            {showSignIn ? 'Create Account' : 'Sign In'}
                          </Button>
                          <Button
                            className="w-[150px]"
                            onClick={handleCreateAccountSubmit}
                          >
                            Create Account
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  )
}