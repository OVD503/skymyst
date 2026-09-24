import { useState, useEffect } from 'react';
import { ScreenPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { MenuOverlay } from './components/MenuOverlay';
import { StoryModal } from './components/StoryModal';
import { GalleryModal } from './components/GalleryModal';
import { HomeScreen } from './screens/homepage';
import { PropertyScreen } from './screens/PropertyScreen';
import { PartnerScreen } from './screens/PartnerScreen';
import { AboutScreen } from './screens/AboutScreen';
import { SearchScreen } from './screens/SearchScreen';
import { TermsAndConditions } from './screens/TermsAndConditions';
import { PrivacyPolicy } from './screens/PrivacyPolicy';
import { RefundPolicy } from './screens/RefundPolicy';
import { useProperties } from './hooks/useProperties';

export function App() {
  const [currentPage, setCurrentPage] = useState<ScreenPage>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>('bhimsarovar');
  const { properties } = useProperties();

  // Modals state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const activeProperty =
    properties.find((p) => p.id === selectedPropertyId) || properties[0];

  const handleNavigate = (page: ScreenPage) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-[#004030] selection:text-white">
      {/* Global Header (Hidden on home mobile and legal pages) */}
      <div className={currentPage === 'home' ? 'hidden sm:block' : ['terms', 'privacy', 'refund'].includes(currentPage) ? 'hidden' : ''}>
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>

      {/* Screen View Container */}
      <main className="flex-1 pt-0">
        {currentPage === 'home' && (
          <HomeScreen
            properties={properties}
            onNavigate={handleNavigate}
            onSelectProperty={(id) => setSelectedPropertyId(id)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenStory={() => setIsStoryOpen(true)}
            onOpenMenu={() => setIsMenuOpen(true)}
          />
        )}

        {currentPage === 'property' && (
          <PropertyScreen
            properties={properties}
            propertyId={selectedPropertyId}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenGallery={() => setIsGalleryOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'partner' && (
          <PartnerScreen
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutScreen
            onOpenStory={() => setIsStoryOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'search' && (
          <SearchScreen
            properties={properties}
            onNavigate={handleNavigate}
            onSelectProperty={(id) => setSelectedPropertyId(id)}
          />
        )}

        {currentPage === 'terms' && (
          <TermsAndConditions
            onNavigate={handleNavigate}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy
            onNavigate={handleNavigate}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {currentPage === 'refund' && (
          <RefundPolicy
            onNavigate={handleNavigate}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}
      </main>

      {/* Global Dark Emerald Footer (Hidden on mobile home screen as HomeScreenMobile has its own dedicated mobile footer) */}
      <div className={currentPage === 'home' ? 'hidden sm:block' : ''}>
        <Footer
          onNavigate={handleNavigate}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </div>

      {/* Modals & Overlays */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={activeProperty.images}
        propertyName={activeProperty.name}
      />

    </div>
  );
}

export default App;
