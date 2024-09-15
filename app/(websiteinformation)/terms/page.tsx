import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
export default function TermsOfService() {
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
          .
        </p>

        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Youshorts.ai if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <p>
          Images uploaded to Youshorts.ai are not added to the Youshorts.ai database nor are they made accessible to any other users. Copyright for all images submitted to Youshorts.ai remains with the original owner/author.
        </p>

        <p>
          Youshorts.ai search results link to third-party websites that are not owned or controlled by Youshorts.ai. Youshorts.ai assumes no responsibility for the content, privacy policies, or practices of any third-party websites.
        </p>

        <p>
          Additionally, Youshorts.ai utilizes YouTube API Services. Youshorts.ai Users are agreeing to be bound by the YouTube Terms of Service as specified here:{' '}
          <Link href="https://www.youtube.com/t/terms" className="text-blue-600 hover:underline">
            https://www.youtube.com/t/terms
          </Link>{' '}
          and the Google Privacy Policy as specified here:{' '}
          <Link href="https://www.google.com/policies/privacy" className="text-blue-600 hover:underline">
            https://www.google.com/policies/privacy
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Disclaimer of Any Warranty</h2>
        <p className="uppercase">
          WE DO NOT REPRESENT OR WARRANT THAT Youshorts.ai IS FREE OF INACCURACIES, ERRORS, BUGS, OR INTERRUPTIONS, OR IS RELIABLE, ACCURATE, COMPLETE, OR OTHERWISE VALID.
        </p>
        <p className="uppercase">
          Youshorts.ai IS PROVIDED "AS IS" WITH NO WARRANTY, EXPRESS OR IMPLIED, OF ANY KIND AND WE EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AVAILABILITY, SECURITY, TITLE AND/OR NON-INFRINGEMENT.
        </p>
        <p className="uppercase">
          YOUR USE OF Youshorts.ai IS AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE THAT RESULTS FROM THE USE OF Youshorts.ai INCLUDING, BUT NOT LIMITED TO, ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p className="uppercase">
          WE SHALL NOT, UNDER ANY CIRCUMSTANCES, BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE USE OF Youshorts.ai, WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE, PRODUCT LIABILITY OR OTHERWISE), OR ANY OTHER PECUNIARY LOSS, WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OR ALL OF THE ABOVE EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Cookies</h2>
        <p>
          We employ the use of cookies. By accessing Youshorts.ai, you agree to use cookies in agreement with Youshorts.ai's Privacy Policy.
        </p>
        <p>
          Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
        </p>
        <p>
          No use of Youshorts.ai's logo or other artwork will be allowed for linking absent a trademark license agreement.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">iFrames</h2>
        <p>
          Without prior approval and written permission, you may not create frames around our webpages that alter in any way the visual presentation or appearance of our website.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Content Liability</h2>
        <p>
          We shall not be held responsible for any content that appears in videos created using Youshorts.ai, or to the websites, channels, or accounts where the videos are used. You agree to protect and defend us against all claims related to the content.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Reservation of Rights</h2>
        <p>
          We reserve the right to request that you remove all links or any particular link to our website. You agree to immediately remove all links to our website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our website, you agree to be bound to and follow these linking terms and conditions.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Removal of Links from Our Website</h2>
        <p>
          If you find any link on our website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.
        </p>
        <p>
          We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
        <p>
          The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
        </p>
        <p>
          As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
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