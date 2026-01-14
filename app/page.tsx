"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const router = useRouter()

  const handleEnter = () => {
    if (date) {
      // Format date as YYYY-MM-DD
      const formattedDate = date.toISOString().split("T")[0]
      router.push(`/posts?birthdate=${formattedDate}`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-serif text-balance">A Space for You</CardTitle>
          <CardDescription className="text-base text-pretty">
            Select your birthdate to read the words meant for you
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => date > new Date()}
          />
          <Button onClick={handleEnter} disabled={!date} className="w-full" size="lg">
            Enter
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
