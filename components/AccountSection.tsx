'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

interface AccountSectionProps {
  isPro: boolean;
}

export default function AccountSection({ isPro }: AccountSectionProps) {
  const handleManageSubscription = () => {
    window.location.href = 'https://youshorts.onfastspring.com/account';
  };

  const handleCancelSubscription = () => {
    // Add cancellation logic here
    window.location.href = 'https://youshorts.onfastspring.com/account';
  };

  const handleUpgrade = () => {
    // Add upgrade logic here
    window.location.href = 'https://youshorts.ai/pricing';
  };

  return (
    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto">
      {isPro ? (
        <Card className="flex flex-col justify-between border-2 border-purple-500 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-purple-700">Pro Subscription</CardTitle>
            <CardDescription>You're enjoying all the benefits of YouShorts Pro!</CardDescription>
            <CardDescription> We partnered with FastSpring for a simplified billing and Subscription.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <StarIcon className="w-16 h-16 text-yellow-400 mb-4" />
            <p className="text-center text-gray-600 mb-4">
              
              To cancel Enter your Email inside the Link and Press Cancel
            </p>
            <Button 
              className="w-full max-w-xs bg-purple-600 hover:bg-purple-700 text-white mb-2"
              onClick={handleManageSubscription}
            >
              Manage Subscription
            </Button>
            <Button 
              className="w-full max-w-xs bg-red-600 hover:bg-red-700 text-white"
              onClick={handleCancelSubscription}
            >
              Cancel Subscription
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="flex flex-col justify-between border-2 border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-700">Free Account</CardTitle>
            <CardDescription>Upgrade to Pro to unlock all features!</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <StarIcon className="w-10 h-10 text-gray-400" />
            </div>
            <Button 
              className="w-full max-w-xs bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
              onClick={handleUpgrade}
            >
              Upgrade to Pro
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}