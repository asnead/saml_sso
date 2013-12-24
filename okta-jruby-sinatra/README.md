Okta Ruby Sinatra sample
=========================

This application shows how to protect your application using Okta. Gems omniauth and omniauth-saml are used. 

The idea is only to show how to integrate and what options to provide when configuring Okta. Please follow best practices for securing your application like setting a random secure token for session etc.

You need the idp fingerprint and target url from Okta. You can get
these details from the Okta team when you ask them to configure you
application in Okta.

For the sample configuration, please refer the my.thoughtworks.com
page for okta samples.

JRuby issue                                                                                  
=============                                                                                
                                                                                             
There is an issue with canonicalization in nokogiri which make                               
ruby-saml gem not work on jruby.                                                             
https://github.com/sparklemotion/nokogiri/issues/226                                         
                                                                                             
This issue is fixed                                                                          
https://github.com/sparklemotion/nokogiri/commit/dc7422bbb7bdc153e51b76026ae70c4a7c7a6f3a    
but not released yet. So we patched 1.6.0 release of nokogiri with                           
this commit and used it. Please check the Gemfile.                                           