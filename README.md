# Stab Rabbit Trip Planner

Original Plan

1. What is the problem you’re solving?
(Frame this as if you’re writing it on your resume)

There is not a good app to map and track places that you have visited or plan to visit with information about the location (wikipedia, attractions, etc.) that combines future travel search integrally

2. What is the solution?

An app that brings together a map view with a dashboard for trip history and planning for exploration (A better Google Travel App that displays meaningful data about destinations, not just prices)

3. What is the project you’re iterating on?

Axolotl Geo Tracking App

4. What is the MVP scope? (core features you’ll be adding to the scratch project you pick up)

APIs (RapidAPI)
* Flight Data (data tested)
* topo-geo.json maps -110m

Dashboard
* Filter for travel destinations
* Filter for flight lists with costs
* Highlight popular destinations for country highlighted
* View information about destinations

Map
* Future planned locations (2-levels: booked, wishlist)
* Tool-tip hover over destination shows details (tourist attractions, etc.)

5. What are the tough technical challenges involved with solving this problem?
* Conditionally rendering our components based on events from charts.js API

6. What are the stretch goals?
* OpenTripMap (data tested)
* Tracking your photos from travel
* COVID-19 Restrictions (data tested)
* Identified COVID-19 high-risk areas
* Past visited locations

7. What is the technology stack?

React/React Hooks/Redux Toolkit/Redux Hooks

8. Team Responsibility breakdown: Who’s working on which part?

All frontend focused (no backend, all API calls with local state management via Redux)



