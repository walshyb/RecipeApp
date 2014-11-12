#!/usr/bin/env python
#Hosted Google App Engine (GAE) script that implements queries to Parse and sends JSON objects to front-end

import webapp2
import os, sys
from Scripts import ParsePy
#import cgi #unnecessary

queryType = "No queryType was passed"
ParsePy.APPLICATION_ID = "xxx"
ParsePy.MASTER_KEY = "xxx"

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Hello world!')
        self.response.headers['Access-Control-Allow-Origin'] = '*'
        #do something
        
        #gameScore = ParsePy.ParseObject("GameScore")
        #gameScore.score = 1337
        #gameScore.playerName = "Sean Plott"
        #gameScore.cheatMode = False
        #gameScore.save()

    def post(self):     
        queryType = self.request.get("queryType")
        self.response.headers.add_header('Access-Control-Allow-Origin', '*')
        self.response.headers['Content-Type'] = 'text/plain'
        #self.response.write(cgi.escape(self.request.get('var')))
        self.response.write(queryType)

    def options(self):      
        self.response.headers['Access-Control-Allow-Origin'] = '*'
        self.response.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
        self.response.headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE'

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
