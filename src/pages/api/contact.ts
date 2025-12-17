import type { APIRoute } from 'astro';
import { contactSchema } from '../../lib/contactSchema';

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime?.env as (typeof locals.runtime.env & Cloudflare.Env) | undefined;
  const db = env?.prod_d1_tutorial ?? env?.DB;
  if (!db) {
    return new Response(
      JSON.stringify({ ok: false, error: 'DB binding missing' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const parse = contactSchema.safeParse(data);
  if (!parse.success) {
    return new Response(
      JSON.stringify({ ok: false, error: parse.error.flatten() }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const input = parse.data;
  try {
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

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving contact request', error);
    return new Response(
      JSON.stringify({ ok: false, error: 'Unexpected error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
