import { forwardRef, useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { Input, InputProps } from './input';

export const Password = forwardRef<HTMLInputElement, InputProps>(function Password(props, ref) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="relative">
      <Input {...props} type={isPasswordVisible ? 'text' : 'password'} ref={ref} />
      <button
        type="button"
        className="absolute right-4 top-2 z-50 text-gray-400 outline-none transition-opacity hover:opacity-70"
        onClick={() => setIsPasswordVisible((state) => !state)}>
        {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
});
