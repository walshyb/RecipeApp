#!/usr/bin/env python
#Hosted Google App Engine (GAE) script that implements queries to Parse and sends JSON objects to front-end

import webapp2
import os, sys
from Scripts import ParsePy
from Scripts import ActionHandler

#queryType = "No queryType was passed"

class MainHandler(webapp2.RequestHandler):
    def get(self):
        
        self.response.write('Hello world!<br><br>')
        self.response.headers['Access-Control-Allow-Origin'] = '*'
        self.response.write(ActionHandler.getHomepage())

    def post(self):     
        action = self.request.get("queryType")
        self.response.headers.add_header('Access-Control-Allow-Origin', '*')
        self.response.headers['Content-Type'] = 'text/plain'
        
        #self.response.write(cgi.escape(self.request.get('var')))
        #self.response.write(queryType)
        
    def options(self):      
        self.response.headers['Access-Control-Allow-Origin'] = '*'
        self.response.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
        self.response.headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE'

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
