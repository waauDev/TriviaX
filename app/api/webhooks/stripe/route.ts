import Stripe from "stripe";

import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { sign } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const body = await req.text();
    const signature = (await headers()).get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try{
        event:stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!,
        )
    }catch(error:any){
        return new NextResponse(`Webhook error: ${error.message}`,{
            status:400
        })
    }
}