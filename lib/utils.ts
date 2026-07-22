import { type ClassValue, clsx } from 'clsx'

// Lightweight class-merging helper. Kept dependency-free beyond clsx
// (no tailwind-merge) to keep V1 lean per development principles.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
