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
            allResults.append({'name': results[i].name, 'rating': results[i].rating, 'ingredients': results[i].ingredients, 'pictureLocation': results[i].pictureLocation, "creator": results[i].creator, 'recipeId': results[i].recipeId})
            
        return json.dumps(allResults)