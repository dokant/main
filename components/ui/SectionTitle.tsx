import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-primary';
  const subtitleColor = light ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColor} leading-relaxed`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-secondary mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;