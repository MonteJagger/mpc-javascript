# How to add a product in SquareUp that links to an external size
In this case, I will demonstrate a book

## Add the Book in SquareUp

In the SquareUp site, click **Create new item** and add the
- title - in the format of {Book title} - {author}
- Price - set to `$0.00`
- image
- description
- categories: **Books & Games** and **Books**

Info is found in Amazon 

Once the book is added search for the link title in the prod product list page
![Screenshot 2024-01-07 at 8 20 39 PM](https://github.com/MonteJagger/mpc-javascript/assets/7373171/607973e7-0352-481b-8558-928125925a74)

Extract and copy the title from the `href` for example: `the-almanac-of-political-corruption-scandals-and-dirty-politics-kim-long`
This is used to search the the page to hide the price and direct the customer to the site.

## Adding in the Script

Add in a new Object with properties:
- `link` - taken from "Copy Link" in amazon when you click the share button. This gives you a shorter link
- `find_string` - this is the title that was extracted earlier. Ex. `the-almanac-of-political-corruption-scandals-and-dirty-politics-kim-long`
- `innerText` - the content to display instead of the price

![Screenshot 2024-01-07 at 8 24 54 PM](https://github.com/MonteJagger/mpc-javascript/assets/7373171/819c5196-d2f2-4ca9-ae4b-91c5884eb19f)

Commit the new changes

Go to the commit history https://github.com/MonteJagger/mpc-javascript/commits/main/script.js
![Screenshot 2024-01-07 at 8 37 00 PM](https://github.com/MonteJagger/mpc-javascript/assets/7373171/0814095e-b0c1-499d-a31a-ea6feb35ec3f)

create a script tag with this. Add the first 5 characters after `mpc-javascript@`
> <script src="https://cdn.jsdelivr.net/gh/MonteJagger/mpc-javascript@{commit-history}/script.js"></script>

ex: <script src="https://cdn.jsdelivr.net/gh/MonteJagger/mpc-javascript@232ea01/script.js"></script>

Copy the script, this custom script will be added in the squareup site

In the squareup site, go to tracking tools and click edit on "Link Items on External Sites"

![Screenshot 2024-01-07 at 8 05 56 PM](https://github.com/MonteJagger/mpc-javascript/assets/7373171/9d8163cd-c229-4483-b4f8-6da4f62121e2)

Paste the script and save.

Boom! Changes should now be there.
