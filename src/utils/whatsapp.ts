/**
 * WhatsApp Dispatch URL Builder & Link Utilities
 */
import { BUSINESS_DATA } from '../data/businessData';

export interface BookingDetails {
  name?: string;
  mobile?: string;
  pickup: string;
  drop: string;
  tripType: string;
  vehicle: string;
  date: string;
  time?: string;
  passengers?: number | string;
  specialNotes?: string;
}

export function buildWhatsAppBookingUrl(details: Partial<BookingDetails>): string {
  const lines: string[] = ['Namaste City Cab Service Indore,', ''];
  lines.push('I would like to book a cab with the following details:');
  if (details.name) lines.push(`• Name: ${details.name}`);
  if (details.mobile) lines.push(`• Contact: ${details.mobile}`);
  if (details.pickup) lines.push(`• Pickup: ${details.pickup}`);
  if (details.drop) lines.push(`• Drop: ${details.drop}`);
  if (details.tripType) lines.push(`• Trip Type: ${details.tripType}`);
  if (details.vehicle) lines.push(`• Vehicle: ${details.vehicle}`);
  if (details.date) lines.push(`• Travel Date: ${details.date}`);
  if (details.time) lines.push(`• Pickup Time: ${details.time}`);
  if (details.passengers) lines.push(`• Passengers: ${details.passengers}`);
  if (details.specialNotes) lines.push(`• Notes: ${details.specialNotes}`);

  lines.push('');
  lines.push('Please confirm availability and share the best fare quotation.');

  const encodedMessage = encodeURIComponent(lines.join('\n'));
  return `https://api.whatsapp.com/send?phone=${BUSINESS_DATA.whatsappNumber}&text=${encodedMessage}`;
}

export function buildQuickWhatsAppUrl(messagePrompt: string): string {
  const encoded = encodeURIComponent(messagePrompt);
  return `https://api.whatsapp.com/send?phone=${BUSINESS_DATA.whatsappNumber}&text=${encoded}`;
}
