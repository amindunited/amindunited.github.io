# Testing React Apollo

## Links

### Tutorials

- [Ben Awad - How to test React and Apollo code with MockedProvider](https://www.youtube.com/watch?v=QMU26H-ZN2E)
  - [Code Example](https://github.com/benawad/graphql-typescript-stripe-example/tree/mock-provider)

- [How To GraphQL](https://www.howtographql.com/)

### Solution
- [MockedProvider query with Fragments throwing __typename warning](https://github.com/apollographql/react-apollo/issues/1747)
  - [Deeper Discussion](https://github.com/apollographql/react-apollo/issues/1747#issuecomment-553180150)

### Articles
- [Gotchas using React Apollo MockProvider](https://levelup.gitconnected.com/gotchas-using-react-apollo-mockprovider-ec2a22a07e76)

- [Building Frontend Applications By Mocking Your Entire API With Testing Tools](https://medium.com/swlh/building-frontend-applications-by-mocking-your-entire-api-with-testing-tools-2f050359677f)

- [Testing tips for ApolloClient with React](https://medium.com/@jialhe85/testing-tips-for-apolloclient-with-react-b58373eebb96)


### GraphQL Docs:
  - [Testing React Components](https://www.apollographql.com/docs/react/development-testing/testing/)

### Mocked Provider - @TODO Cleanup
```
<MockedProvider mocks={mocks}>
</MockedProvider>
```

### Wait for Rerender (act()) - @TODO Cleanup
```
const waitForData = (duration = 0): Promise<void> => new Promise(res => setTimeout(res, duration));
```

```
setup();
await act(async () => {
  await waitForData();
  const modal = screen.getByText('Modal');
  userEvent.click(modal);
  expect(getNavFunctionSpy).toHaveBeenCalledWith(completedUrl);
  expect(true).toBeTruthy();
});
```

### In Memory Cache  Example - @TODO Cleanup

```
const mockResponses: MockedResponse[] = [
  {
    request: {
      query: GET_ADDRESSBOOK_COMPANY,
      variables: { id: 123 },
    },
    result: (): FetchResult => {
      return {
        data: {
          addressBookCompany: {
            ...getMockAddressBookCompany(),
            id: 123,
          },
        },
      };
    },
  },
];
```

```
function setup(contract: ContractFields) {
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
  });

  return render(
    <MockedProvider mocks={mocks} addTypename={false} cache={new InMemoryCache({ fragmentMatcher })}>
      <Router>
        <ContractForm contract={contract} errors={[]} onSave={jest.fn()} />
      </Router>
    </MockedProvider>,
  );
}
```


### __typename Error

- inMemoryCache (IntrospectionFragmentMatcher)
- manually adding __typename to mocks
- addTypename = true/false

 This eventually fixed it:
```
<MockedProvider
  mocks={mocks}
  addTypename={false} 
  defaultOptions={{
    watchQuery: { fetchPolicy: 'no-cache' },
    query: { fetchPolicy: 'no-cache' },
  }}
  >
```
