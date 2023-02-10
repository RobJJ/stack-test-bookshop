Questions

1. In the AddBook component that handle the form submit of data...Do we need to keep a component state here? Im using the state to track the current inputs etc and its reset on the form submit... but is this still helpful/needed?

2. Discuss the use of the useEffect that keeps an eye on the getBooks function which is a callback...
   useEffect(() => {
   getBooks();
   }, [getBooks]);
