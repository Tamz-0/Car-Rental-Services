import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Car as CarIcon, Sparkles, ArrowLeft, Users, Fuel, Settings, Check } from 'lucide-react';
import Button from '../components/Button';
import CarCard from '../components/CarCard';
import { Car } from '../types';
import { getRecommendedCars } from '../data/cars';

interface FormData {
  location: string;
  pickupDate: string;
  returnDate: string;
  carTypes: string[];
}

const carTypeOptions = ['Electric', 'SUV', 'Sedan', 'Luxury', 'Hybrid'];

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ location: '', pickupDate: '', returnDate: '', carTypes: [] });
  const [recommendedCars, setRecommendedCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCarTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      carTypes: checked ? [...formData.carTypes, value] : formData.carTypes.filter(t => t !== value)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const recommendations = getRecommendedCars(formData);
      setRecommendedCars(recommendations);
      setShowRecommendations(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookNow = () => {
    alert(`Booking confirmed for ${selectedCar?.name}!`);
  };

  const resetSelection = () => setSelectedCar(null);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date(today); nextWeek.setDate(nextWeek.getDate() + 7);
    const fmt = (d: Date) => d.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, pickupDate: fmt(tomorrow), returnDate: fmt(nextWeek) }));
  }, []);

  const rentalDays = formData.pickupDate && formData.returnDate
    ? Math.max(1, Math.round((new Date(formData.returnDate).getTime() - new Date(formData.pickupDate).getTime()) / 86400000))
    : 7;

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom max-w-6xl">

        {/* Page header */}
        <div className="mb-12">
          <span className="section-eyebrow">Reserve</span>
          <h1 className="font-display text-4xl md:text-5xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
            {selectedCar ? 'Complete your booking' : 'Find your perfect ride'}
          </h1>
          {!selectedCar && (
            <p className="mt-3 text-base" style={{ color: 'var(--color-text-secondary)' }}>
              Let our AI match you with the ideal vehicle for your journey.
            </p>
          )}
        </div>

        {selectedCar ? (
          /* ── Booking summary view ── */
          <div className="animate-fade-in">
            <button
              onClick={resetSelection}
              className="flex items-center gap-2 text-sm mb-8 transition-colors duration-200"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              <ArrowLeft size={15} /> Back to search
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
                  <div className="relative h-72">
                    <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <span className="text-2xs font-medium tracking-widest uppercase px-2.5 py-1 rounded-lg" style={{ background: 'rgba(8,10,15,0.75)', color: 'var(--color-accent)', backdropFilter: 'blur(8px)', border: '1px solid rgba(192,154,90,0.2)' }}>
                        {selectedCar.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6" style={{ background: 'var(--color-surface)' }}>
                    <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>{selectedCar.name}</h2>
                    <div className="flex items-center gap-5 mb-6">
                      <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        <Users size={14} /> {selectedCar.seats} seats
                      </div>
                      <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        <Settings size={14} /> {selectedCar.transmission}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        <Fuel size={14} /> {selectedCar.fuelEfficiency}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>Included Features</p>
                      <div className="grid grid-cols-2 gap-y-2.5">
                        {selectedCar.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            <Check size={13} style={{ color: 'var(--color-accent)' }} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-2xl p-6 sticky top-28" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                  <h3 className="text-base font-semibold mb-6" style={{ color: 'var(--color-text-primary)' }}>Booking Summary</h3>
                  <div className="space-y-4 mb-6">
                    {[
                      { label: 'Location', value: formData.location || 'Not specified' },
                      { label: 'Pick-up Date', value: formData.pickupDate },
                      { label: 'Return Date', value: formData.returnDate },
                      { label: 'Duration', value: `${rentalDays} day${rentalDays !== 1 ? 's' : ''}` },
                      { label: 'Vehicle', value: selectedCar.name },
                      { label: 'Daily Rate', value: `$${selectedCar.price}/day` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{label}</span>
                        <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl p-4 mb-6" style={{ background: 'rgba(192,154,90,0.08)', border: '1px solid rgba(192,154,90,0.2)' }}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Estimated Total</span>
                      <span className="font-display text-2xl font-normal" style={{ color: 'var(--color-accent)' }}>${selectedCar.price * rentalDays}</span>
                    </div>
                    <p className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
                      Final price calculated at checkout. Taxes and fees may apply.
                    </p>
                  </div>
                  <button className="btn btn-primary w-full py-3.5 text-sm" onClick={handleBookNow}>
                    Proceed to Checkout
                  </button>
                  <p className="text-xs text-center mt-4" style={{ color: 'var(--color-text-muted)' }}>
                    Free cancellation up to 24 hours before pickup
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* ── Search form ── */}
            <div className="rounded-2xl p-7 mb-10" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                      Pickup Location
                    </label>
                    <div className="input-with-icon">
                      <MapPin size={15} className="icon" />
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City or airport"
                        className="input-luxury pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                      Pickup Date
                    </label>
                    <div className="input-with-icon">
                      <Calendar size={15} className="icon" />
                      <input
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        className="input-luxury pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                      Return Date
                    </label>
                    <div className="input-with-icon">
                      <Calendar size={15} className="icon" />
                      <input
                        type="date"
                        id="returnDate"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        className="input-luxury pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                      Vehicle Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {carTypeOptions.map((type) => {
                        const checked = formData.carTypes.includes(type);
                        return (
                          <label
                            key={type}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer text-xs font-medium transition-all duration-200"
                            style={{
                              background: checked ? 'rgba(192,154,90,0.12)' : 'var(--color-surface-2)',
                              border: `1px solid ${checked ? 'rgba(192,154,90,0.4)' : 'var(--color-border)'}`,
                              color: checked ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                            }}
                          >
                            <input
                              type="checkbox"
                              name="carTypes"
                              value={type}
                              checked={checked}
                              onChange={handleCarTypeChange}
                              className="sr-only"
                            />
                            {type}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary px-8 py-3.5 text-sm flex items-center gap-2.5 min-w-[220px] justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-[#0D1117]/30 border-t-[#0D1117] animate-spin" />
                        Finding your match...
                      </>
                    ) : (
                      <>
                        <Sparkles size={15} />
                        Get AI Recommendations
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* ── Results ── */}
            {showRecommendations && (
              <div className="animate-slide-up">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-display text-3xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
                      AI Recommendations
                    </h2>
                    <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                      Curated for your journey
                    </p>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-lg"
                    style={{ background: 'rgba(192,154,90,0.1)', color: 'var(--color-accent)', border: '1px solid rgba(192,154,90,0.2)' }}
                  >
                    {recommendedCars.length} matches
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendedCars.map((car) => (
                    <CarCard
                      key={car.id}
                      car={car}
                      showDetails={true}
                      onClick={() => handleCarSelect(car)}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
