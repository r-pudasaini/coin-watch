# coin-tracer

This is a React Application that closely models [this tutorial by Code Commerce](https://www.youtube.com/watch?v=gxXw-M5lDOw&t=3841s).
I have added some custom features of my own into this application, including a Seach Bar, a pager, and a load more button. 

Branch Index <br />

<skip> main -> Contains the React code corresponding to the deployed application. Includes the search bar. 
<skip> gh-pages -> Contains a production build of the main branch that runs on GitHub pages. Here is the link to the app.  
<skip> page-changed -> Contains React source code for the paging system. The paging system allows the user to change the number of coins they see in one page, and to move from one page of coins to another. The main branch has no notion of pages. 


Since I use the free plan of the Coin Gecko API, and the paging system I developed quickly exhausts the number of API calls I'm allowed to make, the paging system is not displayed on the main branch. Anyone who'd like to review this code, and suggest their solutions to resolve this problem can submit a pull request to the page-changed branch. 
