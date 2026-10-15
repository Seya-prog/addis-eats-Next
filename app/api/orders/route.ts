import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, area, total } = body;

    // Field validations
    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Full name must be at least 2 characters.';
    }

    const phonePattern = /^(09|07)\d{8}$/;
    if (!phone || typeof phone !== 'string' || !phonePattern.test(phone.trim())) {
      errors.phone = 'TeleBirr phone must be 10 digits starting with 09 or 07.';
    }

    if (!area || typeof area !== 'string' || area.trim() === '') {
      errors.area = 'Delivery neighborhood is required.';
    }

    if (total === undefined || typeof total !== 'number' || total <= 0) {
      errors.total = 'Order total must be greater than 0 ETB.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          fieldErrors: errors,
        },
        { status: 422 }
      );
    }

    const orderNumber = 'AE-' + Math.floor(100000 + Math.random() * 900000);

    return NextResponse.json(
      {
        success: true,
        orderNumber,
        message: 'Order placed successfully via TeleBirr',
        timestamp: new Date().toISOString(),
        order: { name, phone, area, total, orderNumber },
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Invalid JSON payload in request body' },
      { status: 400 }
    );
  }
}
