import { useState, useEffect } from 'react';
import { ScreenPage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { MenuOverlay } from './components/MenuOverlay';
import { StoryModal } from './components/StoryModal';
import { GalleryModal } from './components/GalleryModal';
import { BackToTop } from './components/BackToTop';
import { HomeScreen } from './screens/HomeScreen';
import { PropertyScreen } from './screens/PropertyScreen';
import { PartnerScreen } from './screens/PartnerScreen';
import { AboutScreen } from './screens/AboutScreen';
import { SearchScreen } from './screens/SearchScreen';
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
      {/* Global Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Screen View Container */}
      <main className={`flex-1 ${currentPage === 'home' || currentPage === 'partner' || currentPage === 'property' ? 'pt-0 md:pt-24' : 'pt-14 sm:pt-20 md:pt-24'}`}>
        {currentPage === 'home' && (
          <HomeScreen
            properties={properties}
            onNavigate={handleNavigate}
            onSelectProperty={(id) => setSelectedPropertyId(id)}
            onOpenContact={() => setIsContactOpen(true)}
            onOpenStory={() => setIsStoryOpen(true)}
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
      </main>

      {/* Global Dark Emerald Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setIsContactOpen(true)}
      />

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

      {/* Floating Back to Top Button */}
      <BackToTop threshold={500} />
    </div>
  );
}

export default App;
