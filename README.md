# Travel Republic Front End Dev Technical Test

Take the attached data set hotels.json and write a web page (or simple set of pages) to present the data.

The result set is reasonably large so we need to be be able to filter the data by:
* `Name`;
* `Stars`;
* `UserRating`;
* `MinCost`.

and sort the data by:
* `Distance`;
* `Stars`;
* `MinCost`;
* `UserRating`.

## Things to consider
- performance;
- efficient use of space;
- usability;
- cross-browser;
- responsiveness.

You can use whatever server side technology you like (or none at all if you think that’s appropriate).
Just give us some instructions if you use anything *really* eccentric.

You can use whatever frameworks or libraries you like, but be prepared to justify your use of them.

You should aim to get this test back to us within a day but there is no precise time limit.

## Useful to know
I wanted to respect the `1 day` limit and I think these should be taken in consideration:
- As `tests` was not specified I did not create them;
- No IE version has been specified: this CSS should work correctly from IE11 (flexbox used);
- A better design could have been implemented with some useful components: `<Icon>`, `<Stars>` etc;
- More abstraction could have been done: `<Grid>`, `<FormField>`, etc..