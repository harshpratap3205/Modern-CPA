import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer class="bg-[#4f0333] text-white py-10 mt-20">
  <div class="max-w-[1200px] mx-auto px-5">
    <div class="flex flex-wrap gap-8 justify-between border-b border-white/10 pb-10">
      {/* <!-- Column 1 - Brand Info --> */}
      <div class="min-w-[250px] flex-1">
        <h3 class="text-[#ffd700] text-xl font-bold mb-6">Modern CPA</h3>
        <p class="opacity-90 leading-relaxed">Professional accounting services you can trust. Serving businesses and individuals .</p>
      </div>

      {/* <!-- Column 2 - Services --> */}
      <div class="min-w-[250px] flex-1">
        <h4 class="text-[#ffd700] text-lg font-semibold mb-6">Services</h4>
        <ul class="space-y-3 opacity-90 list-none p-0">
          <li><a href="/tax-services" class="text-white no-underline hover:text-[#ffd700] transition-colors duration-300">Tax Planning & Preparation</a></li>
          <li><a href="/audit" class="text-white no-underline hover:text-[#ffd700] transition-colors duration-300">Audit & Assurance</a></li>
          <li><a href="/business-advisory" class="text-white no-underline hover:text-[#ffd700] transition-colors duration-300">Business Advisory</a></li>
          <li><a href="/payroll" class="text-white no-underline hover:text-[#ffd700] transition-colors duration-300">Payroll Services</a></li>
        </ul>
      </div>

      <div class="min-w-[250px] flex-1">
        <h4 class="text-[#ffd700] text-lg font-semibold mb-6">Contact Us</h4>
        <div class="space-y-4 opacity-90">
          <p class="leading-relaxed">123 Financial Street<br/>Silicon Valley (USA)</p>
          <p class="leading-relaxed">
            Phone: <a href="tel:8178604608" class="text-white no-underline hover:text-[#ffd700] transition-colors duration-300">(650) 8178604608 </a><br/>
            Email: <a href="mailto:harshpratap122436@gmail.com" class="text-white no-underline hover:text-[#ffd700] transition-colors duration-300">harshpratap122436@gmail.com.com</a>
          </p>
          <div class="flex gap-4 mt-4">
            <a href="#" class="text-white hover:text-[#ffd700] transition-colors duration-300">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-[#ffd700] transition-colors duration-300">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-[#ffd700] transition-colors duration-300">
              <i class="fab fa-facebook text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  
    <div class="flex flex-col md:flex-row justify-between items-center pt-8 opacity-80 text-sm">
      <div class="mb-4 md:mb-0">
        © 2023 Modern CPA. All rights reserved.
      </div>
      <div class="flex gap-6">
        <a href="/privacy" class="text-white no-underline hover:text-[#ffd700] transition-colors duration-300">Privacy Policy</a>
        <a href="/terms" class="text-white no-underline hover:text-[#ffd700] transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer
