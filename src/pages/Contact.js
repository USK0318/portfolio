import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!subject) {
      errors.subject = 'Subject is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!message) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      // Display error messages and prevent form submission
      setFormErrors(errors);
      return;
    }

    // Send email using Email.js
    emailjs.sendForm('service_14zsmq2', 'template_khzdzcs', e.target, 'nHqIuVBfnyh_toEEL')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Reset the form after successful submission
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
        setFormErrors({});
        // Show success message
        alert('Your message has been sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        // Show error message
        alert('An error occurred while sending your message. Please try again later.');
      });
  };

  return (
    <Container component="main" maxWidth="sm" style={{ textAlign: 'center' }}>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <>
          <Typography variant="h5">Get In Touch</Typography>
          <Typography variant="subtitle1">Do you want to have a chat?</Typography>
          <Typography variant="subtitle1">Feel free to send me a message, I will definitely reply.</Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              error={formErrors.name}
              helperText={formErrors.name}
              name='user_name'
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              error={formErrors.subject}
              helperText={formErrors.subject}
              name='user_subject'
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={formErrors.email}
              helperText={formErrors.email}
              name='user_email'
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              error={formErrors.message}
              helperText={formErrors.message}
              name='user_message'
            />
            <Button type="submit" variant="contained" style={{ width: '100%', marginTop: '20px', backgroundColor: 'green', color: '#fff' }}>
              Submit
            </Button>
          </form>
        </>
      </Paper>
    </Container>
  );
};

export default ContactForm;