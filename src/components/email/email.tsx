import * as React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Button,
  Img,
} from "@react-email/components";

// Instead of importing the image directly, we'll use a string URL
const logoUrl = "https://tourism-web-app-eight.vercel.app/assets/jagathlogo4.png";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface TravelInquiryEmailProps {
  customerName?: string;
  destination?: string;
  travelDates?: string;
  packageType?: string;
}

export const TravelInquiryEmail: React.FC<TravelInquiryEmailProps> = ({
  customerName = "Valued Customer",
  destination = "Your Dream Destination",
  travelDates = "Your Preferred Dates",
  packageType = "Custom Package",
}) => (
  <Html>
    <Head />
    <Preview>Thank you for your travel package inquiry</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={logoUrl}
          alt="Jagath Travel Logo"
          width="150"
          height="100"
          style={logoStyle}
        />
        <Heading style={h1}>Thank You for Your Travel Inquiry</Heading>
        <Text style={text}>Dear {customerName},</Text>
        <Text style={text}>
          Thank you for your interest in our travel packages. We're excited to
          help you plan your dream vacation to {destination}!
        </Text>
        <Text style={text}>
          We have received your inquiry with the following details:
        </Text>
        <Section style={detailsContainer}>
          <Text style={detailText}>
            <strong>Destination:</strong> {destination}
          </Text>
          <Text style={detailText}>
            <strong>Preferred Travel Dates:</strong> {travelDates}
          </Text>
          <Text style={detailText}>
            <strong>Package Type:</strong> {packageType}
          </Text>
        </Section>
        <Text style={text}>
          Our team is currently reviewing your request and will prepare a
          personalized travel package proposal for you. We aim to respond within
          24-48 hours with more information and options tailored to your
          preferences.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          This email is in response to an inquiry submitted on our website. If
          you did not submit this inquiry, please disregard this message.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default TravelInquiryEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const logoStyle = {
  margin: "0 auto",
  marginBottom: "20px",
  display: "block",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "17px 0 0",
  margin: "0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
};

const detailsContainer = {
  backgroundColor: "#f5f5f5",
  padding: "20px",
  borderRadius: "4px",
  margin: "20px 0",
};

const detailText = {
  color: "#333",
  fontSize: "14px",
  margin: "5px 0",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};