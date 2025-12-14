import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(3, 'El nombre es muy corto'),
  email: z.string().trim().email('Correo inválido'),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  company: z.string().trim().max(100).optional().or(z.literal('')),
  projectType: z.enum(['web', 'mobile', 'desktop', 'ecommerce', 'other']),
  message: z.string().trim().min(10, 'El mensaje es muy corto'),
});

export type ContactInput = z.infer<typeof contactSchema>;
