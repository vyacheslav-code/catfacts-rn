# catfacts-rn

I used FlatList from react-native to display the list, because the facts list can be infinite.
To provide required User Flow I set useEffect React hook with empty dependencies, it invokes function that fetches facts from API when component mounts.
There are two states - boolean 'loading' to display loading and prevent button from tapping, array 'facts' with facts that are being displayed.
loadFacts function is fetching data, managing loading state and adding loaded facts to state.
