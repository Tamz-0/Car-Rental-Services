import React from 'react';
import { Car as CarType } from '../types';
import { Users, Fuel, Settings, ArrowUpRight } from 'lucide-react';

interface CarCardProps {
  car: CarType;
  onClick?: () => void;
  showDetails?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick, showDetails = false }) => {
  return (
    <div
      className="card group cursor-pointer flex flex-col"
      onClick={onClick}
      style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className="text-2xs font-medium tracking-widest uppercase px-2.5 py-1 rounded-lg"
            style={{ background: 'rgba(8,10,15,0.75)', color: 'var(--color-accent)', backdropFilter: 'blur(8px)', border: '1px solid rgba(192,154,90,0.2)' }}
          >
            {car.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span
            className="text-sm font-semibold px-3 py-1 rounded-lg"
            style={{ background: 'var(--color-accent)', color: '#0D1117' }}
          >
            ${car.price}<span className="text-xs font-medium opacity-70">/day</span>
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-base font-semibold leading-tight" style={{ color: 'var(--color-text-primary)' }}>{car.name}</h3>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0 flex-shrink-0 ml-2" style={{ background: 'var(--color-accent)' }}>
            <ArrowUpRight size={14} color="#0D1117" />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5" style={{ color: 'var(--color-text-muted)' }}>
            <Users size={14} />
            <span className="text-xs">{car.seats} seats</span>
          </div>
          <div className="flex items-center gap-1.5" style={{ color: 'var(--color-text-muted)' }}>
            <Settings size={14} />
            <span className="text-xs">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5" style={{ color: 'var(--color-text-muted)' }}>
            <Fuel size={14} />
            <span className="text-xs">{car.fuelEfficiency}</span>
          </div>
        </div>

        {showDetails && car.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {car.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs px-2.5 py-1 rounded-lg"
                  style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}
                >
                  {feature}
                </span>
              ))}
              {car.features.length > 3 && (
                <span className="text-xs px-2.5 py-1 rounded-lg" style={{ background: 'var(--color-surface-2)', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)' }}>
                  +{car.features.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          <button
            className="btn btn-primary w-full py-2.5 text-sm"
            onClick={(e) => {
              e.stopPropagation();
              onClick && onClick();
            }}
          >
            {showDetails ? 'Book This Car' : 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
