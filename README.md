## [Bootstrap source](https://html5up.net/hyperspace)
----

**1. Site Mission:**
    Allow users to become more familiar with the lobbying firms and funds that their representatives engage with. 
**2. Team Members and Roles:**
    1. Gurleen K.
        a. Implemented HTML and CSS handlebars and bootstrap frameworks.
        b. Worked on implementing API calls and visualizing data using Chart.js
    2. Sanchita K.
        a. Implemented user authentication using passport.js
        b. Designed unit tests to verify secure password implementation
        c. Created and maintained database storing user account information
**3. Site Goals:**
    1. Inspire users to become more politically engaged and informed on the assignments and bills their representatives champion
    2. Recognize financial incentives legislators may have that may impact how they execute their legislatives roles and responsibilities
**4. API Code Snippets**
    ```js
    xhttp.open("GET", `https://www.opensecrets.org/api/?method=candContrib&cid=N00027860&apikey=${apikey}&output=json`, true);
    xhttp.open("GET", `https://www.opensecrets.org/api/?method=candIndustry&cid=N00027860&cycle=${cycle}&apikey=${apikey}&output=json`, true);
    xhttp.open("GET", `https://newsapi.org/v2/everything?q=${sen}&from=2021-11-01&sortBy=publishedAt&apiKey=${apikey}`, true);
    ```
**5. Tools and Resources Used:**
    1. [HTML5UP.net](https://html5up.net/)
    2. [Open Secrets](https://www.opensecrets.org/open-data/api-documentation)
    3. [News API](https://newsapi.org/)
**6. [Site URL]()**

> Assignment 3
> > ## Requirement 4: 
> > ### Charting Library
> > Our project uses Chart.js to display data received from the API as bar graphs. We thought this was a 
> > suitable  option for displaying the data since there are multiple sources of funds legislators receive and
> > this allows  users to see both the top sources of political contributions a politician receives and 
> > compare the amounts of  funds received. This allows users to get a more holistic image of the different 
> > factors that may be  influencing the actions and priorities of their legislators. It can also shed light
> > on how they approach  their committee or other special assignments.
> > ### API Data
> > On the user's dashboard, the user is presented with the option to view financial data on their senators 
> > and or their representative. The senators and representative presented here come from the information the
> > user entered when creating their account. The financial data is retrieved from the OpenSecrets API. 
> > Currently, our application uses two of their available data retrieval methods to show the user data on 
> > the top industries and contributors to a congressional member. In addition, we use a news API to gather 
> > recent news on each of  the user's representatives. By combining this information, we aim to give users a
> > more holistic and transparent understanding of the affairs and political assignments their
> > representatives take on as well as  highlight financial dealings users may not have been aware of that 
> > could impact how a member executes their  legislative responsibilities. 

> Assignment 2
> > ## Unit testing: Requirement 4:
> > Our team will write unit tests that will ensure the functionality of our url's and routes.
> > This would also verify that each page is displayed once the action is completed/verified. 
> > Jest offers diverse functionality in testing asynchronous code that would allows us to verify
> > multiple actions that would occur at once. In addition, we will focus on having test cases that ensure 
> > the correct validation of user information. This would be done by implementing jest testing methods
> > that are provided in the documentation. 
> > 
> > As the project begins to incorporate other functionality such as making API calls and storing
> > data in a database. Jest will be a useful tool in ensuring that these functionalities are 
> > performing correctly. The Async and Await tools in jest will offer a great way to test these 
> > operations within our project


[ERD DIAGRAM](https://lucid.app/lucidchart/551dc7ae-66f9-415e-aa19-549773ecf91e/edit?viewport_loc=-232%2C-11%2C2219%2C1065%2C0_0&invitationId=inv_ce698ca7-b8c7-4a7c-bd23-18b52956344d)