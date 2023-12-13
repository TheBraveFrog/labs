// pages/api/checkout/[...nextauth].js

import { stripe } from "@/lib/stripe";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = await req.formData();
      const formData = new FormData();
      const price = body.get("price");
      const quantity = 1;

      // Create Checkout Sessions from body params.
      const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price: '{{price_1OMGQ5Hk25vonLhFO95PiF3n}}',
            quantity: 1,
          },
          {
            price: '{{price_1OMGdYHk25vonLhFrj69oJ5r}}',
            quantity: 1,
          },
          {
            price: '{{price_1OMGhNHk25vonLhFhdsmUDLP}}',
            quantity: 1,
          },
          {
            price: '{{price_1OMGiLHk25vonLhFO0zKwAZP}}',
            quantity: 1,
          },
          {
            price: '{{price_1OMGjHHk25vonLhFf9DSvziH}}',
            quantity: 1,
          },
          {
            price: '{{price_1OMGndHk25vonLhFWed6RY2J}}',
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
        automatic_tax: { enabled: true },
      });

      return res.redirect(checkoutSession.url);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}


