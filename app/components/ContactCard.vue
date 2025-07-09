<script setup lang="ts">
import { reactive } from 'vue'
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'Your message has been sent!', color: 'success' })
  // handle form submission here
  console.log(event.data)
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Breadcrumb -->
    <div class="bg-gray-50 py-3 sm:py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <a class="hover:text-green-600 transition-colors" href="/">
            <UIcon name="i-lucide-house" class="h-4 w-4" />
          </a>
          <UIcon name="i-lucide-chevron-right" class="h-4 w-4" />
          <span class="font-medium text-gray-900">Contact Us</span>
        </div>
      </div>
    </div>

    <!-- Hero -->
    <section class="py-12 sm:py-16 bg-gradient-to-r from-green-900 to-green-700 text-white text-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Get in Touch</h1>
        <p class="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-6 sm:mb-8">
          Have questions about our products or services? We're here to help! Reach out to us through any of the channels below.
        </p>
        <UButton icon="i-lucide-message-square" color="primary" class="bg-green-600 hover:bg-green-700">
          Chat on WhatsApp
        </UButton>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
          <p class="text-base sm:text-lg text-gray-600">Choose the method that works best for you</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div
v-for="(method, i) in [
            { icon: 'i-lucide-map-pin', title: 'Visit Our Store', lines: ['123 Moi Avenue', 'Nairobi, Kenya', 'Near City Market'], btn: 'Get Directions' },
            { icon: 'i-lucide-phone', title: 'Call Us', lines: ['+254 712 345 678', '+254 723 456 789', 'Mon-Sat: 9AM - 6PM'], btn: 'Call Now' },
            { icon: 'i-lucide-message-square', title: 'WhatsApp', lines: ['Instant messaging', 'Quick responses', 'Share photos easily'], btn: 'Chat Now' },
            { icon: 'i-lucide-mail', title: 'Email Us', lines: ['info@fynda254.co.ke', 'sales@fynda254.co.ke', 'We reply within 24 hours'], btn: 'Send Email' }
          ]" :key="i" class="rounded-lg border bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-shadow h-full">
            <div class="p-4 sm:p-6">
              <div class="bg-gray-50 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <UIcon :name="method.icon" class="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-3">{{ method.title }}</h3>
              <div class="space-y-1 mb-4">
                <p v-for="(line, j) in method.lines" :key="j" class="text-gray-600 text-xs sm:text-sm">{{ line }}</p>
              </div>
              <UButton block color="primary" variant="outline" class="border-green-600 text-green-600 hover:bg-green-50">
                {{ method.btn }}
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Store Info -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <!-- Contact Form -->
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="flex flex-col space-y-1.5 p-6">
              <div class="font-semibold tracking-tight text-lg sm:text-xl">Send us a Message</div>
              <p class="text-gray-600 text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            <div class="p-6 pt-0">
              <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <UFormField label="First Name *" name="firstName">
                    <UInput v-model="state.firstName" placeholder="John" />
                  </UFormField>
                  <UFormField label="Last Name *" name="lastName">
                    <UInput v-model="state.lastName" placeholder="Doe" />
                  </UFormField>
                </div>
                <UFormField label="Email *" name="email">
                  <UInput v-model="state.email" placeholder="john@example.com" type="email" />
                </UFormField>
                <UFormField label="Phone Number" name="phone">
                  <UInput v-model="state.phone" placeholder="+254 712 345 678" />
                </UFormField>
                <UFormField label="Subject *" name="subject">
                  <UInput v-model="state.subject" placeholder="Product inquiry" />
                </UFormField>
                <UFormField label="Message *" name="message">
                  <UTextarea v-model="state.message" placeholder="Tell us how we can help you..." :rows="5" />
                </UFormField>
                <UButton type="submit" block color="primary" class="bg-green-600 hover:bg-green-700">
                  Send Message
                </UButton>
              </UForm>
            </div>
          </div>
          <!-- Store Info & Quick Actions -->
          <div class="space-y-6">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold tracking-tight text-lg sm:text-xl">Store Information</div>
              </div>
              <div class="p-6 pt-0 space-y-4">
                <div class="flex items-start space-x-3">
                  <UIcon name="i-lucide-map-pin" class="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-sm sm:text-base">Address</h4>
                    <p class="text-gray-600 text-sm sm:text-base">123 Moi Avenue<br>Nairobi, Kenya<br>Near City Market</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <UIcon name="i-lucide-clock" class="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-sm sm:text-base">Business Hours</h4>
                    <div class="text-gray-600 space-y-1 text-sm sm:text-base">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <UIcon name="i-lucide-phone" class="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 class="font-semibold text-sm sm:text-base">Phone Numbers</h4>
                    <div class="text-gray-600 space-y-1 text-sm sm:text-base">
                      <p>Main: +254 712 345 678</p>
                      <p>Sales: +254 723 456 789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="font-semibold tracking-tight text-lg sm:text-xl">Quick Actions</div>
              </div>
              <div class="p-6 pt-0 space-y-3">
                <UButton block color="primary" class="bg-green-600 hover:bg-green-700">
                  <UIcon name="i-lucide-message-square" class="mr-2" /> Chat on WhatsApp
                </UButton>
                <UButton block color="primary" variant="outline" class="border-green-600 text-green-600 hover:bg-green-50">
                  Browse Our Catalog
                </UButton>
                <UButton block color="primary" class="bg-green-600 hover:bg-green-700">
                  <UIcon name="i-lucide-dollar-sign" class="mr-2" /> Sell Your Items
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p class="text-base sm:text-lg text-gray-600">Quick answers to common questions</p>
        </div>
        <div class="space-y-4 sm:space-y-6">
          <div
v-for="(faq, i) in [
            { q: 'What condition grades do you use?', a: 'We use A (Excellent), B (Good), C (Fair), and D (Poor) grades. Each item is thoroughly inspected and graded honestly.' },
            { q: 'Do you offer warranties on second-hand items?', a: 'While we don\'t offer traditional warranties, we provide a 7-day return policy if the item doesn\'t match our description.' },
            { q: 'How do you determine buying prices?', a: 'Our prices are based on current market value, condition, demand, and age of the item. We strive to offer fair prices for both buyers and sellers.' },
            { q: 'Can I reserve an item before visiting?', a: 'Yes! Contact us via WhatsApp or phone to reserve any item for up to 24 hours while you arrange to visit.' },
            { q: 'Do you offer delivery services?', a: 'Yes, we offer delivery within Nairobi for a small fee. Delivery charges depend on location and item size.' }
          ]" :key="i" class="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div class="p-4 sm:p-6">
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">{{ faq.q }}</h3>
              <p class="text-gray-600 text-sm sm:text-base">{{ faq.a }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-6 sm:mt-8">
          <p class="text-gray-600 mb-4 text-sm sm:text-base">Still have questions?</p>
          <UButton color="primary" class="bg-green-600 hover:bg-green-700">
            <UIcon name="i-lucide-message-square" class="mr-2" /> Ask us on WhatsApp
          </UButton>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 sm:py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <img alt="Fynda254 Logo" width="150" height="50" class="h-10 w-auto brightness-0 invert" src="/fynda254-logo.png" >
            </div>
            <p class="text-gray-400 mb-4 text-sm sm:text-base">
              Your trusted source for quality second-hand goods in Nairobi. We offer a wide selection of electronics, furniture, appliances, and more. We also buy your items at fair prices!
            </p>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/catalog">Browse Catalog</a></li>
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/categories">Categories</a></li>
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/about">About Us</a></li>
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/contact">Contact</a></li>
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/login">Admin Login</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-semibold mb-4">Categories</h3>
            <ul class="space-y-2">
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/catalog?category=Electronics">Electronics</a></li>
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/catalog?category=Furniture">Furniture</a></li>
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/catalog?category=Appliances">Appliances</a></li>
              <li><a class="text-gray-400 hover:text-white text-sm sm:text-base transition-colors" href="/catalog?category=Clothing">Clothing</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-semibold mb-4">Contact Us</h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-map-pin" class="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span class="text-gray-400 text-sm sm:text-base">123 Moi Avenue, Nairobi, Kenya</span>
              </li>
              <li class="flex items-center space-x-2">
                <UIcon name="i-lucide-phone" class="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span class="text-gray-400 text-sm sm:text-base">+254 712 345 678</span>
              </li>
              <li>
                <UButton color="primary" variant="ghost" class="text-gray-400 hover:text-white p-0 h-auto text-sm sm:text-base">
                  <UIcon name="i-lucide-message-square" class="mr-2" /> WhatsApp Chat
                </UButton>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-xs sm:text-sm text-center sm:text-left">© 2025 Fynda254. All rights reserved.</p>
          <div class="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
            <a class="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors" href="/terms">Terms of Service</a>
            <a class="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors" href="/privacy">Privacy Policy</a>
            <a class="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors" href="/faq">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>