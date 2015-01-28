#!/usr/bin/env python
#Script to handle different requests for RecipeApp

import webapp2
import json
from Scripts import ParsePy

ParsePy.APPLICATION_ID = "xxx"
ParsePy.MASTER_KEY = "xxx"

#Retrieves last 1000 recipes (temporarily)
def getHomepage():
        query = ParsePy.ParseQuery("Recipe")
        query = query.lte("recipeId", 1000)
        results = query.fetch()
        
        allResults = []        
        
        for i in range(0, len(results)):
            allResults.append({'name': str(results[i].name), 'rating': str(results[i].rating), 'ingredients': str(results[i].ingredients), 'pictureLocation': str(results[i].pictureLocation), "creator": str(results[i].creator), 'recipeId': str(results[i].recipeId)})
            
        return json.JSONEncoder().encode(allResults)