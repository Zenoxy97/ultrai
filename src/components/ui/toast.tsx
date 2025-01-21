import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ToastProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
  className?: string;
  children?: React.ReactNode;
}

export const Toast: React.FC<ToastProps> = ({
  open,
  onOpenChange,
  title,
  description,
  action,
  variant = 'default',
  className,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onOpenChange?.(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onOpenChange]);

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        'fixed bottom-4 right-4 z-50 flex min-w-[300px] flex-col gap-1 rounded-lg p-4 shadow-lg transition-all',
        variant === 'default' ? 'bg-white text-gray-900' : 'bg-red-600 text-white',
        className
      )}
    >
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="text-sm">{description}</div>}
      {children}
      {action && <div className="mt-2 flex justify-end">{action}</div>}
      <button
        onClick={() => {
          setIsVisible(false);
          onOpenChange?.(false);
        }}
        className="absolute right-2 top-2 rounded-md p-1 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        ×
      </button>
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
  <div className="text-sm">{children}</div>
);

export const ToastClose: React.FC = () => null;

export const ToastAction: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-2 flex justify-end">{children}</div>
);

export type { ToastProps };
