import Link from 'next/link';

export default function Success() {
  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your payment was successful. Thank you for your purchase!</p>
      <Link href="/records">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}