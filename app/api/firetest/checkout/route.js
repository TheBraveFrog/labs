import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

async function POST(request) {
// Remove the console.clear statement upload your
console.clear();
const body = await request.formData();
const formData = new FormData();
const price = body.get("price");
const quantity = 1;

//Create Checkout Sessions from body params.
const checkoutSession = await stripe.checkout.sessions.create({
mode: "payment",
line_items: [
{
price: '{{price_1OMH8PHk25vonLhFRyiLU8SX}}',
quantity: 1,
},
{
    price: '{{price_1OMH7KHk25vonLhFQO8RNO68}}',
    quantity: 1,
    },
],
success_url: `${headers().get("origin")}/success`,
cancel_url: `${headers().get("origin")}/canceled`,
automatic_tax: { enabled: true },
});

// redirect(checkoutSession.url)
return Response.redirect(checkoutSession.url);
}
export { POST };