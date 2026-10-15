import { NextResponse } from 'next/server';
import { getAllDishes } from '@/data/dishes';

export async function GET() {
  const dishes = getAllDishes();
  return NextResponse.json({
    status: 200,
    count: dishes.length,
    dishes,
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  });
}
