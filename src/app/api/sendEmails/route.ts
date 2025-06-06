import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const form = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
      from: "Contact Form <fallensky200@gmail.com>",
      to: "mikarlofrancis@gmail.com",
      subject: `New Contact Form Submission: ${form.firstname} ${form.lastname}`,
      html: `<p><b>Name:</b> ${form.firstname} ${form.lastname}</p>
             <p><b>Email:</b> ${form.email}</p>
             <p><b>Phone:</b> ${form.phone}</p>
             <p><b>Service:</b> ${form.service}</p>
             <p><b>Message:</b> ${form.message}</p>`,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send message." }),
      { status: 500 }
    );
  }
}
