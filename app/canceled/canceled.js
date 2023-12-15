// canceled.js
import Link from 'next/link';

export default function Canceled() {
  return (
    <div>
      <h1>Payment Canceled</h1>
      <p>Your payment was canceled. If you have any questions, please contact support.</p>
      <Link href="/records">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}
