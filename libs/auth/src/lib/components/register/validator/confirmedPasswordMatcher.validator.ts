import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmedPasswordMatcher: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');

  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ confirmedPasswordMismatch: true });
    return { confirmedPasswordMismatch: true };
  }

  return null;
};
