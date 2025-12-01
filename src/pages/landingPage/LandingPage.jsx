import React from 'react'
import NavbarPreLogin from '../../landingPageComponents/Navbar/NavbarPreLogin'
import Footer from '../../landingPageComponents/Footer/Footer.jsx'
import FAQ from '../../landingPageComponents/FAQ/FAQ'
import styles from "./LandingPage.module.css"

// New Placement Hub Landing Page Components
import Hero from '../../landingPageDesign2/Hero'
import HowItWorks from '../../landingPageDesign2/HowItWorks'
import Contact from '../../landingPageDesign2/Contact'
import Features from '../../landingPageDesign2/features/Features.jsx'
import Pricing from '../../landingPageDesign2/pricing/Pricing.jsx'
import CTABanner from '../../landingPageDesign2/ctabanner/CTABanner.jsx'

// Old Components (Commented Out)
// import Hero from '../../landingPageDesign2/hero/HeroNew'
// import Features from '../../landingPageComponents/Features/Features'
// import Pricing from '../../landingPageComponents/Pricing/Pricing'
// import Testimonials from '../../landingPageComponents/Testimonials/Testimonials.jsx'
// import CTASection from '../../landingPageComponents/CTASection/CTASection.jsx'
// import Templates from '../../landingPageComponents/Templates/Templates.jsx'
// import HowItWorks from '../../landingPageComponents/HowItWorks/HowItWorks.jsx'
// import Job from '../../landingPageComponents/Job/Job.jsx'
// import ResumeData from '../../landingPageComponents/Statistics/ResumeData.jsx'
// import WhyUs from '../../landingPageComponents/WhyUs/WhyUs.jsx'
// import HeroOld from '../../landingPageComponents/Hero/HeroOld.jsx'
// import ResumeDisplay from '../../landingPageComponents/ResumeDisplay/ResumeDisplay.jsx'
// import ResumeDisplayDark from '../../landingPageComponents/ResumeDisplayDark/ResumeDisplayDark.jsx'
// import JobSearchSection from '../../landingPageComponents/JobSearchSection/JobSearchSection.jsx'
// import ThreeStepResume from '../../landingPageComponents/ThreeStepResume/ThreeStepResume.jsx'
// import CoverLetterSection from '../../landingPageComponents/CoverLetter/CoverLetter.jsx'
// import CoverLetterSection2 from '../../landingPageComponents/CoverLetter2/CoverLetter2.jsx'
// import FinalCTASection from '../../landingPageComponents/FinalCTASection/FinalCTASection.jsx'
// import Navbar from '../../landingPageDesign2/navbar/Navbar.jsx'
// import DragToUnlockJobs from '../../landingPageComponents/DragToUnlockJobs/DragToUnlockJobs.jsx'

const LandingPage = () => {
  return (
    <div className={styles.all}>
      <NavbarPreLogin />

      {/* New Placement Hub Landing Page */}
      <Hero />
      {/* <HowItWorks /> */}
      <Features />
      <Pricing/>
      <CTABanner/>
      <FAQ />
      {/* <Contact /> */}
      <Footer />

      {/* Old Landing Page Components (Commented Out) */}
      {/* <HeroOld />
      <Features />
      <ResumeData />
      <WhyUs /> 
      <Pricing />
      <CTASection />
      <Testimonials />
      <Templates />
      <HowItWorks />
      <Hero />
      <ThreeStepResume />
      <ResumeDisplayDark />
      <JobSearchSection />
      <CoverLetterSection />
      <FinalCTASection />
      <DragToUnlockJobs />
      <Job/> */}
    </div>
  )
}

export default LandingPage