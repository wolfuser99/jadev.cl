import { defineAction } from 'astro:actions';
import { contactSchema } from '../lib/contactSchema';

export const server = {
  contact: defineAction({
    accept: 'form',
    input: contactSchema,
    handler: async (input, context) => {
      const db = context.locals.runtime?.env?.DB;
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
