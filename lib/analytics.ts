"use client";

import { track } from "@vercel/analytics";

export type ConversionEvent =
  | "click_contact_hero"
  | "click_whatsapp"
  | "contact_form_started"
  | "contact_form_success"
  | "contact_form_error";

export function trackConversion(event: ConversionEvent) {
  track(event);
}
