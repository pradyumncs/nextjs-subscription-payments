import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
export default function Refund() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Youshorts.ai Terms & Conditions</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated September 7th, 2024</p>

      <section className="space-y-4">
        <p>Welcome to Youshorts.ai!</p>

        <p>
          These terms and conditions outline the rules and regulations for the use of Youshorts.ai's Website, located at{' '}
          <Link href="https://youshorts.ai" className="text-blue-600 hover:underline">
            https://youshorts.ai
          </Link>
       </p>
     </section>
      <Card className="w-full max-w-3xl mx-auto mt-16">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Refund Policy</CardTitle>
        <CardDescription>Last updated: September 7, 2024</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
      
          <h2>No Refund Policy</h2>
       
            Due to the nature of our SaaS product, we do not offer refunds for any purchases or subscriptions.
         

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Detailed Information</h3>
          <p>
            At Youshorts.ai, we are committed to providing high-quality service and customer satisfaction. However, as a Software as a Service (SaaS) product, we have a strict no-refund policy. Here's why:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immediate Access: Upon purchase, you gain immediate access to our full suite of features and services.</li>
            <li>Ongoing Service: Our product is continuously available and maintained, with regular updates and improvements.</li>
            <li>Usage of Resources: Even if you decide not to use the service, we allocate resources to maintain your account and data.</li>
            <li>Non-Tangible Nature: As a digital service, the product cannot be "returned" in the traditional sense.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Exceptions</h3>
          <p>
            While we maintain a no-refund policy, we understand that exceptional circumstances may arise. In such cases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Technical Issues: If you experience persistent technical issues that we are unable to resolve, we may consider a partial or full refund on a case-by-case basis.</li>
            <li>Billing Errors: In the event of a billing error on our part, we will promptly correct the issue and refund any overcharged amounts.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Cancellation</h3>
          <p>
            You may cancel your subscription at any time. Upon cancellation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your account will remain active until the end of the current billing period.</li>
            <li>You will not be charged for any subsequent billing periods.</li>
            <li>No partial refunds will be issued for the remainder of the current billing period.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Customer Satisfaction</h3>
          <p>
            While we do not offer refunds, we are committed to ensuring your satisfaction with our service. If you have any issues or concerns, please contact our customer support team. We will work diligently to address your concerns and improve your experience with Youshorts.ai.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          By using our service, you acknowledge that you have read, understood, and agree to this refund policy. If you have any questions about this policy, please contact us at support@youshorts.ai.
        </p>
      </CardContent>
    </Card>
    </div>
  )
}