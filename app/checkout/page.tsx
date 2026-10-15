'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { placeOrderAction, OrderActionResult } from '@/app/actions/order';

const ADDIS_NEIGHBORHOODS = [
  'Bole',
  'Kazanchis',
  'Piazza',
  'Sarbet',
  'Megenagna',
  'CMC',
  'Old Airport',
  'Gotera',
  'Gerji',
  'Summit',
];

const initialState: OrderActionResult = {
  success: false,
};

export default function CheckoutPage() {
  const [state, formAction, isPending] = useActionState(placeOrderAction, initialState);

  if (state.success && state.orderNumber) {
    return (
      <div className="dish-detail-container" role="alert" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', color: '#278c4a', marginBottom: '1rem' }}>✓</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>Order Confirmed!</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Your TeleBirr order <strong>#{state.orderNumber}</strong> has been registered.
        </p>
        <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
          Our courier will contact you upon dispatch.
        </p>
        <Link href="/menu" className="btn-primary">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <section style={{ maxWidth: '640px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>TeleBirr Checkout</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        Fast delivery across Addis Ababa. Fully functional with or without JavaScript.
      </p>

      {state.error && (
        <div className="error-container" style={{ padding: '1rem', marginBottom: '1.5rem', textAlign: 'left' }} role="alert">
          <p style={{ color: '#991b1b', fontWeight: 600, margin: 0 }}>⚠️ {state.error}</p>
        </div>
      )}

      <form action={formAction} style={{ background: 'var(--color-surface)', padding: '2.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
        <div style={{ marginBottom: '1.4rem' }}>
          <label htmlFor="name" style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>
            Full Name <span style={{ color: 'var(--color-primary)' }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Abebe Kebede"
            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.95rem' }}
          />
          {state.fieldErrors?.name && (
            <span style={{ color: '#d9381e', fontSize: '0.82rem', fontWeight: 600, marginTop: '0.35rem', display: 'block' }}>
              {state.fieldErrors.name}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '1.4rem' }}>
          <label htmlFor="phone" style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>
            TeleBirr Phone Number <span style={{ color: 'var(--color-primary)' }}>*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={10}
            placeholder="09XXXXXXXX or 07XXXXXXXX"
            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.95rem' }}
          />
          {state.fieldErrors?.phone && (
            <span style={{ color: '#d9381e', fontSize: '0.82rem', fontWeight: 600, marginTop: '0.35rem', display: 'block' }}>
              {state.fieldErrors.phone}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '1.4rem' }}>
          <label htmlFor="area" style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>
            Delivery Neighborhood <span style={{ color: 'var(--color-primary)' }}>*</span>
          </label>
          <select
            id="area"
            name="area"
            required
            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.95rem', background: '#fff' }}
          >
            <option value="">Select your neighborhood...</option>
            {ADDIS_NEIGHBORHOODS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {state.fieldErrors?.area && (
            <span style={{ color: '#d9381e', fontSize: '0.82rem', fontWeight: 600, marginTop: '0.35rem', display: 'block' }}>
              {state.fieldErrors.area}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="notes" style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>
            Special Instructions (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="e.g. Near Edna Mall, 2nd building"
            style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.95rem' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/cart" className="btn-secondary">
            ← Back to Cart
          </Link>
          <button
            type="submit"
            className="btn-primary"
            disabled={isPending}
            style={{ opacity: isPending ? 0.7 : 1 }}
          >
            {isPending ? 'Placing Order...' : 'Confirm Order with TeleBirr ➔'}
          </button>
        </div>
      </form>
    </section>
  );
}
