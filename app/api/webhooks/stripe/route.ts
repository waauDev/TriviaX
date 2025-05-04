import Stripe from "stripe";

import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const body = await req.text();
    const signature = (await headers()).get("Stripe-Signature") as string;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let event: Stripe.Event;
    
    try{
        event:stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!,
        )
    }catch(error/*:any//*/){
        if (error instanceof Error) {
            return new NextResponse(`Webhook error: ${error.message}`, {
                status: 400,
            });
        }
    
        return new NextResponse("Webhook error", {
            status: 400,
        });
    }
}