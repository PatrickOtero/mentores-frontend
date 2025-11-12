import { ModalAccountDeleted } from '@/components/molecules/ModalAccountDeleted';
import CalendlyRegister from '@/components/organisms/CalendlyRegister';
import { DepoSection } from '@/components/organisms/DepoSection';
import { Footer } from '@/components/organisms/Footer';
import { HeroSection } from '@/components/organisms/HeroSection';
import { MentorSection } from '@/components/organisms/MentorSection';
import { Onboarding } from '@/components/organisms/Onboarding';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const openStatus = Boolean(router.query['connect-calendly']);
    setIsOpen(openStatus);

    const accountDeletedStatus = Boolean(router.query['account-deleted']);
    setIsAccountDeleted(accountDeletedStatus);
  }, [router.query]);

  const handleCloseModal = () => {
    const calendlyClientId = 'Vx2DRKhKAvTcl5y8N1SqGg0OQ-9HR4KTO62t29C5L8M';
    const redirectUri =
      'https://p01--mentores-backend-api-dev--bj8pjy8s82zl.code.run/calendly/callback';
    const calendlyAuthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${calendlyClientId}&response_type=code&redirect_uri=${redirectUri}&state=${encodeURIComponent(String(mentor.data?.id))}`;

    window.location.href = calendlyAuthUrl;

    router.replace('/', undefined, {
      shallow: true,
    });
    setIsOpen(false);
    setIsAccountDeleted(false);
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <>
      <HeroSection />
      <Onboarding />
      <MentorSection />
      <DepoSection />
      <Footer />
      <CalendlyRegister
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        handleCloseModal={handleCloseModal}
      />
      <ModalAccountDeleted
        isOpen={isAccountDeleted}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
