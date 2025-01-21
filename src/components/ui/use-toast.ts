import { useState, useCallback } from 'react';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

interface ToastOptions {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

const toasts: Toast[] = [];
let listeners: ((toasts: Toast[]) => void)[] = [];

const addToast = (toast: Toast) => {
  toasts.push(toast);
  listeners.forEach((listener) => listener([...toasts]));

  setTimeout(() => {
    const index = toasts.findIndex((t) => t.id === toast.id);
    if (index > -1) {
      toasts.splice(index, 1);
      listeners.forEach((listener) => listener([...toasts]));
    }
  }, 5000);
};

export function useToast() {
  const [state, setState] = useState<Toast[]>([]);

  useState(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((listener) => listener !== setState);
    };
  });

  const toast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    addToast({ id, ...options });
  }, []);

  return {
    toast,
    toasts: state,
  };
}
