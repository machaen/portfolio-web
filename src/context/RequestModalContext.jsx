import { createContext, useContext, useState } from 'react';

const RequestModalContext = createContext(null);

// tierId lets a Services CTA pre-select its bundle in the form; null means
// "no bundle in particular" (e.g. the generic Contact section CTA).
export function RequestModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tierId, setTierId] = useState(null);

  const openModal = (id = null) => {
    setTierId(id);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <RequestModalContext.Provider value={{ isOpen, tierId, openModal, closeModal }}>
      {children}
    </RequestModalContext.Provider>
  );
}

export function useRequestModal() {
  const ctx = useContext(RequestModalContext);
  if (!ctx) throw new Error('useRequestModal must be used within a RequestModalProvider');
  return ctx;
}
