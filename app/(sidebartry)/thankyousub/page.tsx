import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Sparkles, Mail, ArrowRight } from 'lucide-react'
import Script from 'next/script'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background flex flex-col items-center justify-center p-4">
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-722690554/s5eACJbcmN0ZEPrDzdgC',
            'transaction_id': ''
          });
        `}
      </Script>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <CheckCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Thank You for Subscribing!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            We're thrilled to have you on board. Your subscription has been confirmed.
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Your journey begins now</span>
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">What's Next?</h3>
            <ul className="text-sm text-left space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Check your email for a welcome message and important details.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Explore your new features and benefits in your account dashboard.</span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/create" passHref>
            <Button variant="outline">Start Creating Your videos</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}