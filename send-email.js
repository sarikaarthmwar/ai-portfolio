// api/send-email.js
// ✅ Vercel Serverless Function — EmailJS keys live HERE, not in index.html
// Keys are stored as Vercel Environment Variables, never committed to git

export default async function handler(req, res) {

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // ── Server-side validation ──────────────────────────────
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ error: "Message is too short" });
  }

  // ── Call EmailJS REST API with keys from environment variables ──
  // These values come from Vercel Dashboard → Settings → Environment Variables
  // They are NEVER visible in the browser or in your git repo
  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "origin": "http://localhost"  // required by EmailJS REST API
      },
      body: JSON.stringify({
        service_id:  process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id:     process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,  // private key — safe here
        template_params: {
          from_name:    name,
          from_email:   email,
          message:      message,
          reply_to:     email
        }
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorText = await response.text();
      console.error("EmailJS error:", errorText);
      return res.status(500).json({ error: "Email service failed. Please try again." });
    }

  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
