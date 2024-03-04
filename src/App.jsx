import React, { useState } from 'react';

function App() {
  return (
    <div className='bg-gradient-to-tr from-gray-700 via-gray-900 to-black'>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-white"><a className="flex items-center justify-center" href="#" rel="ugc"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg><span className="sr-only">XueDAO</span></a><nav className="ml-auto flex gap-4 sm:gap-6"><a className="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
        Membership
      </a><a className="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
          Events
        </a><a className="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
          Resources
        </a><a className="text-sm font-medium hover:underline underline-offset-4" href="#" rel="ugc">
          Contact
        </a></nav></header><main className="flex-1"><section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48"><div className="container px-4 md:px-6"><div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"><div className="flex flex-col justify-center space-y-4"><div className="space-y-2"><h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-900 dark:text-gray-100">
          Welcome to Cognichain
        </h1><p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            A supply chain visiblity platform.
          </p></div><div className="flex flex-col gap-2 min-[400px]:flex-row"><a className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:text-white dark:hover:text-black dark:hover:bg-blue-50/90 dark:focus-visible:ring-gray-300" href="/auth/login" rel="ugc">
            Join Us
          </a><a className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-green-600 dark:hover:bg-green-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" href="#" rel="ugc">
              Learn More
            </a></div></div>
            <div className="space-y-2"><div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-gray-600 text-bold">
              Membership Benefits
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 dark:text-gray-100">
                Why Join Cognichain?
              </h2><p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                As a member of Cognichain, you can improve overall supply chain effeciency and benefit the entire logistics
              </p></div></div><div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"><div className="flex flex-col justify-center space-y-4"><ul className="grid gap-6"><li><div className="grid gap-1"><h3 className="text-xl font-bold text-blue-900 dark:text-gray-100">Realtime visiblity</h3><p className="text-gray-500 dark:text-gray-400">
                Track shippments in real time for enhancing management.
              </p></div></li><li><div className="grid gap-1"><h3 className="text-xl font-bold text-blue-900 dark:text-gray-100">Multimode transport</h3><p className="text-gray-500 dark:text-gray-400">
                Track all modes of shipments like road, air, ocean, courrier.
              </p></div></li><li><div className="grid gap-1"><h3 className="text-xl font-bold text-blue-900 dark:text-gray-100">ETA(Estimated Time of Arrival)</h3><p className="text-gray-500 dark:text-gray-400">
                Calculate ETA in efficent manner using suffcticated algorithms
              </p></div></li></ul></div></div></div></section>
              {/* <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 ">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-gray-800">
                Upcoming Events
              </div><h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 dark:text-gray-100">
                  Join Us at Our Next Event
                </h2><p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We host regular events to educate, connect, and empower our members. Check out our upcoming events and register today!
                </p></div></div><div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"><div className="flex flex-col justify-center space-y-4"><ul className="grid gap-6"><li><div className="grid gap-1"><h3 className="text-xl font-bold text-blue-900 dark:text-gray-100">Web3 Workshop</h3><p className="text-gray-500 dark:text-gray-400">
                  Learn the basics of Web3 and blockchain technologies.
                </p></div></li><li><div className="grid gap-1"><h3 className="text-xl font-bold text-blue-900 dark:text-gray-100">DAO Governance</h3><p className="text-gray-500 dark:text-gray-400">
                  Understand the principles of DAO governance and how to participate.
                </p></div></li><li><div className="grid gap-1"><h3 className="text-xl font-bold text-blue-900 dark:text-gray-100">Networking Event</h3><p className="text-gray-500 dark:text-gray-400">
                  Connect with other students and professionals in the Web3 space.
                </p>
                </div></li></ul></div></div></div></section> */}
                <section className="w-full py-12 md:py-24 lg:py-32 "><div className="container px-4 md:px-6"><div className="flex flex-col items-center justify-center space-y-4 text-center"><div className="space-y-2"><div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Contact Us
                </div><h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900 dark:text-gray-100">
                    Get in Touch
                  </h2><p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Have any questions or want to learn more about XueDAO? Contact us today!
                  </p></div></div><div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"><form className="flex flex-col justify-center space-y-4"><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">Name</label>
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" required="" />
                  </div><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label><input type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" required="" /></div><div className="space-y-2"><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="message">Message</label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="message" required=""></textarea></div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">
                    Submit
                  </button></form></div></div></section></main>
                  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Cognichain. All rights reserved.
                  </p><nav className="sm:ml-auto flex gap-4 sm:gap-6"><a className="text-xs hover:underline underline-offset-4" href="#" rel="ugc">
                    Terms of Service
                  </a><a className="text-xs hover:underline underline-offset-4" href="#" rel="ugc">
              Privacy
            </a>
          </nav>
        </footer>
      </div>
    </div>
  )
}

export default App;

