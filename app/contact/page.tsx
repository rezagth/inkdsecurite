"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PhoneCall, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle form submission
    setFormSubmitted(true)
    
    // Reset form after 3 seconds for demo purposes
    setTimeout(() => {
      setFormSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }
  
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Reach out to our team for a personalized security consultation or to learn more about our services.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <PhoneCall className="w-8 h-8 text-red-600 dark:text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-1">Main Office: (555) 123-4567</p>
                  <p className="text-muted-foreground">Emergency: (800) 999-8888</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-red-600 dark:text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-1">info@secureforce.com</p>
                  <p className="text-muted-foreground">support@secureforce.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-red-600 dark:text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground mb-1">123 Security Avenue, Suite 500</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-red-600 dark:text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hours</h3>
                  <p className="text-muted-foreground mb-1">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Emergency Service: 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and one of our security experts will contact you 
                to discuss your security needs and provide a personalized solution.
              </p>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <iframe
                  title="SecureForce Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036884!2d-73.98787508489028!3d40.75839904244425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Emergency Response</h3>
                <p className="mb-4">
                  For immediate assistance or to report a security incident, 
                  please call our 24/7 emergency hotline.
                </p>
                <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  <a href="tel:+18009998888">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    (800) 999-8888
                  </a>
                </Button>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Please provide your information and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physical">Physical Security</SelectItem>
                        <SelectItem value="cyber">Cyber Security</SelectItem>
                        <SelectItem value="surveillance">Surveillance Systems</SelectItem>
                        <SelectItem value="executive">Executive Protection</SelectItem>
                        <SelectItem value="risk">Risk Assessment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} required />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={formSubmitted}
                  >
                    {formSubmitted ? "Message Sent!" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}