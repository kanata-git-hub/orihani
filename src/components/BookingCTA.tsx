import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

const BookingContext = createContext<(() => void) | null>(null);

const bookingOptions = [
  {
    title: '소화불량 한약 예약',
    description: '자주 체하고 속이 불편할 때',
    href: 'https://m.booking.naver.com/booking/13/bizes/1520704/items/8114050',
  },
  {
    title: '만성 피로 한약 예약',
    description: '쉬어도 피곤하고 기력이 떨어질 때',
    href: 'https://m.booking.naver.com/booking/13/bizes/1520704/items/8114052',
  },
  {
    title: '만성통증 진료 예약',
    description: '반복되는 근육·관절 통증이 있을 때',
    href: 'https://m.booking.naver.com/booking/13/bizes/1520704/items/7140755',
  },
];

function trackReservationClick() {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'click_naver_reservation', { cta_placement: 'booking_choice' });
  }
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <BookingContext.Provider value={() => setIsOpen(true)}>
      {children}
      <dialog
        ref={dialogRef}
        className="booking-dialog"
        aria-labelledby="booking-dialog-title"
        aria-describedby="booking-dialog-description"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right ||
              event.clientY < bounds.top || event.clientY > bounds.bottom) {
            setIsOpen(false);
          }
        }}
      >
        <button
          type="button"
          className="booking-close"
          aria-label="예약 선택 닫기"
          onClick={() => setIsOpen(false)}
        >
          <X aria-hidden="true" />
        </button>
        <h2 id="booking-dialog-title">어떤 진료로<br />예약하시겠어요?</h2>
        <p id="booking-dialog-description">선택하시면 네이버 예약으로 연결됩니다.</p>
        <div className="booking-options">
          {bookingOptions.map(({ title, description, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" onClick={trackReservationClick} className="booking-option">
              <span><strong>{title}</strong><span>{description}</span></span>
              <ChevronRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </dialog>
    </BookingContext.Provider>
  );
}

interface BookingCTAProps {
  className?: string;
  text?: string;
  showIcon?: boolean;
}

export default function BookingCTA({
  className = '',
  text = '진료 예약',
  showIcon = true,
}: BookingCTAProps) {
  const openBooking = useContext(BookingContext);
  if (!openBooking) throw new Error('BookingCTA must be used inside BookingProvider');

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={openBooking}
      className={`booking-trigger inline-flex items-center justify-center font-bold transition-all transform hover:scale-105 rounded-xl shadow-lg bg-accent text-primary hover:bg-[#ffe180] ${className}`}
    >
      {text}
      {showIcon && <ChevronRight className="w-6 h-6 ml-1 shrink-0" aria-hidden="true" />}
    </button>
  );
}
