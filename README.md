# Indeed Scraper Website

website: https://indeed-scraper-react.netlify.app/
 
Website (frontend) is hosted on netlify and backend is hosted on heroku.

Scraping API (backend):  [link](https://indeed-scraper-react.herokuapp.com/api/scrape)   [Documentation](https://github.com/vasup86/indeed-scraper-backend)

## About
This project was developed using ReactJS, flask, requests and BeautifulSoup. The website works for all current Indeed worldwide domains ([List](https://www.indeed.com/worldwide)). 

## Purpose
The purpose of this website is to automate the process of job searching by providing concise information about each positing in a table. Job positings on Indeed are displayed in a block form and divided over multiple pages which can be hard to naviagte, the website provides a table of job lisitings based on title and location. 

## Website
### Landing Page
The website takes in multiple user inputs such as **job title**, **location**, **Number of pages (default: 0)** <sup>[1]</sup>, **Country**, Distance <sup>[2]</sup>, Date posted <sup>[3]</sup>. (Bold parameters are mandotary, rest are optional)

| Landing Page (initial)  | Landing Page (filled) |
| ------------- | ------------- |
| ![image](https://user-images.githubusercontent.com/83378929/175831169-42f92bf6-995e-42f8-900e-5bb198cc9f4c.png)  | ![image](https://user-images.githubusercontent.com/83378929/175831153-0d660e9a-560f-4a4b-8134-afccc4794c06.png)  |




[1] Pages worth of job listings user wants to scrape. 1 page contains 15 job positings. 
[2] Job search radius based on input location.
[3] When the job listing was posted, ex: 3 days will show only job listings posted in last 3 days. 
### Results Page
The loading time depends on No of pages the user has decided to scrape. 
The scraped job listings are displayed in a table for ease of access. The user can view the jobs on the brower or can export as excel sheet by clicking on 'export to CSV' button. The user can go back and search for different listing.
