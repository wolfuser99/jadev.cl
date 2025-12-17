import { defineAction } from 'astro:actions';
import { contactSchema } from '../lib/contactSchema';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: contactSchema,
    handler: async (input, context) => {
      // Prefer explicit D1 binding; keep DB as a fallback for local/dev
      const env = context.locals.runtime?.env as
        | (typeof context.locals.runtime.env & Cloudflare.Env)
        | undefined;
      const db = env?.prod_d1_tutorial ?? env?.DB;
      if (!db) {
        throw new Error('No se encontró la base de datos D1 (binding DB)');
      }

      const stmt = db.prepare(
        `INSERT INTO contact_requests (name, email, phone, company, project_type, message, created_at)
         VALUES (?, ?, ?, ?, ?, ?, datetime('now'))`
      );

      await stmt
        .bind(
          input.name,
          input.email,
          input.phone || null,
          input.company || null,
          input.projectType,
          input.message
        )
        .run();

      return { ok: true };
    },
  }),
};

export type ServerActions = typeof server;
