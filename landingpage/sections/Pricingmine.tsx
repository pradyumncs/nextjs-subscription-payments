'use client'

import { useState } from 'react'
import { Check, Diamond, Zap } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type PricingTier = {
  name: string
  description: string
  monthlyPrice: number
  features: Array<{ name: string; included: boolean; highlight?: boolean }>
  popular?: boolean
  monthlyUrl: string
  yearlyUrl: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    description: 'Generate 12 videos per month',
    monthlyPrice: 15,
    features: [
      { name: '120 credits', included: true, highlight: true },
      { name: 'Unlimited Editor', included: true },
      { name: '6 AI Voices', included: true },
      { name: 'AI Image Generation', included: true },
      { name: 'No Watermark', included: true },
      { name: 'English Only', included: false },
      { name: 'Unlimited Stock Footage', included: false },
      { name: 'Regenerate Voice Script', included: false },
      { name: 'Standard Resolution', included: false },
    ],
    monthlyUrl: 'https://youshorts.onfastspring.com/1-month-starter-subscription',
    yearlyUrl: 'https://youshorts.onfastspring.com/1-year-starter-subscription',
  },
  {
    name: 'Daily',
    description: 'Generate 30 videos per month',
    monthlyPrice: 29,
    features: [
      { name: '300 credits', included: true, highlight: true },
      { name: 'Unlimited Editor', included: true },
      { name: '6 AI Voices', included: true },
      { name: 'Unlimited Stock Footage', included: true },
      { name: 'AI Image Generation', included: true },
      { name: '29 Languages', included: true },
      { name: 'No Watermark', included: true },
      { name: 'Regenerate Voice Script', included: true },
      { name: 'HD Resolution', included: true },
      { name: 'Discord Support', included: true },
    ],
    monthlyUrl: 'https://youshorts.onfastspring.com/1-month-daily-subscription',
    yearlyUrl: 'https://youshorts.onfastspring.com/1-year-daily-subscription',
  },
  {
    name: 'Premium',
    description: 'Generate 60 videos per month',
    monthlyPrice: 49,
    features: [
      { name: '600 credits', included: true, highlight: true },
      { name: 'Unlimited Editor', included: true },
      { name: '6 AI Voices', included: true },
      { name: 'Unlimited Stock Footage', included: true },
      { name: 'AI Image Generation', included: true },
      { name: '29 Languages', included: true },
      { name: 'No Watermark', included: true },
      { name: 'Regenerate Voice Script', included: true },
      { name: 'HD Resolution', included: true },
      { name: 'Discord Support', included: true },
    ],
    popular: true,
    monthlyUrl: 'https://youshorts.onfastspring.com/1-month-premium-subscription',
    yearlyUrl: 'https://youshorts.onfastspring.com/1-year-premium-subscription',
  },
  {
    name: 'Massive',
    description: 'Generate 120 videos per month',
    monthlyPrice: 89,
    features: [
      { name: '1200 credits', included: true, highlight: true },
      { name: 'Unlimited Editor', included: true },
      { name: '6 voices', included: true },
      { name: 'Unlimited Stock Footage', included: true },
      { name: 'AI Image Generation', included: true },
      { name: '29 Languages', included: true },
      { name: 'No Watermark', included: true },
      { name: 'Regenerate Voice Script', included: true },
      { name: 'HD Resolution', included: true },
      { name: 'Discord Support', included: true },
    ],
    monthlyUrl: 'https://youshorts.onfastspring.com/1-month-massive-subscription',
    yearlyUrl: 'https://youshorts.onfastspring.com/1-year-massive-subscription',
  },
]

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false)

  const getYearlyPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.7)
  }

  const getMonthlyPriceFromYearly = (monthlyPrice: number) => {
    return Math.round(getYearlyPrice(monthlyPrice) / 12)
  }

  return (
    <div className="py-12 sm:py-12 bg-gradient-to-b from-white to-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center pb-10">
            <div className="tag">Pricing</div>
          </div>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the perfect plan for your needs
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Unlock the power of AI-generated videos with our flexible pricing options. 
          Start creating stunning content today!
        </p>
        <div className="mt-16 flex items-center justify-center gap-x-4">
          <Label htmlFor="yearly-pricing" className={`text-sm ${isYearly ? 'text-muted-foreground' : ''}`}>Monthly billing</Label>
          <Switch
            id="yearly-pricing"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="yearly-pricing" className={`text-sm ${!isYearly ? 'text-muted-foreground' : ''}`}>Annual billing</Label>
          {isYearly && (
            <span className="ml-3 text-sm font-medium text-green-500 bg-green-100 rounded-full px-3 py-1">
              Save 30%
            </span>
          )}
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col justify-between relative ${tier.popular ? 'border-purple-600 border-2 shadow-purple-100 shadow-lg' : ''}`}>
              {tier.popular && (
                <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-3 py-1 text-sm font-semibold">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${isYearly ? getMonthlyPriceFromYearly(tier.monthlyPrice) : tier.monthlyPrice}
                  </span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </div>
                {isYearly && (
                  <p className="mt-1 text-sm text-gray-500">
                    ${getYearlyPrice(tier.monthlyPrice)} billed annually
                  </p>
                )}
                <ul role="list" className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      {feature.included ? (
                        feature.highlight ? (
                          <Diamond className="h-6 w-5 flex-shrink-0 text-purple-500" aria-hidden="true" />
                        ) : (
                          <Check className="h-6 w-5 flex-shrink-0 text-purple-500" aria-hidden="true" />
                        )
                      ) : (
                        <span className="h-6 w-5 flex-shrink-0" aria-hidden="true" />
                      )}
                      <span className={`ml-3 text-sm ${feature.included ? 'text-gray-500' : 'text-gray-300'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors text-lg py-6 font-semibold" 
                  onClick={() => window.open(isYearly ? tier.yearlyUrl : tier.monthlyUrl, '_blank')}
                >
                  Buy
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}