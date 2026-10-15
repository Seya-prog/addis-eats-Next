'use server';

export interface OrderActionResult {
  success: boolean;
  orderNumber?: string;
  error?: string;
  fieldErrors?: Record<string, string>;
}

export async function placeOrderAction(
  prevState: OrderActionResult | null,
  formData: FormData
): Promise<OrderActionResult> {
  const name = (formData.get('name') as string || '').trim();
  const phone = (formData.get('phone') as string || '').trim();
  const area = (formData.get('area') as string || '').trim();
  const notes = (formData.get('notes') as string || '').trim();

  const fieldErrors: Record<string, string> = {};

  if (!name || name.length < 2) {
    fieldErrors.name = 'Full name must be at least 2 characters.';
  }

  const phonePattern = /^(09|07)\d{8}$/;
  if (!phone || !phonePattern.test(phone)) {
    fieldErrors.phone = 'Please provide a valid 10-digit TeleBirr phone number.';
  }

  if (!area) {
    fieldErrors.area = 'Please select a delivery neighborhood.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      error: 'Please correct the highlighted fields.',
      fieldErrors,
    };
  }

  const orderNumber = 'AE-' + Math.floor(100000 + Math.random() * 900000);

  return {
    success: true,
    orderNumber,
  };
}
