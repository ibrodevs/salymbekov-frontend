import React from 'react';

export const Card = ({ children, className = '', variant = 'default', ...props }) => {
   const base = 'rounded-3xl overflow-hidden shadow-lg';
   const variants = {
      default: 'bg-white border border-gray-100',
      glass: 'bg-white/5 backdrop-blur-sm ring-1 ring-white/10',
   };

   return (
      <div className={`${base} ${variants[variant] ?? variants.default} ${className}`} {...props}>
         {children}
      </div>
   );
};

export const CardContent = ({ children, className = '', p = 6, ...props }) => (
   <div className={`p-${p} ${className}`} {...props}>
      {children}
   </div>
);

export default Card;
