import { headers } from "next/headers";

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
success_url: `${headers().get("origin")}/success`,
cancel_url: `${headers().get("origin")}/canceled`,
automatic_tax: { enabled: true },
});

// redirect(checkoutSession.url)
return Response.redirect(checkoutSession.url);
}
export { POST };