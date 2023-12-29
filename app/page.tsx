import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Card className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-8">
          <Avatar className="mx-auto h-32 w-32">
            <AvatarImage alt="User Avatar" src="/placeholder.svg?height=128&width=128" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="mt-6 text-center">
            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
              <Label className="text-white" htmlFor="picture">
                Upload Image
              </Label>
              <Input
                className="border-transparent focus:ring-2 focus:ring-orange-500 rounded-md text-white bg-orange-600 hover:bg-orange-700"
                id="picture"
                type="file"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}