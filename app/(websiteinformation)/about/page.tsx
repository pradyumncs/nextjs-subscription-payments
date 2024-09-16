import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-100">
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-purple-800">YouShorts.ai</h1>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-purple-900">Create Faceless Videos in Minutes</h2>
          <p className="text-xl text-purple-700 mb-8">
            YouShorts.ai is a comprehensive tool designed to help content creators produce faceless videos for popular platforms in just minutes. Whether you're an experienced influencer or new to content creation, we empower you to craft engaging, professional-looking videos without complex software or editing.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Faceless Videos", description: "Create professional videos without appearing on camera" },
            { title: "Time-Saving", description: "Generate videos in minutes, not hours" },
            { title: "AI-Powered", description: "Leverage AI for script writing, visuals, and timing" },
            { title: "Customizable", description: "Tailor videos to the unique style of short-form content" },
            { title: "Ready to Upload", description: "Get platform-optimized videos with just a few clicks" },
            { title: "For All Skill Levels", description: "User-friendly interface for beginners and experts alike" },
          ].map((feature, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">{feature.title}</h3>
                <p className="text-purple-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-900">Supported Platforms</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "YouTube Shorts",
              "TikTok",
              "Instagram Reels",
              "Snapchat Stories",
              "Facebook Reels"
            ].map((platform, index) => (
              <span key={index} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                {platform}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-900 text-center">Perfect for All Creators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">Behind the Camera Creators</h3>
                <p className="text-purple-700">
                  Ideal for those who prefer staying behind the camera. Produce high-quality videos on any topic without showing your face.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-800">Efficiency Seekers</h3>
                <p className="text-purple-700">
                  Create more content in less time without compromising quality. Perfect for growing your social media presence across multiple platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-purple-900 text-center">Easy to Use, Powerful Results</h2>
          <p className="text-xl text-purple-700 mb-8 text-center">
            Simply input your topic or idea, and YouShorts.ai will automatically generate a video, including scripts, visuals, and timing. With our user-friendly interface, you'll have a ready-to-upload video in just a few clicks.
          </p>
        </section>

        <section className="bg-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Content Creation?</h2>
          <p className="text-xl mb-8">
            Join creators who are using YouShorts.ai to produce engaging videos across YouTube, TikTok, Instagram, Snapchat, and Facebook. Grow your audience, engage viewers, and create impactful content with ease.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-purple-100">
            Start Creating Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-purple-700">
        <p>&copy; 2023 YouShorts.ai. All rights reserved.</p>
      </footer>
    </div>
  )
}