import React from 'react';

interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  className?: string;
  children?: React.ReactNode;
}

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  variant = 'default',
  className = '',
  children,
}) => {
  return (
    <div
      className={`fixed bottom-4 right-4 z-50 min-w-[300px] rounded-lg p-4 shadow-lg ${
        variant === 'destructive' ? 'bg-red-600 text-white' : 'bg-white text-gray-900'
      } ${className}`}
    >
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="mt-1 text-sm">{description}</div>}
      {children}
    </div>
  );
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const ToastViewport: React.FC = () => null;

export const ToastTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-semibold">{children}</div>
);

export const ToastDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-1 text-sm">{children}</div>
);

export const ToastClose: React.FC = () => (
  <button
    className="absolute right-2 top-2 rounded-md p-1 text-gray-400 hover:text-gray-600"
    onClick={() => {
      const toast = document.querySelector('[role="alert"]');
      if (toast) {
        toast.remove();
      }
    }}
  >
    ×
  </button>
);

export const ToastAction: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`mt-2 flex justify-end space-x-2 ${className}`}>{children}</div>
);

export type { ToastProps as ToastActionElement };
