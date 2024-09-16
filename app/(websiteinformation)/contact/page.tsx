import {  ExternalLinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Get in Touch</h2>
            <p className="mb-4 text-gray-600">
              We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
            <div className="flex items-center mb-4">
            
              <a href="mailto:aiyoushorts@gmail.com" className="text-indigo-600 hover:underline">
                aiyoushorts@gmail.com
              </a>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              We typically respond within 1-2 business days.
            </p>

            <p className="text-sm text-gray-500 mb-4">
            Our operating address -
            Deepa residency 
            Next to Besant College , Pvs Kalakunj road
            Mangalore - 575003
            India
            </p>
            <Button 
              asChild
              variant="outline"
              className="w-full justify-center"
            >
              <a 
                href="https://forms.gle/1jLnbg94AkQcL7GMA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Open Form in New Tab
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Contact Form</h2>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdY6mfFJxT0XMqVqyVnaMTczyVHUQocIJJeXyk1l9FjGfY_TQ/viewform?embedded=true" 
                width="100%" 
                height="500" 
                
                title="Contact Form"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}