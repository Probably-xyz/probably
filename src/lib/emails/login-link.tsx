/* eslint-disable react/no-unescaped-entities */
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface MagicLinkEmailProps {
    magicLink?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  
    console.log(baseUrl)

  export const MagicLinkEmail = ({
    magicLink = 'https://raycast.com',
  }: MagicLinkEmailProps) => (
    <Html>
      <Head />
      <Preview>Log in with this magic link.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Link href="https://prbly.xyz">
          <Img
            src={`${baseUrl}/5.png`}
            width={58}
            height={58}
            alt="Probably"
          />
          </Link>
          <Heading style={heading}>🪄 Your magic link</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href={magicLink}>
                Sign in
              </Link>
            </Text>
            <Text style={paragraph}>
              If you didn't request this, please ignore this email.
            </Text>
          </Section>
          <Text style={paragraph}>
            An email <br/> By Probably
          </Text>
          <Hr style={hr} />
          <Img
            src={`${baseUrl}/5.png`}
            width={38}
            height={38}
            style={{
              WebkitFilter: 'grayscale(100%)',
              filter: 'grayscale(100%)',
              margin: '20px 0',
            }}
          />
          <Text style={footer}>  &copy; 2024 Probably</Text>
          {/* <Text style={footer}>
            2093 Philadelphia Pike #3222, Claymont, DE 19703
          </Text> */}
        </Container>
      </Body>
    </Html>
  );
  
  export default MagicLinkEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 25px 48px',
    backgroundImage: 'url("/assets/raycast-bg.png")',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat, no-repeat',
  };
  
  const heading = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '48px',
  };
  
  const body = {
    margin: '24px 0',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const link = {
    color: '#5D31FF',
  };
  
  const hr = {
    borderColor: '#dddddd',
    marginTop: '48px',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
    marginLeft: '4px',
  };
  