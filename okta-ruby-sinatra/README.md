Okta Ruby Sinatra sample
=========================

This application shows how to protect your application using Okta. Gems omniauth and omniauth-saml are used.

The idea is only to show how to integrate and what options to provide when configuring Okta. Please follow best practices for securing your application like setting a random secure token for session etc.

You need the idp fingerprint and target url from Okta. You can get
these details from the Okta team when you ask them to configure you
application in Okta.

For the sample configuration, please refer the my.thoughtworks.com
page for okta samples.

Following is the server side setup of Okta application:

![alt text](okta-server-setup.png?raw=true "Okta Server Setup")