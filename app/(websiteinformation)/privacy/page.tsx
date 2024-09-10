import React from 'react'

type Section = {
  title: string
  content: React.ReactNode
}

const privacyPolicy: Section[] = [
  {
    title: "Youshorts Privacy Policy",
    content: (
      <>
        <p>Last updated March 7th, 2024</p>
        <p>Youshorts takes data privacy very seriously. This privacy policy explains how we collect, share, use personal information, and how you can exercise your privacy rights, including our practices regarding the access, use, storage, and sharing of Google user data.</p>
        <p>Youshorts operates the https://youshorts.ai website, which provides the SERVICE.</p>
        <p>This page is used to inform website visitors and our service users regarding our policies with the collection, use, and disclosure of Personal Information and Google user data if anyone decides to use our Service, the Youshorts website.</p>
        <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy, including any Google user data. The Personal Information and Google user data that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
        <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at https://youshorts.ai, unless otherwise defined in this Privacy Policy.</p>
      </>
    ),
  },
  {
    title: "Information Collection and Use",
    content: (
      <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. In addition, if our service integrates with Google services, we may collect Google user data as authorized by you through the consent process provided by Google. The information that we collect will be used to contact or identify you and to provide the Service.</p>
    ),
  },
  {
    title: "Links to privacy policies of third-party service providers used by the app:",
    content: (
      <ul className="list-disc pl-5">
        <li>YouTube Terms of Service</li>
        <li>Google Privacy Policy and Google Terms of Service</li>
        <li>Google API Services User Data Policy</li>
        <li>TikTok Terms of Service</li>
      </ul>
    ),
  },
  {
    title: "Google API Limited Use Disclosure",
    content: (
      <>
        <p>Youshorts uses Google APIs when you use your Google account to sign in and when you opt to allow Youshorts to post to your YouTube channel.</p>
        <p>Youshorts's use and transfer to any other app of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>
      </>
    ),
  },
  {
    title: "YouTube",
    content: (
      <>
        <p>Youshorts allows users to upload their rendered videos to YouTube via an in-app API. By using those API Clients, users are agreeing to be bound by the YouTube Terms of Service and the Google Privacy Policy.</p>
        <p>In addition to Youshorts's normal procedure for deleting stored data, users can revoke Youshorts's access to their data via Google security settings page.</p>
      </>
    ),
  },
  {
    title: "Third Party And User Consent For AI Apps",
    content: (
      <p>We do not share users' personal data with third-party AI applications.</p>
    ),
  },
  {
    title: "Data Storage and Security",
    content: (
      <p>Google user data is stored securely on our servers and is protected using industry-standard encryption and security practices. We retain Google user data for the period necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
    ),
  },
  {
    title: "Sharing of Google User Data",
    content: (
      <p>We do not share Google user data with third parties unless it's necessary to provide the Service, comply with the law, or protect our rights. When third parties are employed to process Google user data on our behalf, they do so under confidentiality agreements and are obligated to comply with our privacy policy and data protection laws.</p>
    ),
  },
  {
    title: "Log Data and Cookies",
    content: (
      <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. Cookies are used to enhance user experience, as detailed in the existing section.</p>
    ),
  },
  {
    title: "Service Providers",
    content: (
      <p>We may employ third-party companies and individuals due to the following reasons:</p>
    ),
  },
  {
    title: "Security",
    content: (
      <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
    ),
  },
  {
    title: "Links to Other Sites",
    content: (
      <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
    ),
  },
  {
    title: "Changes to This Privacy Policy",
    content: (
      <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          {privacyPolicy.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h2>
              <div className="text-gray-600 space-y-2">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}