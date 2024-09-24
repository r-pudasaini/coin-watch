# coin-tracer


This branch of the React App contains the search bar and load more functionality seen in the main branch, AND a paging mechanism. The CoinGecko API I invoke in this project 
allows you to specify the number of entries from the site, and a page number referring to these entries. 

However, CoinGecko limits the number of API calls you can make in a certain period of time, so simply clicking the next page button, or changing the number of entries per page too quickly may "freeze" the application due to exhausting the number of alloted API calls. 

This is why I keep the paging logic separate from the main branch, which contains only the source code you see on the deployment. 
To run the app on your machine, pull the source code of the app onto your machine, and type 
```$ npm start```
at the terminal. 
