interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL?: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  company?: string;
}

interface FunctionContext {
  request: Request;
  env: Env;
}

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const onRequestPost = async ({ request, env }: FunctionContext) => {
  if (!env.RESEND_API_KEY) {
    return json({ error: 'Email service is not configured yet.' }, 500);
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const name = (payload.name ?? '').trim();
  const email = (payload.email ?? '').trim();
  const phone = (payload.phone ?? '').trim();
  const subject = (payload.subject ?? '').trim();
  const message = (payload.message ?? '').trim();
  const company = (payload.company ?? '').trim();

  if (company) {
    return json({ ok: true }, 200);
  }

  if (!name || !email || !subject || !message) {
    return json({ error: 'Missing required fields.' }, 400);
  }

  const to = env.CONTACT_TO_EMAIL?.trim() || 'info@copakgt.com';
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'N/A'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'COPAK Website <onboarding@resend.dev>',
      to: [to],
      reply_to: email,
      subject: `[Website] ${subject}`,
      text,
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    return json({ error: 'Failed to send message.', details: errorBody }, 502);
  }

  return json({ ok: true }, 200);
};
