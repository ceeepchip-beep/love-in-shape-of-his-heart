import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import PostsContent from "@/components/posts-content"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, PenSquare } from "lucide-react"

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <Button variant="outline" size="sm">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/create">
            <Button size="sm">
              <PenSquare className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-2 text-balance">Words for You</h1>
          <p className="text-muted-foreground text-pretty">Messages written with you in mind</p>
        </div>
        <Suspense fallback={<Skeleton className="h-48 w-full" />}>
          <PostsContent />
        </Suspense>
      </div>
    </div>
  )
}
