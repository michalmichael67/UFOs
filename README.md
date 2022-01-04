# UFOs
## Project Overview

In this project, the goal was to pull UFO data from a variety of sources and display it on an interactive webpage. One part of the webpage contains a summary about UFOs and the second part contains a user friendly table that stores UFO data. In order to create a user fiendly table, we added filters on multiple criteria such as Date of sighting, City, State, Country, and Shape of UFO.
### Tools
- The table was created using JavaScript
- HTML/CSS and Bootstrap were used to modify the appearance of the webpage.

## Results

When first arriving on the webpage, this is what the user sees:
![UFO_webpage.png](screenshots/UFO_webpage.png)

As you can see in the above image, there are a variety of dates for a UFO sighting, cities, states, countries where a UFO was sighted and the shape of the spotted UFOs. Below we will go through an example of how a user may fitler the table to focus on certain data points.

1. **Filter by Date** - in our case the user typed the date _1/1/2010_ and clicked enter:
![date_filter.png](screenshots/date_filter.png)

2. **Filter by Shape** - in our case the user filtered by _triangle_:
![date_shape_filter.png](screenshots/date_shape_filter.png)

3. **Filter by City** - in our case the user filtered by _El Cajon_:
![date_shape_city_filter.png](screenshots/date_shape_city_filter.png)

From the example, it is clear that as a user inputs more search criteria, the number of table entries become fewer and allow the user to hone in on the data he/she is looking for.

## Summary
### Drawback
The filters for the table need to be an exact match which makes it difficult to search. In our example, the user searched el cajon as the city but had the user searched El Cajon, El cajon, Elcajon or any other variation, there would be no results. 

### Recomendations
1. In order to combat the exact match, update the data entry to allow all capital letters, proper case, or lowercase and to allow users to find data faster.
2. Some of the shapes are not intuitive (light) and so it may be helpful to have a dropdown with the possible shape options rather than a free text entry.