import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request: Request) {
    try {
        const { email, userFirstname , packageName , fromDate , toDate , accommodation } = await request.json();

        // Define HTML content as a string
        const emailHtml = `
     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!--$-->
     <html dir="ltr" lang="en">
     <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <style>
      @media only screen and (max-width: 600px) {
        .container {
          width: 100% !important;
          padding: 10px !important;
        }

        .logo {
          width: 120px !important;
          height: 80px !important;
        }

        .heading {
          font-size: 20px !important;
        }

        .text {
          font-size: 14px !important;
        }

        .detailsContainer {
          padding: 15px !important;
        }

        .detailText {
          font-size: 12px !important;
        }
      }
    </style>
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Thank you for your travel package inquiry<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
  </div>
  <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" class="container" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px;width:580px">
      <tbody>
        <tr style="width:100%">
          <td><img class="logo" alt="Jagath Travel Logo" height="100" src="https://tourism-web-app-eight.vercel.app/assets/jagathlogo4.png" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto;margin-bottom:20px" width="150" />
            <h1 class="heading" style="color:#333;font-size:24px;font-weight:bold;padding:17px 0 0;margin:0">Thank You for Your Travel Inquiry</h1>
            <p class="text" style="font-size:16px;line-height:26px;margin:16px 0;color:#333">Dear ${userFirstname},</p>
            <p class="text" style="font-size:16px;line-height:26px;margin:16px 0;color:#333">Thank you for your interest in our travel packages. We are excited to help you plan your dream vacation to <!-- -->Your Dream Destination<!-- -->!</p>
            <p class="text" style="font-size:16px;line-height:26px;margin:16px 0;color:#333">We have received your inquiry with the following details:</p>
            <table align="center" width="100%" class="detailsContainer" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background-color:#f5f5f5;padding:20px;border-radius:4px;margin:20px 0">
              <tbody>
                <tr>
                  <td>
                    <p class="detailText" style="font-size:14px;line-height:24px;margin:5px 0;color:#333"><strong>Tour Package:</strong> <!-- --> ${packageName}</p>
                    <p class="detailText" style="font-size:14px;line-height:24px;margin:5px 0;color:#333"><strong>Preferred Travel Dates:</strong> <!-- --> ${fromDate} -  ${toDate}</p>
                    <p class="detailText" style="font-size:14px;line-height:24px;margin:5px 0;color:#333"><strong>Accomodation:</strong> <!-- --> ${accommodation}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="text" style="font-size:16px;line-height:26px;margin:16px 0;color:#333">Our team is currently reviewing your request and will prepare a personalized travel package proposal for you. We aim to respond within 24-48 hours with more information and options tailored to your preferences.</p>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
            <p class="text" style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">This email is in response to an inquiry submitted on our website. If you did not submit this inquiry, please disregard this message.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html><!--/$-->
    `;

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: email, // Use the email address from request
            subject: "Inquiry Confirmation",
            html: emailHtml // Pass the HTML string directly
        });

        if (error) {
            throw new Error(error.message); // Handle any errors from Resend
        }

        // Return success response
        return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
    } catch (error) {
        // Handle errors
        console.error('Failed to send email:', error);
        return NextResponse.json({ error: 'Failed to send email', details: (error as Error).message }, { status: 500 });
    }
}
